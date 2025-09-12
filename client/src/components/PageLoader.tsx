import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { SkipForward } from 'lucide-react';

interface PageLoaderProps {
  onComplete: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    // Show skip button after 1 second
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 1000);

    // Progress animation
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(onComplete, 500); // Small delay before completing
          return 100;
        }
        return prev + 2;
      });
    }, 40); // Complete in about 2 seconds

    return () => {
      clearTimeout(skipTimer);
      clearInterval(progressTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-background flex items-center justify-center cursor-pointer"
      onClick={handleSkip}
      data-testid="page-loader"
    >
      <div className="text-center space-y-8 max-w-md mx-auto px-6">
        {/* Logo/Name */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-mono" data-testid="text-loader-name">
            asad.mirza
          </h1>
          <p className="text-muted-foreground" data-testid="text-loader-subtitle">
            Portfolio Loading...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xs mx-auto">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
              data-testid="progress-bar"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2" data-testid="text-progress">
            {progress.toFixed(0)}%
          </p>
        </div>

        {/* Skip Button */}
        {showSkip && (
          <div className="animate-in fade-in duration-300">
            <Button
              variant="outline"
              size="sm"
              onClick={handleSkip}
              className="gap-2"
              data-testid="button-skip-loader"
            >
              <SkipForward className="w-4 h-4" />
              Skip
            </Button>
            <p className="text-xs text-muted-foreground mt-2" data-testid="text-skip-hint">
              or click anywhere to skip
            </p>
          </div>
        )}
      </div>
    </div>
  );
}