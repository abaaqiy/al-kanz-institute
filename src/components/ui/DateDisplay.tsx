import { useState, useEffect } from "react";
import { Calendar, MoonStar } from "lucide-react";

export default function DateDisplay() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const gregorianDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);

  const hijriDate = new Intl.DateTimeFormat("en-US-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-8 w-full max-w-4xl mx-auto border border-sage relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-deep/5 rounded-tr-full pointer-events-none" />

      {/* Gregorian */}
      <div className="flex items-center gap-5 relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-sage/50 flex items-center justify-center text-emerald-forest border border-sage/50 shadow-sm">
          <Calendar size={28} />
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] text-emerald-forest uppercase tracking-[0.2em] font-bold mb-1">Gregorian</span>
          <span className="text-lg sm:text-xl font-serif text-emerald-deep whitespace-nowrap">{gregorianDate}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px h-16 bg-sage" />
      <div className="block sm:hidden w-24 h-px bg-sage" />

      {/* Hijri */}
      <div className="flex items-center gap-5 relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold border border-gold/20 shadow-sm">
          <MoonStar size={28} />
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] text-gold uppercase tracking-[0.2em] font-bold mb-1">Hijri</span>
          <span className="text-lg sm:text-xl font-serif text-emerald-deep whitespace-nowrap">{hijriDate} AH</span>
        </div>
      </div>
    </div>
  );
}