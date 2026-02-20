import React from "react";
import { EmptyState } from "@/components/states/EmptyState";
import { Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminBroadcasts: React.FC = () => (
  <div className="p-6 space-y-5 fade-in">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <Megaphone className="h-5 w-5 text-primary" strokeWidth={2} />
        <h1 className="font-display font-bold text-xl text-foreground">Broadcasts</h1>
        <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">placeholder</span>
      </div>
      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
        New Broadcast
      </Button>
    </div>

    <EmptyState
      title="No broadcasts sent"
      description="Send announcements and messages to all guild members from here."
      icon={Megaphone}
    />
  </div>
);

export default AdminBroadcasts;
