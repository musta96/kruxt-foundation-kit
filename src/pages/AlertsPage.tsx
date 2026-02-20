import React from "react";
import { MobileShell } from "@/components/MobileShell";
import { EmptyState } from "@/components/states/EmptyState";
import { Bell } from "lucide-react";

const AlertsPage: React.FC = () => (
  <MobileShell title="Alerts">
    <div className="p-4 fade-in">
      <EmptyState
        title="All clear"
        description="No alerts or notifications at the moment. We'll ping you when something needs your attention."
        icon={Bell}
      />
    </div>
  </MobileShell>
);

export default AlertsPage;
