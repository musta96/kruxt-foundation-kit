import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Index        from "./pages/Index";
import GuildPage    from "./pages/GuildPage";
import RanksPage    from "./pages/RanksPage";
import AlertsPage   from "./pages/AlertsPage";
import ProfilePage  from "./pages/ProfilePage";
import NotFound     from "./pages/NotFound";

import { AdminShell }       from "./components/AdminShell";
import AdminDashboard       from "./pages/admin/AdminDashboard";
import AdminMembers         from "./pages/admin/AdminMembers";
import AdminRoles           from "./pages/admin/AdminRoles";
import AdminAnalytics       from "./pages/admin/AdminAnalytics";
import AdminBroadcasts      from "./pages/admin/AdminBroadcasts";
import AdminSettings        from "./pages/admin/AdminSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* ── Mobile shell routes ── */}
          <Route path="/"        element={<Index />} />
          <Route path="/guild"   element={<GuildPage />} />
          <Route path="/ranks"   element={<RanksPage />} />
          <Route path="/alerts"  element={<AlertsPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          {/* ── Admin shell routes ── */}
          <Route path="/admin" element={<AdminShell />}>
            <Route index             element={<AdminDashboard />} />
            <Route path="members"    element={<AdminMembers />} />
            <Route path="roles"      element={<AdminRoles />} />
            <Route path="analytics"  element={<AdminAnalytics />} />
            <Route path="broadcasts" element={<AdminBroadcasts />} />
            <Route path="settings"   element={<AdminSettings />} />
          </Route>

          {/* ── Catch-all ── */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
