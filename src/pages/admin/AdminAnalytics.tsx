import React from "react";
import { LoadingState } from "@/components/states/LoadingState";
import { BarChart3 } from "lucide-react";

const AdminAnalytics: React.FC = () => (
  <div className="p-6 space-y-5 fade-in">
    <div className="flex items-center gap-2.5">
      <BarChart3 className="h-5 w-5 text-primary" strokeWidth={2} />
      <h1 className="font-display font-bold text-xl text-foreground">Analytics</h1>
      <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">placeholder</span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {["XP over time", "Member growth", "Guild activity", "Rank distribution"].map((chart) => (
        <div key={chart} className="rounded-xl bg-kruxt-surface border border-kruxt-border overflow-hidden">
          <div className="px-4 py-3 border-b border-kruxt-border">
            <span className="font-display font-semibold text-sm text-foreground">{chart}</span>
          </div>
          <div className="flex items-end gap-1 px-4 pt-4 pb-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="skeleton flex-1 rounded-sm"
                style={{ height: `${24 + Math.random() * 64}px` }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AdminAnalytics;
