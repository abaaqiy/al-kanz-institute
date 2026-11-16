import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, RefreshCw, Headphones, Languages, ScrollText, 
  CheckCircle2, Calendar, Lock, BookMarked, Globe, Clock, Tag, 
  Sparkles, ArrowRight, Star
} from "lucide-react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

const programmes = [
  {
    id: "hifdh",
    icon: BookOpen,
    title: "Hifdhul-Qur'an",
    desc: "Structured memorisation programmes designed to help students memorise the Qur'an with accuracy, consistency and proper recitation.",
    features: ["Personalised memorisation plan", "Guided recitation and correction", "Regular progress monitoring"],
    status: "available",
  },
  {
    id: "murajaah",
    icon: RefreshCw,
    title: "Murājaʿah",
    desc: "Guided revision programmes that help students retain what they have memorised, strengthen fluency and maintain consistency.",
    features: ["Structured revision schedules", "Fluency and retention focus", "Tutor accountability"],
    status: "available",
  },
  {
    id: "tajweed",
    icon: Headphones,
    title: "Tajweed Studies",
    desc: "Learning the rules of Tajweed, understanding their application and improving the correctness of Qur'anic recitation.",
    features: ["Makharijul-Huruf", "Sifatul-Huruf", "Practical application"],
    status: "available",
  },
  {
    id: "arabic",
    icon: Languages,
    title: "Arabic Language",
    desc: "Arabic learning to help students develop their understanding of the language of the Qur'an.",
    features: ["Foundational grammar", "Qur'anic vocabulary", "Reading comprehension"],
    status: "available",
  },
  {
    id: "riwayat",
    icon: ScrollText,
    title: "Riwayāt & Advanced Studies",
    desc: "Specialised studies of Qur'anic narrations, their principles, distinguishing features, rules and practical application.",
    features: ["Principles of the Riwayah", "Practical application", "Guided recitation"],
    status: "available", 
  },
];

