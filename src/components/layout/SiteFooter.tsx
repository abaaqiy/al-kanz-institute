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
            {/* Increased size from h-11 to h-12 to align with header */}
            <Logo 
              className="h-12 w-auto" 
              textColor="text-white" 
              subTextColor="text-[#C7A45D]" 
            />
            <p className="text-sm leading-relaxed mb-8 pr-4 mt-6">
              Making authentic Qur'anic education accessible to learners around the world through structured learning, qualified tutors, and sincere guidance.
            </p>
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