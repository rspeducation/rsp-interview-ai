import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { InterviewHeader } from './InterviewHeader';
import { QuestionCard } from './QuestionCard';
import { EnhancedAnswerArea } from './EnhancedAnswerArea';
import { NavigationControls } from './NavigationControls';
import { ResultsSummary } from './ResultsSummary';
import { VoicePerformanceMonitor } from './VoicePerformanceMonitor';
import { useEnhancedSpeechRecognition } from '@/hooks/useEnhancedSpeechRecognition';
import { useAudioRecording } from '@/hooks/useAudioRecording';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Play, RotateCcw, Home } from 'lucide-react';
import { getQuestionsDatabase } from '@/data/questionsDatabase';

export interface InterviewState {
  currentIndex: number;
  answers: Record<number, string>;
  startTime: number;
  isCompleted: boolean;
  answeredCount: number;
  skippedCount: number;
}

export const InterviewApp: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [interviewState, setInterviewState] = useLocalStorage<InterviewState>('interview_state', {
    currentIndex: 0,
    answers: {},
    startTime: Date.now(),
    isCompleted: false,
    answeredCount: 0,
    skippedCount: 0,
  });

  const [currentAnswer, setCurrentAnswer] = useState('');
  const [shouldRestartInterview, setShouldRestartInterview] = useState(false);
  const [questions, setQuestions] = useState<string[]>([]);
  const [userFormData, setUserFormData] = useState<any>(null);
  const [topicName, setTopicName] = useState('Mock Interview');
  const [isQuestionReading, setIsQuestionReading] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [showRestartDialog, setShowRestartDialog] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(true);

  const { startRecording, stopRecording, audioBlob } = useAudioRecording();
  
  // Enhanced voice recognition with ultra-fast processing
  const { 
    transcript, 
    interimTranscript,
    isListening, 
    startListening, 
    stopListening, 
    resetTranscript,
    setOnTranscriptUpdate,
    forceRestart,
    confidenceScores,
    processingTime,
    getProcessingStats
  } = useEnhancedSpeechRecognition({
    language: 'en-US',
    maxAlternatives: 10, // Maximum alternatives for best accuracy
    interimResults: true, // Enable live transcription
    continuous: true, 
    responsiveMode: true // Enable ultra-fast processing mode
  });

  // Load form data from localStorage with better handling
  useEffect(() => {
    const userData = localStorage.getItem('userInterviewData');
    if (userData) {
      try {
        const data = JSON.parse(userData);
        console.log('Loaded user data:', data);
        
        const formattedData = {
          userName: data.userName || data.name || 'Anonymous',
          userEmail: data.userEmail || data.email || 'Not provided',
          jobRole: data.selectedRole?.name || data.jobRole || 'Not specified',
          experience: data.experience || 'Not specified',
          level: data.selectedRole?.level || data.level || 'Not specified',
        };
        
        setUserFormData(formattedData);
        // Set the initial topic name from the selected role
        if (data.selectedRole?.name) {
          setTopicName(data.selectedRole.name);
        }
        console.log('Formatted user data:', formattedData);
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  // Load questions based on user selection using category and ID
  useEffect(() => {
    const userInterviewData = localStorage.getItem('userInterviewData');
    if (userInterviewData) {
      try {
        const data = JSON.parse(userInterviewData);
        const selectedRoleId = data.selectedRole?.id;
        const experience = data.experience;
        const category = data.category || 'networking'; // Default to networking if no category
        
        console.log('Loading questions for:', { selectedRoleId, experience, category, selectedRole: data.selectedRole });
        
        // Get the appropriate questions database based on category
        const questionsDb = getQuestionsDatabase(category);
        
        if (selectedRoleId && questionsDb && typeof questionsDb === 'object') {
          const roleQuestions = questionsDb[selectedRoleId as keyof typeof questionsDb];
          
          if (roleQuestions && typeof roleQuestions === 'object') {
            // Safely access the experience-based questions
            const questionSet = (roleQuestions as any)[experience] || (roleQuestions as any).experienced || [];
            
            // Ensure questionSet is always an array
            const questionsArray = Array.isArray(questionSet) ? questionSet : [questionSet];
            setQuestions(questionsArray);
            
            // Set the proper topic name - try multiple sources
            let finalTopicName = 'Mock Interview';
            
            // First try to get name from role questions
            if ('name' in roleQuestions) {
              finalTopicName = (roleQuestions as any).name;
            }
            // Fallback to selected role name from form data
            else if (data.selectedRole?.name) {
              finalTopicName = data.selectedRole.name;
            }
            // Last fallback to jobRole
            else if (data.jobRole) {
              finalTopicName = data.jobRole;
            }
            
            setTopicName(finalTopicName);
            console.log('Questions loaded:', questionsArray.length, 'Topic set to:', finalTopicName);
          } else {
            console.warn('No valid role questions found for ID:', selectedRoleId, 'in category:', category);
            // Use the selected role name as fallback
            if (data.selectedRole?.name) {
              setTopicName(data.selectedRole.name);
            }
            // Set fallback questions from networking
            const fallbackDb = getQuestionsDatabase('networking');
            if (fallbackDb && fallbackDb[1]) {
              const fallbackQuestions = fallbackDb[1];
              if (fallbackQuestions && typeof fallbackQuestions === 'object') {
                const fallbackExperienced = (fallbackQuestions as any).experienced;
                if (fallbackExperienced) {
                  const questionsArray = Array.isArray(fallbackExperienced) ? fallbackExperienced : [fallbackExperienced];
                  setQuestions(questionsArray);
                }
              }
            }
          }
        } else {
          console.warn('No questions database found for category:', category);
          // Use the selected role name as fallback
          if (data.selectedRole?.name) {
            setTopicName(data.selectedRole.name);
          }
          // Fallback to networking
          const fallbackDb = getQuestionsDatabase('networking');
          if (fallbackDb && fallbackDb[1]) {
            const fallbackQuestions = fallbackDb[1];
            if (fallbackQuestions && typeof fallbackQuestions === 'object') {
              const fallbackExperienced = (fallbackQuestions as any).experienced;
              if (fallbackExperienced) {
                const questionsArray = Array.isArray(fallbackExperienced) ? fallbackExperienced : [fallbackExperienced];
                setQuestions(questionsArray);
              }
            }
          }
        }
      } catch (error) {
        console.error('Error parsing user interview data:', error);
      }
    }
  }, []);

  // Load current answer when question changes
  useEffect(() => {
    const savedAnswer = interviewState.answers[interviewState.currentIndex] || '';
    setCurrentAnswer(savedAnswer);
  }, [interviewState.currentIndex]);

  // Enhanced live transcript updates with interim results
  useEffect(() => {
    setOnTranscriptUpdate((liveText: string, interim?: string) => {
      if (!isNavigating && !isQuestionReading) {
        // Update with final transcript
        setCurrentAnswer(liveText);
        
        setInterviewState(prevState => ({
          ...prevState,
          answers: {
            ...prevState.answers,
            [prevState.currentIndex]: liveText
          }
        }));
      }
    });
  }, [interviewState.currentIndex, setOnTranscriptUpdate, setInterviewState, isNavigating, isQuestionReading]);

  // Initialize interview with better restart dialog
  useEffect(() => {
    const hasExistingInterview = localStorage.getItem('interview_state');
    if (hasExistingInterview && !shouldRestartInterview) {
      setShowRestartDialog(true);
    } else {
      startRecording();
      
      if (!interviewState.isCompleted && questions.length > 0) {
        setTimeout(() => {
          readQuestionAloud(questions[interviewState.currentIndex]);
        }, 1000);
      }
    }
  }, [questions]);

  const handleRestartChoice = (restart: boolean) => {
    setShowRestartDialog(false);
    
    if (restart) {
      setShouldRestartInterview(true);
      restartInterview();
    }
    
    startRecording();
    
    if (!interviewState.isCompleted && questions.length > 0) {
      setTimeout(() => {
        readQuestionAloud(questions[interviewState.currentIndex]);
      }, 1000);
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const readQuestionAloud = useCallback((question: string) => {
    console.log('🔊 Reading question aloud with enhanced voice preparation...');
    setIsQuestionReading(true);
    stopListening();
    
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(question);
      utterance.rate = 0.9;
      utterance.volume = 0.8;
      
      utterance.onstart = () => {
        console.log('🎵 Question reading started - preparing enhanced voice recognition');
      };
      
      utterance.onend = () => {
        console.log('✅ Question reading completed - activating enhanced voice recognition');
        setIsQuestionReading(false);
        
        setTimeout(() => {
          if (!isNavigating) {
            resetTranscript();
            startListening();
            console.log('🚀 Enhanced voice recognition activated for ultra-fast input');
          }
        }, 500); // Reduced delay for faster activation
      };
      
      utterance.onerror = (error) => {
        console.error('Speech synthesis error:', error);
        setIsQuestionReading(false);
        setTimeout(() => {
          if (!isNavigating) {
            resetTranscript();
            startListening();
          }
        }, 300);
      };
      
      window.speechSynthesis.speak(utterance);
    } else {
      setIsQuestionReading(false);
      setTimeout(() => {
        if (!isNavigating) {
          resetTranscript();
          startListening();
        }
      }, 300);
    }
  }, [stopListening, resetTranscript, startListening, isNavigating]);

  const restartInterview = () => {
    setIsNavigating(true);
    stopListening();
    setInterviewState({
      currentIndex: 0,
      answers: {},
      startTime: Date.now(),
      isCompleted: false,
      answeredCount: 0,
      skippedCount: 0,
    });
    setCurrentAnswer('');
    setTimeout(() => {
      setIsNavigating(false);
    }, 500);
    toast({
      title: "Interview Restarted",
      description: "Starting fresh interview session.",
    });
  };

  const handleAnswerChange = (value: string) => {
    if (!isNavigating && !isQuestionReading) {
      setCurrentAnswer(value);
      setInterviewState(prev => ({
        ...prev,
        answers: {
          ...prev.answers,
          [prev.currentIndex]: value
        }
      }));
    }
  };

  const navigateToQuestion = (newIndex: number, isSkip: boolean = false) => {
    setIsNavigating(true);
    console.log(`🧭 Navigating to question ${newIndex + 1}${isSkip ? ' (skipped)' : ''}`);
    
    stopListening();
    
    const currentAnswered = !isSkip && currentAnswer.trim();
    const newAnsweredCount = currentAnswered ? interviewState.answeredCount + 1 : interviewState.answeredCount;
    const newSkippedCount = isSkip ? interviewState.skippedCount + 1 : interviewState.skippedCount;
    
    if (newIndex >= questions.length) {
      setInterviewState(prev => ({
        ...prev,
        answers: { ...prev.answers, [prev.currentIndex]: currentAnswer },
        answeredCount: newAnsweredCount,
        skippedCount: newSkippedCount,
        isCompleted: true,
      }));
      stopRecording();
      setIsNavigating(false);
    } else {
      setInterviewState(prev => ({
        ...prev,
        currentIndex: newIndex,
        answers: { ...prev.answers, [prev.currentIndex]: currentAnswer },
        answeredCount: newAnsweredCount,
        skippedCount: newSkippedCount,
      }));
      
      setTimeout(() => {
        setIsNavigating(false);
        readQuestionAloud(questions[newIndex]);
      }, 600);
    }
  };

  const handleNextQuestion = () => {
    if (!currentAnswer.trim()) {
      toast({
        title: "Answer Required",
        description: "Please provide an answer or skip this question.",
        variant: "destructive",
      });
      return;
    }

    // Enhanced confidence tracking
    const questionConfidenceData = {
      questionIndex: interviewState.currentIndex,
      confidenceScores: confidenceScores,
      averageConfidence: confidenceScores.length > 0 ? confidenceScores.reduce((sum, data) => sum + data.confidence, 0) / confidenceScores.length : 0,
      processingStats: getProcessingStats()
    };

    // Save enhanced performance data
    const existingConfidenceData = JSON.parse(localStorage.getItem('questionConfidenceData') || '[]');
    existingConfidenceData.push(questionConfidenceData);
    localStorage.setItem('questionConfidenceData', JSON.stringify(existingConfidenceData));

    navigateToQuestion(interviewState.currentIndex + 1, false);
  };

  const handlePreviousQuestion = () => {
    if (interviewState.currentIndex > 0) {
      navigateToQuestion(interviewState.currentIndex - 1, false);
    }
  };

  const handleSkipQuestion = () => {
    navigateToQuestion(interviewState.currentIndex + 1, true);
    toast({
      title: "Question Skipped",
      description: "Moving to the next question.",
      variant: "default",
    });
  };

  const handleReadAgain = () => {
    if (questions.length > 0) {
      readQuestionAloud(questions[interviewState.currentIndex]);
    }
  };

  // Show restart dialog
  if (showRestartDialog) {
    return (
      <div className="min-h-screen bg-interview-bg flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-gradient-card shadow-interview-lg border-0">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="w-12 h-12 text-warning" />
            </div>
            <CardTitle className="text-xl">Continue or Restart Interview?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-muted-foreground">
              You have an unfinished interview session. Would you like to continue where you left off or restart with a new interview?
            </p>
            
            <div className="flex flex-col gap-3">
              <Button
                onClick={() => handleRestartChoice(false)}
                variant="interview-primary"
                className="flex items-center gap-2"
                size="lg"
              >
                <Play className="w-4 h-4" />
                Continue Previous Interview
              </Button>
              
              <Button
                onClick={() => handleRestartChoice(true)}
                variant="outline"
                className="flex items-center gap-2"
                size="lg"
              >
                <RotateCcw className="w-4 h-4" />
                Restart New Interview
              </Button>

              <Button
                onClick={handleGoHome}
                variant="ghost"
                className="flex items-center gap-2"
                size="lg"
              >
                <Home className="w-4 h-4" />
                Go to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-interview-bg flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading Interview...</h2>
          <p className="text-muted-foreground">Please wait while we prepare your questions.</p>
        </div>
      </div>
    );
  }

  if (interviewState.isCompleted) {
    // Create proper confidence analysis with all required properties
    const confidenceValues = confidenceScores.map(data => data.confidence);
    const enhancedConfidenceAnalysis = confidenceValues.length > 0 ? {
      average: confidenceValues.reduce((sum, conf) => sum + conf, 0) / confidenceValues.length,
      highest: Math.max(...confidenceValues),
      lowest: Math.min(...confidenceValues),
      totalSegments: confidenceValues.length,
      highConfidenceCount: confidenceValues.filter(conf => conf > 0.8).length,
      lowConfidenceCount: confidenceValues.filter(conf => conf < 0.5).length
    } : {
      average: 0,
      highest: 0,
      lowest: 0,
      totalSegments: 0,
      highConfidenceCount: 0,
      lowConfidenceCount: 0
    };

    // Enhanced performance analysis for results
    const overallPerformanceAnalysis = {
      ...getProcessingStats(),
      confidenceAnalysis: confidenceScores
    };
    localStorage.setItem('overallPerformanceAnalysis', JSON.stringify(overallPerformanceAnalysis));

    return (
      <ResultsSummary
        interviewState={interviewState}
        questions={questions}
        audioBlob={audioBlob}
        onRestart={restartInterview}
        topicName={topicName}
        userFormData={userFormData}
        confidenceData={confidenceScores}
        confidenceAnalysis={enhancedConfidenceAnalysis}
      />
    );
  }

  return (
    <div className="min-h-screen bg-interview-bg">
      <InterviewHeader
        currentIndex={interviewState.currentIndex}
        totalQuestions={questions.length}
        startTime={interviewState.startTime}
        answeredCount={interviewState.answeredCount}
        skippedCount={interviewState.skippedCount}
        topicName={topicName}
      />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          <QuestionCard
            questionNumber={interviewState.currentIndex + 1}
            totalQuestions={questions.length}
            question={questions[interviewState.currentIndex]}
            onReadAgain={handleReadAgain}
          />
          
          <EnhancedAnswerArea
            value={currentAnswer}
            onChange={handleAnswerChange}
            isListening={isListening}
            isQuestionReading={isQuestionReading}
            onForceRestart={forceRestart}
            processingTime={processingTime}
            interimTranscript={interimTranscript}
            accuracy={getProcessingStats().accuracy}
          />
          
          {/* Enhanced Voice Performance Monitor */}
          {showPerformanceMonitor && confidenceScores.length > 0 && (
            <VoicePerformanceMonitor
              processingStats={getProcessingStats()}
              totalSegments={confidenceScores.length}
              isVisible={true}
            />
          )}
          
          <NavigationControls
            canGoPrevious={interviewState.currentIndex > 0}
            canGoNext={true}
            onPrevious={handlePreviousQuestion}
            onNext={handleNextQuestion}
            onSkip={handleSkipQuestion}
            isLastQuestion={interviewState.currentIndex === questions.length - 1}
          />
        </div>
      </div>
    </div>
  );
};
