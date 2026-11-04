import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Layouts
import PublicLayout from "../components/layout/PublicLayout";
import DashboardShell from "../components/layout/DashboardShell";

// Public Pages
import HomePage from "../pages/public/HomePage";
import ProgrammesPage from "../pages/public/ProgrammesPage";
import ContactPage from "../pages/public/ContactPage";
import ApplyPage from "../pages/public/ApplyPage";
import ComingSoonPage from "../pages/public/ComingSoonPage"; 
import AboutPage from "../pages/public/AboutPage"; 
import FeesPage from "../pages/public/FeesPage"; // <-- CRITICAL IMPORT
import { HowItWorksPage, TutorsPage, FAQsPage } from "../pages/public/SimplePages";

// Auth & App Pages
import StudentDashboard from "../features/student/StudentDashboard";


export default function AppRoutes() {
  return (
    <Routes>
      {/* 1. Homepage (Separate Layout) */}
      <Route path="/" element={<HomePage />} />

      {/* 2. Inner Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programmes" element={<ProgrammesPage />} />
        
        {/* CRITICAL FIX: Added the Fees route here */}
        <Route path="/fees" element={<FeesPage />} /> 
        
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/tutors" element={<TutorsPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/sign-in" element={<ComingSoonPage />} /> 
      </Route>

      {/* App Dashboards */}
      <Route element={<ProtectedRoute allowed={["student"]} />}>
        <Route path="/app/student" element={<DashboardShell role="student" />}>
          <Route index element={<StudentDashboard />} />
        </Route>
      </Route>

      {/* Fallback */}
      <Route path="/app" element={<Navigate to="/app/student" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}