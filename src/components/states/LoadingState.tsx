import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface LoadingStateProps {
  title?: string;
  description?: string;
  className?: string;
  variant?: "spinner" | "skeleton" | "pulse";
  rows?: number;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  title = "Loading…",
  description = "Fetching data, hang tight.",
  className,
  variant = "skeleton",
  rows = 4,
}) => {
  if (variant === "spinner") {
    return (
      <div className={cn("flex flex-col items-center justify-center gap-3 py-16 fade-in", className)}>
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
        <p className="font-display text-sm font-medium text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div className={cn("flex flex-col gap-3 p-4 fade-in", className)}>
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="skeleton h-10 w-10 rounded-full flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="skeleton h-3.5 rounded w-3/4" />
              <div className="skeleton h-3 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // skeleton (default)
  return (
    <div className={cn("flex flex-col gap-3 p-4 fade-in", className)}>
      <div className="skeleton h-5 rounded w-1/3 mb-1" />
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="skeleton h-14 rounded-lg w-full" />
      ))}
    </div>
  );
};
