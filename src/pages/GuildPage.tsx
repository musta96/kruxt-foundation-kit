import React from "react";
import { MobileShell } from "@/components/MobileShell";
import { EmptyState } from "@/components/states/EmptyState";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const GuildPage: React.FC = () => (
  <MobileShell title="Guild">
    <div className="p-4 fade-in">
      <EmptyState
        title="No guild found"
        description="You're not part of a guild yet. Create or join one to unlock leaderboards, missions and perks."
        icon={Users}
        action={
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Join a Guild
          </Button>
        }
      />
    </div>
  </MobileShell>
);

export default GuildPage;
