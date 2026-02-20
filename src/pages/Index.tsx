import React, { useState } from "react";
import { MobileShell } from "@/components/MobileShell";
import { LoadingState } from "@/components/states/LoadingState";
import { EmptyState } from "@/components/states/EmptyState";
import { ErrorState } from "@/components/states/ErrorState";
import { Zap, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockStatus: "loading" | "empty" | "error" | "ready" = "ready";

const Index: React.FC = () => {
  const [demo, setDemo] = useState<"loading" | "empty" | "error" | "ready">("ready");

  return (
    <MobileShell
      title="KRUXT"
      headerRight={
        <div className="h-6 w-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
          <Zap className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
        </div>
      }
    >
      <div className="p-4 space-y-4 fade-in">

        {/* State demo switcher */}
        <div className="rounded-xl bg-kruxt-surface border border-kruxt-border p-3">
          <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2">
            State demo
          </p>
          <div className="flex flex-wrap gap-1.5">
            {(["ready", "loading", "empty", "error"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setDemo(s)}
                className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors ${
                  demo === s
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Demo area */}
        <div className="rounded-xl bg-kruxt-surface border border-kruxt-border overflow-hidden min-h-48">
          {demo === "loading" && <LoadingState variant="pulse" rows={3} />}
          {demo === "empty" && (
            <EmptyState
              title="No activity yet"
              description="Join a guild or complete a quest to see updates here."
              icon={Users}
              action={<Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">Browse Guilds</Button>}
            />
          )}
          {demo === "error" && (
            <ErrorState
              code="500"
              onRetry={() => setDemo("ready")}
            />
          )}
          {demo === "ready" && (
            <div className="p-4 space-y-3">
              {[
                { label: "Active Guild", value: "Void Seekers", icon: Users },
                { label: "Guild Rank",   value: "#7 Global",    icon: Trophy },
                { label: "Points",       value: "12,480 XP",    icon: Zap },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-center justify-between py-2 border-b border-kruxt-border last:border-0">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                    </div>
                    <span className="text-sm text-muted-foreground">{label}</span>
                  </div>
                  <span className="font-display font-semibold text-sm text-foreground">{value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Beta badge */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Zap className="h-4 w-4 text-primary" strokeWidth={2} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display font-semibold text-sm text-foreground">KRUXT Beta</p>
            <p className="text-xs text-muted-foreground">Design system scaffold — no backend connected.</p>
          </div>
          <span className="text-[10px] font-mono bg-primary/10 text-primary border border-primary/20 rounded px-1.5 py-0.5 flex-shrink-0">
            v0.1
          </span>
        </div>

      </div>
    </MobileShell>
  );
};

export default Index;
