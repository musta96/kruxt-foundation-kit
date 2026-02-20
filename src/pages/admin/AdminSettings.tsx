import React from "react";
import { EmptyState } from "@/components/states/EmptyState";
import { Settings } from "lucide-react";

const AdminSettings: React.FC = () => (
  <div className="p-6 space-y-5 fade-in">
    <div className="flex items-center gap-2.5">
      <Settings className="h-5 w-5 text-primary" strokeWidth={2} />
      <h1 className="font-display font-bold text-xl text-foreground">Settings</h1>
      <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">placeholder</span>
    </div>

    <EmptyState
      title="Settings coming soon"
      description="Guild configuration, roles, and integration settings will appear here."
      icon={Settings}
    />
  </div>
);

export default AdminSettings;
