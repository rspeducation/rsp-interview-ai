import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { VoiceConfidenceChart } from './VoiceConfidenceChart';
import { PDFGenerator, PDFReportData } from '@/utils/pdfGenerator';
import { AudioUtils } from '@/utils/audioUtils';
import { useToast } from '@/hooks/use-toast';
import { 
  CheckCircle, 
  Clock, 
  RotateCcw, 
  Download, 
  Home,
  Mic,
  TrendingUp,
  Star,
  Target,
  BookOpen,
  FileText,
  Music
} from 'lucide-react';

interface VoiceConfidenceData {
  transcript: string;
  confidence: number;
  timestamp: number;
}

interface ConfidenceAnalysis {
  average: number;
  highest: number;
  lowest: number;
  totalSegments: number;
  highConfidenceCount: number;
  lowConfidenceCount: number;
}

interface ResultsSummaryProps {
  interviewState: any;
  questions: string[];
  audioBlob: Blob | null;
  onRestart: () => void;
  topicName: string;
  userFormData: any;
  confidenceData?: VoiceConfidenceData[];
  confidenceAnalysis?: ConfidenceAnalysis;
}

export const ResultsSummary: React.FC<ResultsSummaryProps> = ({
  interviewState,
  questions,
  audioBlob,
  onRestart,
  topicName,
  userFormData,
  confidenceData = [],
  confidenceAnalysis
}) => {
  const { toast } = useToast();
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getOverallScore = () => {
    const completionRate = (interviewState.answeredCount / questions.length) * 100;
    const voiceQuality = confidenceAnalysis ? (confidenceAnalysis.average * 100) : 50;
    const timeBonus = interviewState.skippedCount === 0 ? 10 : 0;
    
    return Math.min(100, Math.round((completionRate * 0.6) + (voiceQuality * 0.3) + timeBonus));
  };

  const overallScore = getOverallScore();

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-50 border-green-200';
    if (score >= 60) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  const generatePDFReport = async () => {
    setIsGeneratingPDF(true);
    
    try {
      const pdfData: PDFReportData = {
        userName: userFormData?.userName || 'Interview Candidate',
        userEmail: userFormData?.userEmail || 'candidate@example.com',
        date: AudioUtils.formatDate(new Date()),
        jobRole: topicName,
        level: userFormData?.level || 'Not specified',
        experience: userFormData?.experience || 'Not specified',
        totalQuestions: questions.length,
        answeredQuestions: interviewState.answeredCount,
        skippedQuestions: interviewState.skippedCount,
        timeSpent: formatTime(Math.floor((Date.now() - interviewState.startTime) / 1000)),
        score: overallScore,
        questions: questions.map((question, index) => ({
          question,
          answer: interviewState.answers[index] || '',
          isSkipped: !interviewState.answers[index]?.trim()
        })),
        strengths: [
          'Clear communication skills',
          'Good technical understanding',
          'Structured approach to problem-solving',
          ...(interviewState.skippedCount === 0 ? ['Completed all questions'] : []),
          ...(confidenceAnalysis && confidenceAnalysis.average > 0.7 ? ['Excellent voice clarity'] : [])
        ],
        improvements: [
          'Provide more detailed examples',
          'Practice explaining complex concepts simply',
          'Include more real-world scenarios in answers',
          ...(interviewState.skippedCount > 2 ? ['Try to answer more questions completely'] : []),
          ...(confidenceAnalysis && confidenceAnalysis.average < 0.6 ? ['Work on speech clarity and pace'] : [])
        ],
        recommendations: [
          'Review advanced concepts in your chosen field',
          'Practice mock interviews regularly',
          'Build more hands-on projects',
          'Stay updated with latest industry trends',
          ...(confidenceAnalysis ? ['Practice speaking clearly for better voice recognition'] : [])
        ],
        voiceAnalysis: confidenceAnalysis ? {
          averageConfidence: confidenceAnalysis.average,
          highestConfidence: confidenceAnalysis.highest,
          lowestConfidence: confidenceAnalysis.lowest,
          totalSegments: confidenceAnalysis.totalSegments,
          highConfidenceCount: confidenceAnalysis.highConfidenceCount,
          lowConfidenceCount: confidenceAnalysis.lowConfidenceCount
        } : undefined
      };

      const pdfBlob = await PDFGenerator.generateInterviewReport(pdfData);
      const fileName = `Interview_Report_${AudioUtils.formatDate(new Date()).replace(/\//g, '-')}.pdf`;
      
      PDFGenerator.downloadPDF(pdfBlob, fileName);
      
      toast({
        title: "PDF Generated Successfully",
        description: "Your interview report has been downloaded with enhanced design and voice analysis",
      });
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "PDF Generation Failed",
        description: "There was an error generating your report. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  /**
   * Download audio recording as MP3 file
   * This function ensures the audio is downloaded in MP3 format
   */
  const downloadAudioRecording = async () => {
    if (audioBlob) {
      try {
        // Convert to MP3 format before download
        const mp3Blob = await AudioUtils.convertBlobToMP3(audioBlob);
        const fileName = `Interview_Recording_${AudioUtils.formatDate(new Date()).replace(/\//g, '-')}.mp3`;
        
        AudioUtils.downloadAudio(mp3Blob, fileName);
        
        toast({
          title: "Audio Downloaded",
          description: "Your interview recording has been downloaded as MP3 format",
        });
      } catch (error) {
        console.error('Error downloading audio:', error);
        toast({
          title: "Audio Download Failed",
          description: "There was an error downloading your audio recording.",
          variant: "destructive"
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-interview-bg p-4">
      <div className="container mx-auto max-w-6xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">Interview Results</h1>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => window.location.href = '/'}>
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
            
            {/* Enhanced PDF Download Button */}
            <Button
              variant="outline"
              onClick={generatePDFReport}
              disabled={isGeneratingPDF}
              className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
            >
              {isGeneratingPDF ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600 mr-2"></div>
              ) : (
                <FileText className="h-4 w-4 mr-2" />
              )}
              {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF Report'}
            </Button>
            
            {/* Enhanced Audio Download Button for MP3 */}
            {audioBlob && (
              <Button
                variant="outline"
                onClick={downloadAudioRecording}
                className="bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100"
              >
                <Music className="h-4 w-4 mr-2" />
                Download MP3 Audio
              </Button>
            )}
            
            <Button onClick={onRestart} variant="interview-primary">
              <RotateCcw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          </div>
        </div>

        {/* Overall Score */}
        <Card className={`border-2 ${getScoreBg(overallScore)}`}>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className={`text-6xl font-bold ${getScoreColor(overallScore)} mb-2`}>
                {overallScore}
              </div>
              <div className="text-2xl text-gray-400 mb-4">/100</div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {topicName} Interview Complete
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {interviewState.answeredCount}
                  </div>
                  <div className="text-sm text-muted-foreground">Answered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">
                    {interviewState.skippedCount}
                  </div>
                  <div className="text-sm text-muted-foreground">Skipped</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {Math.round((interviewState.answeredCount / questions.length) * 100)}%
                  </div>
                  <div className="text-sm text-muted-foreground">Completion</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {confidenceAnalysis ? `${(confidenceAnalysis.average * 100).toFixed(1)}%` : 'N/A'}
                  </div>
                  <div className="text-sm text-muted-foreground">Voice Quality</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Voice Confidence Analysis */}
        {confidenceData.length > 0 && (
          <VoiceConfidenceChart confidenceData={confidenceData} />
        )}

        {/* Question Review */}
        <Card>
          <CardHeader>
            <CardTitle>Question Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {questions.map((question, index) => {
                const answer = interviewState.answers[index] || '';
                const isSkipped = !answer.trim();
                
                return (
                  <div key={index} className="border-l-4 border-l-blue-500 pl-4 py-3">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium">Question {index + 1}</h4>
                      {isSkipped ? (
                        <Badge variant="outline" className="text-orange-600">
                          Skipped
                        </Badge>
                      ) : (
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          Answered
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-2">{question}</p>
                    {!isSkipped && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm">{answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Performance Insights */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {interviewState.answeredCount > questions.length * 0.8 && (
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Excellent completion rate</span>
                  </li>
                )}
                {confidenceAnalysis && confidenceAnalysis.average > 0.7 && (
                  <li className="flex items-center gap-2">
                    <Mic className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Clear and confident speech</span>
                  </li>
                )}
                {interviewState.skippedCount === 0 && (
                  <li className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-purple-500" />
                    <span className="text-sm">Attempted all questions</span>
                  </li>
                )}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-orange-500" />
                Areas for Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {interviewState.skippedCount > 0 && (
                  <li className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-orange-500" />
                    <span className="text-sm">Try to answer all questions</span>
                  </li>
                )}
                {confidenceAnalysis && confidenceAnalysis.average < 0.6 && (
                  <li className="flex items-center gap-2">
                    <Mic className="h-4 w-4 text-red-500" />
                    <span className="text-sm">Work on speech clarity</span>
                  </li>
                )}
                <li className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">Practice with more examples</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Audio Recording */}
        {audioBlob && (
          <Card>
            <CardHeader>
              <CardTitle>Interview Recording</CardTitle>
            </CardHeader>
            <CardContent>
              <audio 
                controls 
                src={URL.createObjectURL(audioBlob)} 
                className="w-full"
              />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
