import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, Users, Trophy, Bell, User } from "lucide-react";

interface TabItem {
  label: string;
  to: string;
  icon: React.ElementType;
}

const tabs: TabItem[] = [
  { label: "Home",     to: "/",          icon: Home },
  { label: "Guild",    to: "/guild",     icon: Users },
  { label: "Ranks",    to: "/ranks",     icon: Trophy },
  { label: "Alerts",   to: "/alerts",    icon: Bell },
  { label: "Profile",  to: "/profile",   icon: User },
];

interface MobileShellProps {
  children: React.ReactNode;
  title?: string;
  headerRight?: React.ReactNode;
}

export const MobileShell: React.FC<MobileShellProps> = ({
  children,
  title,
  headerRight,
}) => {
  return (
    <div className="flex flex-col h-screen max-h-screen bg-background overflow-hidden">
      {/* ── Top header ── */}
      {title && (
        <header className="flex-shrink-0 flex items-center justify-between px-4 pt-safe-top pt-4 pb-3 border-b border-kruxt-border bg-kruxt-surface">
          <span className="font-display font-semibold text-base text-foreground tracking-tight">
            {title}
          </span>
          {headerRight && (
            <div className="flex items-center gap-2">{headerRight}</div>
          )}
        </header>
      )}

      {/* ── Scrollable content ── */}
      <main className="flex-1 overflow-y-auto overscroll-contain">
        {children}
      </main>

      {/* ── Bottom tab bar ── */}
      <nav className="flex-shrink-0 flex items-stretch border-t border-kruxt-border bg-kruxt-surface pb-safe-bottom">
        {tabs.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              cn(
                "flex flex-1 flex-col items-center justify-center gap-1 py-2.5 transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )
            }
          >
            {({ isActive }) => (
              <>
                <div className="relative">
                  <Icon className="h-5 w-5" strokeWidth={isActive ? 2.5 : 1.75} />
                  {isActive && (
                    <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-primary pulse-gold" />
                  )}
                </div>
                <span
                  className={cn(
                    "text-[10px] font-medium tracking-wide",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
