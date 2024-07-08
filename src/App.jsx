import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, List, Target, Settings } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ActivityLog from "./pages/ActivityLog.jsx";
import Goals from "./pages/Goals.jsx";
import SettingsPage from "./pages/Settings.jsx";
import LogWorkout from "./pages/LogWorkout.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Activity Log",
    to: "/activity-log",
    icon: <List className="h-4 w-4" />,
  },
  {
    title: "Goals",
    to: "/goals",
    icon: <Target className="h-4 w-4" />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="activity-log" element={<ActivityLog />} />
              <Route path="goals" element={<Goals />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="log-workout" element={<LogWorkout />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;