export default function ProgrammesPage() {
  // --- COUNTDOWN LOGIC ---
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

  const handleTuhfatRegistration = () => {
    const phoneNumber = "2349047686311";
    const text = `Assalamu alaykum warahmatullahi wabarakatuhu. I would like to register for Tuhfat-ul-atfal cohort 2 class. My name is .....`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header */}
      <section className="bg-emerald-deep py-20 px-6 relative overflow-hidden">
        <div className="container-app relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
            Our <span className="text-gold italic">Programmes</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            Structured paths for every learner. Explore our core programmes and specialised advanced studies designed to nurture a lifelong connection with the Qur'an.
          </p>
        </div>
      </section>

      {/* Core Programmes Grid */}
      <section className="container-app py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {programmes.map(({ id, icon: Icon, title, desc, features }) => (
            <Card key={id} className="flex flex-col border border-sage/60 shadow-soft hover:shadow-xl transition-all duration-300 bg-white h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-sage/50 text-emerald-forest grid place-items-center">
                  <Icon size={26} />
                </div>
                <Badge tone="gold">Available</Badge>
              </div>
              
              <h3 className="text-xl font-bold font-serif text-emerald-deep mb-3">{title}</h3>
              <p className="text-sm text-slate leading-relaxed mb-6 flex-1">{desc}</p>
              
              <div className="space-y-3 mb-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-charcoal/80">
                    <CheckCircle2 size={18} className="text-emerald-forest shrink-0 mt-0.5" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-4">
                <Link to="/apply" className="block w-full">
                  <Button className="w-full justify-center py-3.5">Apply for this Programme</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* UPCOMING ACTIVE COHORT: TUHFAT-UL-ATFAL */}
      <section className="container-app py-12">
        <div className="bg-[#123F35] rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-gold/20 flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-forest/50 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

          {/* Left: Text & Details */}
          <div className="relative z-10 flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-md text-[#C7A45D] text-[11px] font-bold tracking-widest uppercase">
                <Sparkles size={14} /> Cohort 2
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-md text-[#C7A45D] text-[11px] font-bold tracking-widest uppercase">
                <Clock size={14} /> 3 Weeks
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-2 leading-tight">
              Tuhfat-ul-Atfal
            </h2>
            <h3 className="text-xl md:text-2xl font-serif text-[#C7A45D] italic font-light mb-6">
              Intensive Class
            </h3>
            
            <p className="text-white/70 leading-relaxed mb-8 max-w-lg">
              Join our dedicated programme on the memorisation and explanation of <em>Matn Tuhfat-ul-Atfal</em>, one of the foundational texts in the study of Tajweed. Deepen your understanding of its verses, principles, and practical application.
            </p>

            <div className="mb-8">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <BookMarked size={16} className="text-[#C7A45D]"/> Features of the class
              </h4>
              <ul className="space-y-3">
                {[
                  "Memorization of 61 lines of matn Tuhfat-ul-atfal",
                  "Handout for the class",
                  "Practical application of each rule explained",
                  "Test and certification after the completion of class"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 size={16} className="text-[#25D366] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                <Calendar className="text-[#C7A45D]" size={24} />
                <div>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider mb-1">Duration</p>
                  <p className="text-xs font-bold text-white">Dec 15, 2026 - Jan 5, 2027</p>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                <Globe className="text-[#C7A45D]" size={24} />
                <div>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider mb-1">Mode of Class</p>
                  <p className="text-xs font-bold text-white">Google Meet</p>
                </div>
              </div>
            </div>

            {/* COUNTDOWN TIMER */}
            <div className="bg-[#0F3B37]/80 border border-gold/20 p-4 md:p-6 rounded-2xl mb-8 backdrop-blur-sm">
              <p className="text-xs text-[#C7A45D] font-bold uppercase tracking-widest text-center mb-4">
                Class Commences In
              </p>
              <div className="flex justify-center gap-3 md:gap-6 text-center">
                <div>
                  <div className="bg-white/10 w-14 md:w-16 h-14 md:h-16 rounded-xl flex items-center justify-center text-xl md:text-2xl font-bold text-white shadow-inner">
                    {days}
                  </div>
                  <span className="text-[10px] text-white/50 uppercase mt-2 block tracking-wider">Days</span>
                </div>
                <div>
                  <div className="bg-white/10 w-14 md:w-16 h-14 md:h-16 rounded-xl flex items-center justify-center text-xl md:text-2xl font-bold text-white shadow-inner">
                    {hours}
                  </div>
                  <span className="text-[10px] text-white/50 uppercase mt-2 block tracking-wider">Hours</span>
                </div>
                <div>
                  <div className="bg-white/10 w-14 md:w-16 h-14 md:h-16 rounded-xl flex items-center justify-center text-xl md:text-2xl font-bold text-white shadow-inner">
                    {minutes}
                  </div>
                  <span className="text-[10px] text-white/50 uppercase mt-2 block tracking-wider">Mins</span>
                </div>
                <div>
                  <div className="bg-white/10 w-14 md:w-16 h-14 md:h-16 rounded-xl flex items-center justify-center text-xl md:text-2xl font-bold text-white shadow-inner">
                    {seconds}
                  </div>
                  <span className="text-[10px] text-white/50 uppercase mt-2 block tracking-wider">Secs</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Button 
                onClick={handleTuhfatRegistration}
                variant="gold" 
                className="px-8 py-4 rounded-full text-base shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-1 transition-all"
              >
                Register Now <ArrowRight size={16} className="ml-2" />
              </Button>
              
              {/* Fee Badge */}
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 flex items-center justify-center">
                   <Star className="absolute inset-0 w-full h-full text-[#C7A45D] opacity-20 fill-current" />
                   <span className="relative text-[#C7A45D] font-bold text-sm">₦2k</span>
                </div>
                <div>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider">Fee</p>
                  <p className="text-lg font-bold text-white">₦2,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Flyer Image */}
          <div className="relative z-10 w-full lg:w-[450px] shrink-0">
            <div className="aspect-[3/4] rounded-2xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden relative group">
              <img 
                src="/tuhfat-ul-atfal-cohort2.png" 
                alt="Tuhfat-ul-Atfal Cohort 2 Flyer" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* PAST PROGRAMMES SECTION */}
      <section className="container-app pt-12">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-serif text-emerald-deep mb-4">Past Programmes</h2>
          <p className="text-slate max-w-2xl mx-auto">
            A showcase of our previous specialised short-term courses and historical programmes.
          </p>
        </div>

        <div className="space-y-8">
          
          {/* 1. SHU'BAH INTENSIVE */}
          <div className="bg-white rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-sm border border-sage">
            <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <Badge tone="sage">
                  <Lock size={12} className="mr-1.5" /> Programme Concluded
                </Badge>
                <h2 className="text-2xl font-serif text-emerald-deep mb-4">Three-Week Intensive Course on Riwayah of Shu'bah 'an 'Asim</h2>
                <p className="text-slate leading-relaxed mb-8">
                  A specialised programme designed for students who have completed Qur'an memorisation. Delve into the principles, rules, and practical application of the Shu'bah 'an 'Asim narration.
                </p>
                
                <div className="flex flex-wrap items-center gap-8 opacity-60">
                  <div>
                    <p className="text-xs text-slate uppercase tracking-wider mb-1 flex items-center gap-1"><Tag size={12}/> Course Fee</p>
                    <p className="text-lg font-bold text-charcoal line-through decoration-slate/40">₦3,000</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate uppercase tracking-wider mb-1 flex items-center gap-1"><Clock size={12}/> Duration</p>
                    <p className="text-sm font-medium text-charcoal">3 Weeks</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate uppercase tracking-wider mb-1">Eligibility</p>
                    <p className="text-sm font-medium text-charcoal">Qur'an Memorisation</p>
                  </div>
                </div>
              </div>

              <div className="bg-ivory border border-sage rounded-xl p-8 opacity-80">
                <h3 className="font-serif text-xl text-emerald-deep mb-6">Course Content</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Principles of the Riwayah",
                    "Rules and distinguishing features",
                    "Practical application",
                    "Guided recitation",
                    "Correction and feedback"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate">
                      <CheckCircle2 size={16} className="text-slate/50 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 2. TUHFAT-UL-ATFAL (COHORT 1 - CONCLUDED) */}
          <div className="bg-white rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-sm border border-sage">
            <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <Badge tone="sage">
                  <Lock size={12} className="mr-1.5" /> Programme Concluded
                </Badge>
                <h2 className="text-2xl font-serif text-emerald-deep mb-4">Tuhfat-ul-Atfal Memorisation and Explanation (Cohort 1)</h2>
                <p className="text-slate leading-relaxed mb-8">
                  Our foundational programme on the memorisation and explanation of <em>Matn Tuhfat-ul-Atfal</em>. Students successfully memorised the 61 lines, studied the principles, and underwent a final test to receive their certificates.
                </p>
                
                <div className="flex flex-wrap items-center gap-8 opacity-60">
                  <div>
                    <p className="text-xs text-slate uppercase tracking-wider mb-1 flex items-center gap-1"><Tag size={12}/> Access</p>
                    <p className="text-sm font-medium text-charcoal">Free of Charge</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate uppercase tracking-wider mb-1 flex items-center gap-1"><Clock size={12}/> Duration</p>
                    <p className="text-sm font-medium text-charcoal">1 Month</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate uppercase tracking-wider mb-1 flex items-center gap-1"><Globe size={12}/> Languages</p>
                    <p className="text-sm font-medium text-charcoal">English & Arabic</p>
                  </div>
                </div>
              </div>

              <div className="bg-ivory border border-sage rounded-xl p-8 opacity-80">
                <h3 className="font-serif text-xl text-emerald-deep mb-6">Programme Outcomes</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Memorisation of Matn Tuhfat-ul-Atfal",
                    "Explanation of verses and principles",
                    "Understanding of Tajweed rules",
                    "Practical application in recitation",
                    "Deeper engagement with classical texts"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate">
                      <BookMarked size={16} className="text-slate/50 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}