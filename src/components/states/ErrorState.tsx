import React from "react";
import { cn } from "@/lib/utils";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
  code?: string | number;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = "Something went wrong",
  description = "We couldn't load this content. Try again or contact support.",
  onRetry,
  code,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-16 px-6 text-center fade-in",
        className
      )}
    >
      {/* Icon */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-destructive/10 blur-xl scale-150" />
        <div className="relative h-16 w-16 rounded-2xl bg-muted border border-destructive/30 flex items-center justify-center shadow-card">
          <AlertTriangle className="h-7 w-7 text-destructive" strokeWidth={1.5} />
        </div>
      </div>

      {/* Text */}
      <div className="space-y-1.5 max-w-xs">
        {code && (
          <p className="text-xs font-mono text-muted-foreground/60 mb-1">
            ERROR {code}
          </p>
        )}
        <p className="font-display font-semibold text-foreground text-base">{title}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Retry */}
      {onRetry && (
        <Button
          variant="outline"
          size="sm"
          onClick={onRetry}
          className="gap-2 border-kruxt-border text-foreground hover:bg-secondary"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Try again
        </Button>
      )}
    </div>
  );
};
