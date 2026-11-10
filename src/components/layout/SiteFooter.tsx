import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "../ui/Logo";

export default function SiteFooter() {
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
    <footer className="bg-emerald-deep text-white/70 py-20 border-t border-white/10">
      <div className="container-app">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <Logo 
              className="h-12 w-auto" 
              textColor="text-white" 
              subTextColor="text-[#C7A45D]" 
            />
            <p className="text-sm leading-relaxed mb-6 mt-6">
              Making authentic Qur'anic education accessible to learners around the world through structured learning, qualified tutors, and sincere guidance.
            </p>
            
            {/* SOCIAL MEDIA LINKS */}
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a 
                href="https://instagram.com/_alkanz_institute" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C7A45D] hover:text-emerald-deep grid place-items-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              
              {/* Twitter / X */}
              <a 
                href="https://twitter.com/alkanzinstitute" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C7A45D] hover:text-emerald-deep grid place-items-center transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-serif text-lg mb-6">Explore</h5>
            <div className="flex flex-col gap-4 text-sm">
              {navLinks.map(link => (
                <Link key={link.path} to={link.path} className="hover:text-[#C7A45D] transition-colors">{link.name}</Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-white font-serif text-lg mb-6">Programmes</h5>
            <div className="flex flex-col gap-4 text-sm">
              <Link to="/programmes" className="hover:text-[#C7A45D] transition-colors">Hifdhul-Qur'an</Link>
              <Link to="/programmes" className="hover:text-[#C7A45D] transition-colors">Murājaʿah</Link>
              <Link to="/programmes" className="hover:text-[#C7A45D] transition-colors">Tajweed</Link>
              <Link to="/programmes" className="hover:text-[#C7A45D] transition-colors">Arabic Learning</Link>
            </div>
          </div>

          <div>
            <h5 className="text-white font-serif text-lg mb-6">Contact</h5>
            <div className="flex flex-col gap-5 text-sm">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-[#C7A45D] shrink-0" />
                <a href="mailto:alkanzinstitute@gmail.com" className="hover:text-[#C7A45D] transition-colors">alkanzinstitute@gmail.com</a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[#C7A45D] shrink-0" />
                <a href="tel:+2349047686311" className="hover:text-[#C7A45D] transition-colors">+234 904 768 6311</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C7A45D] shrink-0" />
                <span>Global Online Institute</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Al-Kanz Online Institute. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}