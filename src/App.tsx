import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import CandidatesPage from "@/pages/CandidatesPage";
import ProspectsPage from "@/pages/ProspectsPage";
import ReportsPage from "@/pages/ReportsPage";
import ActivityPage from "@/pages/ActivityPage";
import HelpPage from "@/pages/HelpPage";
import GeneratePage from "@/pages/GeneratePage";
import ReviewQueuePage from "@/pages/ReviewQueuePage";
import ApplicationsPage from "@/pages/ApplicationsPage";
import FollowUpsPage from "@/pages/FollowUpsPage";
import NotFoundPage from "@/pages/NotFoundPage";

const queryClient = new QueryClient();

export default function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CandidatesPage />} />
            <Route path="/prospects" element={<ProspectsPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/activity" element={<ActivityPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/generate" element={<GeneratePage />} />
            <Route path="/review-queue" element={<ReviewQueuePage />} />
            <Route path="/applications" element={<ApplicationsPage />} />
            <Route path="/follow-ups" element={<FollowUpsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
