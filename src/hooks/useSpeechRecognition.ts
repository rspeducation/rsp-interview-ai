
import { useState, useEffect, useRef, useCallback } from 'react';
import type { SpeechRecognition } from '../types/speechRecognition';

export const useSpeechRecognition = (language = 'en-US') => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const onTranscriptUpdateRef = useRef<((text: string) => void) | null>(null);
  const finalTranscriptRef = useRef('');
  const isActiveRef = useRef(false);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    setIsSupported(!!SpeechRecognition);

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = language;

      recognition.onstart = () => {
        setIsListening(true);
        isActiveRef.current = true;
      };

      recognition.onresult = (event: any) => {
        if (!isActiveRef.current) return;
        
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript + ' ';
          }
        }

        if (finalTranscript) {
          const combined = finalTranscriptRef.current + ' ' + finalTranscript;
          const cleaned = combined.trim().replace(/\s+/g, ' ');
          finalTranscriptRef.current = cleaned;
          setTranscript(cleaned);
          
          if (onTranscriptUpdateRef.current) {
            onTranscriptUpdateRef.current(cleaned);
          }
        }
      };

      recognition.onend = () => {
        setIsListening(false);
        isActiveRef.current = false;
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        isActiveRef.current = false;
      };

      recognitionRef.current = recognition;
    }
  }, [language]);

  const startListening = useCallback(() => {
    if (!recognitionRef.current || !isSupported) return;
    if (isActiveRef.current) return;

    try {
      recognitionRef.current.start();
    } catch (err) {
      console.error('Error starting speech recognition:', err);
    }
  }, [isSupported]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current && isActiveRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (err) {
        console.error('Error stopping speech recognition:', err);
      }
    }
    setIsListening(false);
    isActiveRef.current = false;
  }, []);

  const resetTranscript = useCallback(() => {
    finalTranscriptRef.current = '';
    setTranscript('');
  }, []);

  const setOnTranscriptUpdate = useCallback((callback: (text: string) => void) => {
    onTranscriptUpdateRef.current = callback;
  }, []);

  return {
    transcript,
    isListening,
    isSupported,
    startListening,
    stopListening,
    resetTranscript,
    setOnTranscriptUpdate,
  };
};
