import React from "react";
import { MobileShell } from "@/components/MobileShell";
import { LoadingState } from "@/components/states/LoadingState";
import { Trophy } from "lucide-react";

const RanksPage: React.FC = () => (
  <MobileShell title="Ranks">
    <div className="p-4 fade-in">
      <div className="rounded-xl bg-kruxt-surface border border-kruxt-border overflow-hidden">
        <div className="flex items-center gap-2 px-4 pt-4 pb-3 border-b border-kruxt-border">
          <Trophy className="h-4 w-4 text-primary" strokeWidth={2} />
          <span className="font-display font-semibold text-sm text-foreground">Global Leaderboard</span>
        </div>
        <LoadingState variant="pulse" rows={6} />
      </div>
    </div>
  </MobileShell>
);

export default RanksPage;
