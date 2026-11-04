import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, RefreshCw, Headphones, Languages, ScrollText, ArrowRight, CheckCircle2, Sparkles, Menu, X } from "lucide-react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import SiteFooter from "../../components/layout/SiteFooter";
import Logo from "../../components/ui/Logo";

const programmes = [
  { icon: BookOpen, title: "Hifdhul-Qur'an", desc: "Structured memorisation programmes designed to help students memorise the Qur'an with accuracy, consistency and proper recitation.", status: "available" },
  { icon: RefreshCw, title: "Murājaʿah", desc: "Guided revision programmes that help students retain what they have memorised, strengthen fluency and maintain consistency.", status: "available" },
  { icon: Headphones, title: "Tajweed", desc: "Learning the rules of Tajweed, understanding their application and improving the correctness of Qur'anic recitation.", status: "available" },
  { icon: Languages, title: "Arabic Language", desc: "Arabic learning to help students develop their understanding of the language of the Qur'an.", status: "available" },
  { icon: ScrollText, title: "Riwayāt & Advanced Studies", desc: "Specialised studies of Qur'anic narrations, their principles, distinguishing features, rules and practical application.", status: "available" },
] as const;

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

export default function HomePage() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-ivory">
      <div className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#0F3B37]">
        
        <div className="absolute inset-0 z-0">
          <img 
            src="/mosque.jpg" 
            alt="Mosque silhouette" 
            loading="lazy"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F3B37] via-[#0F3B37]/90 to-[#0F3B37]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-transparent opacity-20" />
          
          <div 
            className="absolute inset-0 opacity-10 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <header className="relative z-50 w-full border-b border-white/10">
          <div className="container-app h-20 flex items-center justify-between">
            
            {/* Reduced Logo Size to h-12 */}
            <Logo 
              className="h-12 w-auto" 
              textColor="text-white" 
              subTextColor="text-[#C7A45D]" 
            />

            <nav className="hidden xl:flex items-center gap-5 text-[13px] font-medium">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative py-2 transition-colors whitespace-nowrap ${
                      isActive ? "text-[#C7A45D] font-semibold" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C7A45D] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
              <Link to="/sign-in" className="text-[13px] font-semibold text-white/80 hover:text-white transition-colors hidden md:block whitespace-nowrap">
                Student Portal
              </Link>
              <Link to="/apply" className="hidden sm:block">
                <Button variant="gold" className="rounded-full px-6 py-2.5 whitespace-nowrap">Enrol Now</Button>
              </Link>

              <button 
                className="xl:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Side Navigation */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] xl:hidden text-charcoal">
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <div className="absolute top-0 right-0 w-[280px] h-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
              <div className="p-5 flex items-center justify-between border-b border-sage">
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

        <div className="relative z-10 container-app py-20 flex-1 flex flex-col justify-center">
          <div className="max-w-3xl">
            
            <div className="mb-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-md text-[#C7A45D] text-[11px] font-bold tracking-widest uppercase">
                <Sparkles size={14} />
                Learn. Memorise. Revise. Excel.
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-4 tracking-tight">
              Your Journey With the <br />
              <span className="text-[#C7A45D] italic font-light">Qur'an</span> Begins Here.
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl">
              Learn, memorise, revise and perfect your recitation of the Book of Allah through structured online learning. Accessible Qur'anic education, wherever you are.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link to="/apply">
                <Button variant="gold" className="px-8 py-4 rounded-full text-base">
                  Join Al-Kanz
                </Button>
              </Link>
              <Link to="/programmes">
                <button className="flex items-center gap-2 px-6 py-4 rounded-full text-white/80 hover:text-white font-medium transition-colors border border-transparent hover:border-white/20">
                  Explore Programmes <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-ivory to-transparent z-20 pointer-events-none" />
      </div>

      <main className="flex-1 bg-ivory relative z-30 pt-16">
        <section className="container-app pb-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-emerald-deep mb-6">More Than Learning. A Journey of Growth.</h2>
            <p className="text-lg text-slate leading-relaxed">
              Al-Kanz Online Institute is dedicated to providing structured and accessible Qur'anic and Arabic education. Through guided learning, personalised instruction and consistent practice, we help students develop their recitation, strengthen their memorisation and build a lasting relationship with the Qur'an.
            </p>
          </div>
        </section>

        <section className="border-y border-sage bg-white py-20">
          <div className="container-app">
            <div className="flex justify-between items-end mb-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-serif text-emerald-deep mb-3">Our Programmes</h2>
                <p className="text-slate">
                  Structured paths for every learner — from foundational Tajweed to advanced Riwayāt studies.
                </p>
              </div>
              <Link to="/programmes" className="hidden md:flex text-sm font-semibold text-emerald-forest hover:text-emerald-deep items-center gap-1">
                View All <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programmes.map(({ icon: Icon, title, desc }, index) => (
                <Card key={title} className={`hover:-translate-y-1 hover:shadow-hover transition-all border-none bg-ivory ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                  <div className="w-12 h-12 rounded-full bg-white text-emerald-forest shadow-sm grid place-items-center mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-emerald-deep mb-2">{title}</h3>
                  <p className="text-sm text-slate leading-relaxed mb-6">{desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-app grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-emerald-deep mb-6">Why Choose Al-Kanz?</h2>
              <p className="text-slate mb-8 leading-relaxed">
                The institute is not simply intended to be another online Qur'an tutoring service. Our long-term ambition is to become a structured, accessible and reputable centre for Qur'anic learning and memorisation.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Structured learning programmes",
                  "Personalised learning experience",
                  "Guided recitation and correction",
                  "Consistent progress monitoring",
                  "Accessible online classes",
                  "Courses for children and adults"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-emerald-deep rounded-card p-10 md:p-14 text-center relative overflow-hidden flex flex-col justify-center items-center min-h-[350px]">
              <div className="absolute inset-0 opacity-10 border-[20px] border-gold/50 m-4 pointer-events-none rounded-xl" />
              <p className="arabic text-3xl md:text-4xl text-gold mb-6 leading-relaxed relative z-10">
                خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
              </p>
              <p className="text-sm font-medium text-white/80 mb-2 max-w-sm relative z-10">
                "The best of you are those who learn the Qur'an and teach it."
              </p>
              <span className="text-xs text-gold/80 uppercase tracking-widest font-semibold relative z-10">Sahih al-Bukhari</span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}