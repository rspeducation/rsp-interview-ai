import { useState, useEffect, useRef, useCallback } from 'react';
import type { SpeechRecognition, SpeechRecognitionEvent } from '../types/speechRecognition';

interface VoiceConfidenceData {
  transcript: string;
  confidence: number;
  timestamp: number;
  processingTime: number;
}

interface EnhancedVoiceConfig {
  language: string;
  maxAlternatives: number;
  interimResults: boolean;
  continuous: boolean;
  responsiveMode: boolean;
}

export const useEnhancedSpeechRecognition = (config?: Partial<EnhancedVoiceConfig>) => {
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [confidenceScores, setConfidenceScores] = useState<VoiceConfidenceData[]>([]);
  const [processingTime, setProcessingTime] = useState(0);
  const [speechStartTime, setSpeechStartTime] = useState(0);

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const onTranscriptUpdateRef = useRef<((text: string, interim?: string) => void) | null>(null);
  const finalTranscriptRef = useRef('');
  const isActiveRef = useRef(false);
  const shouldContinueRef = useRef(false);
  const confidenceDataRef = useRef<VoiceConfidenceData[]>([]);
  const processingStartRef = useRef(0);

  // Enhanced configuration with defaults
  const voiceConfig: EnhancedVoiceConfig = {
    language: 'en-US',
    maxAlternatives: 5,
    interimResults: true,
    continuous: true,
    responsiveMode: true,
    ...config
  };

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    setIsSupported(!!SpeechRecognition);

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      
      // Enhanced configuration for maximum accuracy and speed
      recognition.continuous = voiceConfig.continuous;
      recognition.interimResults = voiceConfig.interimResults;
      recognition.lang = voiceConfig.language;
      recognition.maxAlternatives = voiceConfig.maxAlternatives;

      recognition.onstart = () => {
        console.log('🎤 Enhanced voice recognition started');
        setIsListening(true);
        isActiveRef.current = true;
        processingStartRef.current = performance.now();
      };

      recognition.onspeechstart = () => {
        setSpeechStartTime(performance.now());
        console.log('🗣️ Speech detected - ultra-fast processing mode');
      };

      recognition.onresult = (event: any) => {
        if (!isActiveRef.current) return;
        
        const processingStart = performance.now();
        let interimText = '';
        let finalText = '';
        let bestConfidence = 0;

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const result = event.results[i];
          const transcript = result[0]?.transcript || '';
          const confidence = result[0]?.confidence || 0;

          if (result.isFinal) {
            finalText += transcript + ' ';
            bestConfidence = Math.max(bestConfidence, confidence);
            
            // Store confidence data with processing time
            const processingTime = performance.now() - processingStart;
            const confidenceData: VoiceConfidenceData = {
              transcript: transcript.trim(),
              confidence: confidence,
              timestamp: Date.now(),
              processingTime: processingTime
            };
            
            confidenceDataRef.current.push(confidenceData);
            setConfidenceScores(prev => [...prev, confidenceData]);
            
            // Log ultra-fast processing
            if (processingTime < 50) {
              console.log(`⚡ Ultra-fast recognition: ${processingTime.toFixed(2)}ms`);
            }
          } else {
            interimText += transcript + ' ';
          }
        }

        // Update transcripts with enhanced processing
        if (finalText) {
          const combined = (finalTranscriptRef.current + ' ' + finalText).trim();
          const cleaned = enhancedTextCleaning(combined);
          
          finalTranscriptRef.current = cleaned;
          setTranscript(cleaned);
          
          if (onTranscriptUpdateRef.current) {
            onTranscriptUpdateRef.current(cleaned, interimText.trim());
          }
        }

        if (interimText && voiceConfig.interimResults) {
          setInterimTranscript(interimText.trim());
          
          if (onTranscriptUpdateRef.current) {
            onTranscriptUpdateRef.current(finalTranscriptRef.current, interimText.trim());
          }
        }

        // Calculate and update processing time
        const totalProcessingTime = performance.now() - processingStart;
        setProcessingTime(totalProcessingTime);
      };

      recognition.onspeechend = () => {
        const speechEndTime = performance.now();
        const totalSpeechTime = speechEndTime - speechStartTime;
        console.log(`🎯 Speech processing completed in ${totalSpeechTime.toFixed(2)}ms`);
      };

      recognition.onend = () => {
        console.log('⛔ Enhanced recognition stopped');
        setIsListening(false);
        isActiveRef.current = false;
        setInterimTranscript('');

        // Auto-restart for continuous high-accuracy recognition
        if (shouldContinueRef.current && voiceConfig.responsiveMode) {
          setTimeout(() => {
            if (!isActiveRef.current) {
              console.log('🔄 Auto-restarting enhanced recognition...');
              startListening();
            }
          }, 100); // Reduced restart delay for responsiveness
        }
      };

      recognition.onerror = (event: any) => {
        console.error('❌ Enhanced recognition error:', event.error);
        setIsListening(false);
        isActiveRef.current = false;
        setInterimTranscript('');

        // Intelligent error recovery
        if (shouldContinueRef.current && voiceConfig.responsiveMode) {
          setTimeout(() => {
            if (!isActiveRef.current) {
              console.log('🔁 Smart recovery restart...');
              startListening();
            }
          }, 200);
        }
      };

      recognitionRef.current = recognition;
    }
  }, [voiceConfig.language, voiceConfig.maxAlternatives, voiceConfig.interimResults, voiceConfig.continuous, voiceConfig.responsiveMode]);

  const startListening = useCallback(() => {
    if (!recognitionRef.current || !isSupported) return;
    if (isActiveRef.current) return;

    try {
      shouldContinueRef.current = true;
      recognitionRef.current.start();
      console.log('🚀 Enhanced voice recognition started with ultra-fast processing');
    } catch (err) {
      console.error('⚠️ Error starting enhanced recognition:', err);
    }
  }, [isSupported]);

  const stopListening = useCallback(() => {
    shouldContinueRef.current = false;
    if (recognitionRef.current && isActiveRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (err) {
        console.error('⚠️ Error stopping enhanced recognition:', err);
      }
    }
    setIsListening(false);
    isActiveRef.current = false;
    setInterimTranscript('');
  }, []);

  const resetTranscript = useCallback(() => {
    finalTranscriptRef.current = '';
    setTranscript('');
    setInterimTranscript('');
    confidenceDataRef.current = [];
    setConfidenceScores([]);
    setProcessingTime(0);
  }, []);

  const setOnTranscriptUpdate = useCallback((callback: (text: string, interim?: string) => void) => {
    onTranscriptUpdateRef.current = callback;
  }, []);

  const forceRestart = useCallback(() => {
    stopListening();
    setTimeout(() => {
      resetTranscript();
      startListening();
    }, 150); // Optimized restart timing
  }, [startListening, stopListening, resetTranscript]);

  const getAverageConfidence = useCallback(() => {
    if (confidenceScores.length === 0) return 0;
    const total = confidenceScores.reduce((sum, data) => sum + data.confidence, 0);
    return total / confidenceScores.length;
  }, [confidenceScores]);

  const getProcessingStats = useCallback(() => {
    if (confidenceScores.length === 0) {
      return {
        averageProcessingTime: 0,
        fastestProcessing: 0,
        slowestProcessing: 0,
        ultraFastCount: 0,
        accuracy: 0
      };
    }

    const processingTimes = confidenceScores.map(data => data.processingTime);
    const average = processingTimes.reduce((sum, time) => sum + time, 0) / processingTimes.length;
    const fastest = Math.min(...processingTimes);
    const slowest = Math.max(...processingTimes);
    const ultraFastCount = processingTimes.filter(time => time < 50).length;
    const highConfidenceCount = confidenceScores.filter(data => data.confidence > 0.9).length;
    const accuracy = (highConfidenceCount / confidenceScores.length) * 100;

    return {
      averageProcessingTime: average,
      fastestProcessing: fastest,
      slowestProcessing: slowest,
      ultraFastCount,
      accuracy
    };
  }, [confidenceScores]);

  return {
    transcript,
    interimTranscript,
    isListening,
    isSupported,
    confidenceScores,
    processingTime,
    startListening,
    stopListening,
    resetTranscript,
    setOnTranscriptUpdate,
    forceRestart,
    getAverageConfidence,
    getProcessingStats,
  };
};

// Enhanced text cleaning for better accuracy
function enhancedTextCleaning(text: string): string {
  return text
    .replace(/\s+/g, ' ') // Normalize whitespace
    .replace(/([.!?])\s*([a-z])/g, '$1 $2') // Fix sentence spacing
    .replace(/\b(\w+)\s+\1\b/gi, '$1') // Remove consecutive duplicates
    .trim();
}
