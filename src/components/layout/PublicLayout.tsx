import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import SiteFooter from "./SiteFooter";
import Logo from "../ui/Logo";

export default function PublicLayout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programmes", path: "/programmes" },
    { name: "Fees & Structure", path: "/fees" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Tutors", path: "/tutors" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-sage">
        <div className="container-app h-20 flex items-center justify-between">
          
          {/* Removed hideText, allowing the component to render the text */}
          <Logo className="h-12 w-auto" />

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-5 text-[13px] font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-2 transition-colors whitespace-nowrap ${
                    isActive ? "text-emerald-forest font-semibold" : "text-slate hover:text-charcoal"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/sign-in" className="text-[13px] font-semibold text-slate hover:text-emerald-forest transition-colors hidden md:block whitespace-nowrap">
              Student Portal
            </Link>
            <Link to="/apply" className="hidden sm:block">
              <Button variant="primary" className="whitespace-nowrap px-5 py-2.5">Enrol Now</Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="xl:hidden p-2 text-emerald-deep hover:bg-sage/50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Side Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] xl:hidden">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          <div className="absolute top-0 right-0 w-[280px] h-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-5 flex items-center justify-between border-b border-sage">
              {/* Removed hideText here as well */}
              <Logo className="h-10 w-auto" />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate hover:text-charcoal bg-sage/50 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                      isActive 
                        ? "bg-emerald-forest text-white" 
                        : "text-charcoal hover:bg-sage/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="p-6 border-t border-sage flex flex-col gap-3">
              <Link to="/sign-in" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-center py-3">Student Portal</Button>
              </Link>
              <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full justify-center py-3">Enrol Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1">
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  );
}