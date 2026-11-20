import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-36 right-8 z-[90] flex items-center justify-center w-12 h-12 bg-emerald-deep text-white rounded-full shadow-lg hover:bg-emerald-forest hover:-translate-y-1 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="relative z-10" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-[#123F35] text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Back to top
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#123F35] rotate-45" />
          </span>
        </button>
      )}
    </>
  );
}