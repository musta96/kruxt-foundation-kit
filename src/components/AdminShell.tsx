import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Shield,
  Settings,
  BarChart3,
  Megaphone,
  ChevronLeft,
  ChevronRight,
  Zap,
} from "lucide-react";

interface NavItem {
  label: string;
  to: string;
  icon: React.ElementType;
  badge?: string | number;
}

const navItems: NavItem[] = [
  { label: "Dashboard",  to: "/admin",           icon: LayoutDashboard },
  { label: "Members",    to: "/admin/members",   icon: Users,   badge: "42" },
  { label: "Roles",      to: "/admin/roles",     icon: Shield },
  { label: "Analytics",  to: "/admin/analytics", icon: BarChart3 },
  { label: "Broadcasts", to: "/admin/broadcasts",icon: Megaphone },
  { label: "Settings",   to: "/admin/settings",  icon: Settings },
];

export const AdminShell: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* ── Sidebar ── */}
      <aside
        className={cn(
          "flex flex-col flex-shrink-0 h-full border-r border-kruxt-border bg-sidebar transition-all duration-200",
          collapsed ? "w-14" : "w-56"
        )}
      >
        {/* Logo */}
        <div
          className={cn(
            "flex items-center h-14 border-b border-sidebar-border px-3 gap-2.5 flex-shrink-0",
            collapsed ? "justify-center" : "justify-between"
          )}
        >
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Zap className="h-4 w-4 text-primary" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-sm text-foreground tracking-wide">
                KRUXT
                <span className="ml-1 text-[10px] font-mono text-kruxt-dim px-1 py-0.5 rounded bg-muted align-middle">
                  ADMIN
                </span>
              </span>
            </div>
          )}
          {collapsed && (
            <div className="h-7 w-7 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Zap className="h-4 w-4 text-primary" strokeWidth={2.5} />
            </div>
          )}
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto py-3 px-1.5 space-y-0.5">
          {navItems.map(({ label, to, icon: Icon, badge }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/admin"}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2.5 rounded-md px-2 py-2 text-sm transition-colors group",
                  collapsed ? "justify-center" : "",
                  isActive
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground border border-transparent"
                )
              }
              title={collapsed ? label : undefined}
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className="h-4 w-4 flex-shrink-0"
                    strokeWidth={isActive ? 2.5 : 1.75}
                  />
                  {!collapsed && (
                    <>
                      <span className="flex-1 font-medium truncate">{label}</span>
                      {badge && (
                        <span className="text-[10px] font-mono bg-muted text-muted-foreground rounded px-1.5 py-0.5 leading-none">
                          {badge}
                        </span>
                      )}
                    </>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Collapse toggle */}
        <div className="flex-shrink-0 border-t border-sidebar-border p-2">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={cn(
              "flex items-center justify-center w-full rounded-md py-1.5 text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors text-xs gap-1.5",
              collapsed ? "" : ""
            )}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <>
                <ChevronLeft className="h-4 w-4" />
                <span className="font-medium">Collapse</span>
              </>
            )}
          </button>
        </div>
      </aside>

      {/* ── Main content ── */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="flex-shrink-0 flex items-center h-14 px-5 border-b border-kruxt-border bg-background gap-3">
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-success pulse-gold" />
            <span className="text-xs text-muted-foreground font-mono">beta v0.1</span>
          </div>
          <div className="h-7 w-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
            <span className="text-[10px] font-display font-bold text-primary">A</span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
