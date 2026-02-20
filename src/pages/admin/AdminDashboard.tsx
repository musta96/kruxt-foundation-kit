import React from "react";
import { LoadingState } from "@/components/states/LoadingState";
import { LayoutDashboard, Users, Trophy, Zap } from "lucide-react";

const statCards = [
  { label: "Total Members", value: "—",  icon: Users,         color: "text-kruxt-cyan" },
  { label: "Active Guilds", value: "—",  icon: Users,         color: "text-primary" },
  { label: "Total XP",      value: "—",  icon: Zap,           color: "text-primary" },
  { label: "Top Rank",      value: "—",  icon: Trophy,        color: "text-kruxt-cyan" },
];

const AdminDashboard: React.FC = () => (
  <div className="p-6 space-y-6 fade-in">
    {/* Page title */}
    <div className="flex items-center gap-2.5">
      <LayoutDashboard className="h-5 w-5 text-primary" strokeWidth={2} />
      <h1 className="font-display font-bold text-xl text-foreground">Dashboard</h1>
      <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">placeholder</span>
    </div>

    {/* Stat cards */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {statCards.map(({ label, value, icon: Icon, color }) => (
        <div
          key={label}
          className="rounded-xl bg-kruxt-surface border border-kruxt-border p-4 space-y-3 shadow-card"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-medium">{label}</span>
            <Icon className={`h-4 w-4 ${color}`} strokeWidth={1.75} />
          </div>
          <div className="skeleton h-7 w-16 rounded" />
        </div>
      ))}
    </div>

    {/* Main content placeholder */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 rounded-xl bg-kruxt-surface border border-kruxt-border overflow-hidden">
        <div className="px-4 py-3 border-b border-kruxt-border">
          <span className="font-display font-semibold text-sm text-foreground">Recent Activity</span>
        </div>
        <LoadingState variant="pulse" rows={5} />
      </div>

      <div className="rounded-xl bg-kruxt-surface border border-kruxt-border overflow-hidden">
        <div className="px-4 py-3 border-b border-kruxt-border">
          <span className="font-display font-semibold text-sm text-foreground">Quick Stats</span>
        </div>
        <LoadingState variant="skeleton" rows={4} />
      </div>
    </div>
  </div>
);

export default AdminDashboard;
