
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Type, Activity, Mic, RefreshCw, Volume2, Zap, Clock, Target } from 'lucide-react';

interface EnhancedAnswerAreaProps {
  value: string;
  onChange: (value: string) => void;
  isListening: boolean;
  isQuestionReading?: boolean;
  onForceRestart?: () => void;
  processingTime?: number;
  interimTranscript?: string;
  accuracy?: number;
}

export const EnhancedAnswerArea: React.FC<EnhancedAnswerAreaProps> = ({
  value,
  onChange,
  isListening,
  isQuestionReading = false,
  onForceRestart,
  processingTime = 0,
  interimTranscript = '',
  accuracy = 0,
}) => {
  const [showInterim, setShowInterim] = useState(false);

  useEffect(() => {
    setShowInterim(!!interimTranscript && isListening);
  }, [interimTranscript, isListening]);

  const getStatusBadge = () => {
    if (isQuestionReading) {
      return (
        <Badge variant="secondary" className="bg-blue-100 text-blue-800 animate-pulse">
          <Volume2 className="w-3 h-3 mr-1" />
          Reading Question...
        </Badge>
      );
    }
    
    if (isListening) {
      const isUltraFast = processingTime > 0 && processingTime < 50;
      return (
        <Badge variant="default" className="bg-green-100 text-green-800 animate-pulse">
          <Activity className="w-3 h-3 mr-1 animate-bounce" />
          {isUltraFast ? 'RSP Ultra-Fast Voice Active' : 'RSP Voice Active - Listening'}
          {isUltraFast && <Zap className="w-3 h-3 ml-1 text-yellow-500" />}
        </Badge>
      );
    }
    
    return (
      <Badge variant="outline" className="bg-orange-50 text-orange-600">
        <Mic className="w-3 h-3 mr-1" />
        Voice Inactive
      </Badge>
    );
  };

  const getPerformanceIndicators = () => {
    if (!isListening && processingTime === 0) return null;

    return (
      <div className="flex items-center gap-3 text-xs">
        {processingTime > 0 && (
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span className={processingTime < 50 ? 'text-green-600 font-bold' : 'text-orange-600'}>
              {processingTime.toFixed(1)}ms
            </span>
            {processingTime < 50 && <span className="text-green-600 font-bold">⚡</span>}
          </div>
        )}
        {accuracy > 0 && (
          <div className="flex items-center gap-1">
            <Target className="w-3 h-3" />
            <span className={accuracy > 90 ? 'text-green-600 font-bold' : 'text-orange-600'}>
              {accuracy.toFixed(1)}%
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <Card className="bg-gradient-card shadow-interview-lg border-0 animate-scale-in">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Type className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Your Answer</h3>
            <div className="text-xs text-muted-foreground">
              Enhanced Voice Recognition
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {getStatusBadge()}
            
            {!isListening && !isQuestionReading && onForceRestart && (
              <Button
                variant="outline"
                size="sm"
                onClick={onForceRestart}
                className="text-xs"
              >
                <RefreshCw className="w-3 h-3 mr-1" />
                Restart Voice
              </Button>
            )}
          </div>
        </div>
        
        {/* Performance indicators */}
        {getPerformanceIndicators() && (
          <div className="mt-2 p-2 bg-slate-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-600">Performance:</span>
              {getPerformanceIndicators()}
            </div>
          </div>
        )}
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="relative">
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Your answer will appear here automatically as you speak with enhanced accuracy, or you can type directly..."
            className="min-h-[200px] text-base leading-relaxed resize-none border-2 focus:border-primary transition-colors"
          />
          
          {/* Interim transcript overlay */}
          {showInterim && interimTranscript && (
            <div className="absolute top-2 right-2 max-w-xs p-2 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-700">
              <div className="font-medium mb-1">Live transcription:</div>
              <div className="italic">{interimTranscript}</div>
            </div>
          )}
          
          {isListening && (
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              {processingTime > 0 && processingTime < 50 && (
                <Zap className="w-4 h-4 text-yellow-500 animate-pulse" />
              )}
            </div>
          )}
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2">
            <Mic className="w-4 h-4" />
            <p>
              {isQuestionReading 
                ? "Please wait while the question is being read aloud..."
                : isListening 
                ? "🎤 Enhanced voice recognition is ACTIVE - Ultra-fast processing (targeting <50ms response)"
                : "Enhanced voice recognition will activate after the question is read"
              }
            </p>
          </div>
          
          {processingTime > 0 && (
            <div className="mt-2 text-xs">
              {processingTime < 50 ? (
                <span className="text-green-600 font-bold">
                  ⚡RSP Ultra-fast processing achieved! ({processingTime.toFixed(1)}ms)
                </span>
              ) : (
                <span className="text-orange-600">
                  Processing time: {processingTime.toFixed(1)}ms (optimizing...)
                </span>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
