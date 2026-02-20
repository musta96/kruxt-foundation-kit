import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { PackageOpen } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  action?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = "Nothing here yet",
  description = "This section is empty. Check back later or create something new.",
  icon: Icon = PackageOpen,
  action,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-16 px-6 text-center fade-in",
        className
      )}
    >
      {/* Icon container */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl scale-150" />
        <div className="relative h-16 w-16 rounded-2xl bg-muted border border-kruxt-border flex items-center justify-center shadow-card">
          <Icon className="h-7 w-7 text-muted-foreground" strokeWidth={1.5} />
        </div>
      </div>

      <div className="space-y-1.5 max-w-xs">
        <p className="font-display font-semibold text-foreground text-base">{title}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {action && <div className="mt-1">{action}</div>}
    </div>
  );
};
