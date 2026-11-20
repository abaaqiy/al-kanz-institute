import { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routes/AppRoutes";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import ScrollToTopButton from "./components/ui/ScrollToTopButton"; // <-- Import

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
        
        {/* GLOBAL FLOATING BUTTONS */}
        <ScrollToTopButton />
        <WhatsAppButton />
      </BrowserRouter>
    </QueryClientProvider>
  );
}