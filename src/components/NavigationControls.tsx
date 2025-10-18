import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, SkipForward, CheckCircle } from 'lucide-react';

interface NavigationControlsProps {
  canGoPrevious: boolean;
  canGoNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSkip: () => void;
  isLastQuestion: boolean;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  canGoPrevious,
  canGoNext,
  onPrevious,
  onNext,
  onSkip,
  isLastQuestion,
}) => {
  return (
    <Card className="bg-gradient-card shadow-interview-md border-0">
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Previous Button */}
          <Button
            variant="interview-nav"
            size="lg"
            onClick={onPrevious}
            disabled={!canGoPrevious}
            className="flex items-center gap-2 min-w-[140px]"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          
          {/* Skip Button */}
          <Button
            variant="interview-skip"
            size="lg"
            onClick={onSkip}
            className="flex items-center gap-2 min-w-[140px]"
          >
            <SkipForward className="w-4 h-4" />
            Skip Question
          </Button>
          
          {/* Next/Finish Button */}
          <Button
            variant="interview-primary"
            size="lg"
            onClick={onNext}
            className="flex items-center gap-2 min-w-[140px]"
          >
            {isLastQuestion ? (
              <>
                <CheckCircle className="w-4 h-4" />
                Finish Interview
              </>
            ) : (
              <>
                Next
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
        
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>
            {isLastQuestion 
              ? "This is the last question. Click 'Finish Interview' to complete."
              : "Answer the question above, then click 'Next' to continue."
            }
          </p>
        </div>
      </CardContent>
    </Card>
  );
};