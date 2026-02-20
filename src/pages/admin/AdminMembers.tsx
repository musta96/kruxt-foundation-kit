import React from "react";
import { LoadingState } from "@/components/states/LoadingState";
import { EmptyState } from "@/components/states/EmptyState";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminMembers: React.FC = () => (
  <div className="p-6 space-y-5 fade-in">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <Users className="h-5 w-5 text-primary" strokeWidth={2} />
        <h1 className="font-display font-bold text-xl text-foreground">Members</h1>
        <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">placeholder</span>
      </div>
      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-1.5">
        <Users className="h-3.5 w-3.5" />
        Invite
      </Button>
    </div>

    {/* Table placeholder */}
    <div className="rounded-xl bg-kruxt-surface border border-kruxt-border overflow-hidden">
      {/* Header row */}
      <div className="grid grid-cols-4 gap-4 px-4 py-2.5 border-b border-kruxt-border">
        {["Member", "Guild", "Rank", "XP"].map((h) => (
          <span key={h} className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
            {h}
          </span>
        ))}
      </div>
      <LoadingState variant="pulse" rows={8} />
    </div>
  </div>
);

export default AdminMembers;
