import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  textColor?: string;
  subTextColor?: string;
  hideText?: boolean; // Added this in case your image already has the text
}

export default function Logo({ 
  className = "w-12 h-12", 
  textColor = "text-emerald-deep", 
  subTextColor = "text-slate",
  hideText = false
}: LogoProps) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      {/* 
        We use mix-blend-multiply so the white background of the PNG 
        blends into the dark teal backgrounds of the website.
      */}
      <div className="relative flex items-center justify-center">
        <img 
          src="/logo.png" 
          alt="Al-Kanz Logo" 
          className={`${className} object-contain transition-transform group-hover:scale-105 mix-blend-multiply`}
        />
      </div>
      
      {/* If hideText is true (because your image already has text), this text block won't show */}
      {!hideText && (
        <div className="leading-tight flex flex-col justify-center">
          <strong className={`block text-[18px] tracking-wide font-bold font-serif ${textColor}`}>
            AL-KANZ
          </strong>
          <span className={`text-[9px] uppercase tracking-[0.25em] font-semibold ${subTextColor}`}>
            Online Institute
          </span>
        </div>
      )}
    </Link>
  );
}