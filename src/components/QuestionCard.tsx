import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Volume2, MessageSquare } from 'lucide-react';

interface QuestionCardProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  onReadAgain: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  questionNumber,
  totalQuestions,
  question,
  onReadAgain,
}) => {
  return (
    <Card className="bg-gradient-card shadow-interview-lg border-0 animate-fade-in-up">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Badge variant="default" className="bg-gradient-primary px-3 py-1">
              Question {questionNumber}
            </Badge>
            <span className="text-sm text-muted-foreground">
              of {totalQuestions}
            </span>
          </div>
          
          <Button
            variant="interview-nav"
            size="sm"
            onClick={onReadAgain}
            className="flex items-center gap-2"
          >
            <Volume2 className="w-4 h-4" />
            Read Again
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          
          <div className="flex-1">
            <p className="text-lg font-medium text-foreground leading-relaxed">
              {question}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};