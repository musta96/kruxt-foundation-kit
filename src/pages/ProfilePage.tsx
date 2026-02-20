import React from "react";
import { MobileShell } from "@/components/MobileShell";
import { LoadingState } from "@/components/states/LoadingState";
import { User } from "lucide-react";

const ProfilePage: React.FC = () => (
  <MobileShell title="Profile">
    <div className="p-4 space-y-4 fade-in">
      {/* Avatar placeholder */}
      <div className="flex flex-col items-center gap-3 py-6">
        <div className="h-20 w-20 rounded-2xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center shadow-gold">
          <User className="h-9 w-9 text-primary" strokeWidth={1.5} />
        </div>
        <div className="text-center space-y-1">
          <div className="skeleton h-5 w-28 rounded mx-auto" />
          <div className="skeleton h-3.5 w-20 rounded mx-auto" />
        </div>
      </div>

      {/* Stats skeleton */}
      <div className="rounded-xl bg-kruxt-surface border border-kruxt-border overflow-hidden">
        <LoadingState variant="skeleton" rows={3} />
      </div>
    </div>
  </MobileShell>
);

export default ProfilePage;
