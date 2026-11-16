import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function CohortCountdown({ darkMode = false }: { darkMode?: boolean }) {
  // Set the target date (December 15, 2026)
  const targetDate = new Date("2026-12-15T09:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = targetDate - new Date().getTime();
      if (remaining <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Format with leading zeros
  const format = (num: number) => num.toString().padStart(2, "0");

  if (timeLeft <= 0) return null; // Don't show if countdown is over

  return (
    <div className={`w-full py-2.5 px-4 text-center border-b ${
      darkMode 
        ? "bg-[#0a2e29] border-white/10 text-white" 
        : "bg-emerald-deep border-emerald-forest text-white"
    }`}>
      <div className="container-app flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
        
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
          <Sparkles size={16} className="text-[#C7A45D]" />
          <span>Registration for <strong className="text-[#C7A45D]">Tuhfat-ul-Atfal Cohort 2</strong> is ongoing.</span>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm bg-white/10 px-3 py-1 rounded-md">
          <span className="text-white/70">Starts in:</span>
          <span className="font-bold">{format(days)}d</span>:
          <span className="font-bold">{format(hours)}h</span>:
          <span className="font-bold">{format(minutes)}m</span>:
          <span className="font-bold text-[#C7A45D]">{format(seconds)}s</span>
        </div>

        <Link to="/programmes" className="text-xs font-bold text-[#C7A45D] hover:text-white transition-colors underline underline-offset-4 decoration-[#C7A45D]/50 hover:decoration-white">
          Register Now
        </Link>
      </div>
    </div>
  );
}