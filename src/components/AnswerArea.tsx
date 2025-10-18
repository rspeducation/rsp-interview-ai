
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Type, Activity, Mic, RefreshCw, Volume2 } from 'lucide-react';

interface AnswerAreaProps {
  value: string;
  onChange: (value: string) => void;
  isListening: boolean;
  isQuestionReading?: boolean;
  onForceRestart?: () => void;
}

export const AnswerArea: React.FC<AnswerAreaProps> = ({
  value,
  onChange,
  isListening,
  isQuestionReading = false,
  onForceRestart,
}) => {
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
      return (
        <Badge variant="default" className="bg-green-100 text-green-800 animate-pulse">
          <Activity className="w-3 h-3 mr-1 animate-bounce" />
          Voice Active - Listening
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

  return (
    <Card className="bg-gradient-card shadow-interview-lg border-0 animate-scale-in">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Type className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Your Answer</h3>
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
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="relative">
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Your answer will appear here automatically as you speak, or you can type directly..."
            className="min-h-[200px] text-base leading-relaxed resize-none border-2 focus:border-primary transition-colors"
          />
          
          {isListening && (
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
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
                ? "🎤 Voice recognition is ACTIVE - speak your answer naturally"
                : "Voice recognition will activate after the question is read"
              }
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
