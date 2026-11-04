import { Link } from "react-router-dom";
import { BookOpen, RefreshCw, Headphones, Languages, ScrollText, CheckCircle2, Calendar, Lock, BookMarked, Globe, Clock, Tag } from "lucide-react";
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
    status: "scheduled",
  },
];

export default function ProgrammesPage() {
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
          {programmes.map(({ id, icon: Icon, title, desc, features, status }) => (
            <Card key={id} className="flex flex-col border border-sage/60 shadow-soft hover:shadow-xl transition-all duration-300 bg-white h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-sage/50 text-emerald-forest grid place-items-center">
                  <Icon size={26} />
                </div>
                {status === "available" ? (
                  <Badge tone="gold">Available</Badge>
                ) : (
                  <Badge tone="sage">Scheduled</Badge>
                )}
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
                {status === "available" ? (
                  <Link to="/apply" className="block w-full">
                    <Button className="w-full justify-center py-3.5">Apply for this Programme</Button>
                  </Link>
                ) : (
                  <button 
                    disabled 
                    className="w-full py-3.5 rounded-input bg-sage/50 text-slate font-semibold cursor-not-allowed border border-sage flex items-center justify-center gap-2"
                  >
                    <Calendar size={18} /> Opening Soon
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* PAST PROGRAMMES SECTION */}
      <section className="container-app">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-serif text-emerald-deep mb-4">Past Intensive Programmes</h2>
          <p className="text-slate max-w-2xl mx-auto">
            A showcase of our specialised short-term courses and historical programmes.
          </p>
        </div>

        <div className="space-y-8">
          {/* 1. SHU'BAH INTENSIVE */}
          <div className="bg-[#123F35] rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <Badge tone="sage">
                  <Lock size={12} className="mr-1.5" /> Programme Concluded
                </Badge>
                <h2 className="text-3xl font-serif text-white mb-4">Three-Week Intensive Course on Riwayah of Shu'bah 'an 'Asim</h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  A specialised programme designed for students who have completed Qur'an memorisation. Delve into the principles, rules, and practical application of the Shu'bah 'an 'Asim narration.
                </p>
                
                <div className="flex flex-wrap items-center gap-8 opacity-60">
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1 flex items-center gap-1"><Tag size={12}/> Course Fee</p>
                    <p className="text-lg font-bold text-white line-through decoration-white/40">₦3,000</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1 flex items-center gap-1"><Clock size={12}/> Duration</p>
                    <p className="text-sm font-medium text-white">3 Weeks</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Eligibility</p>
                    <p className="text-sm font-medium text-white">Qur'an Memorisation</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-xl p-8 backdrop-blur-sm opacity-80">
                <h3 className="font-serif text-xl text-white mb-6">Course Content</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Principles of the Riwayah",
                    "Rules and distinguishing features",
                    "Practical application",
                    "Guided recitation",
                    "Correction and feedback"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                      <CheckCircle2 size={16} className="text-gold/50 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <button 
                  disabled 
                  className="w-full py-3.5 rounded-input bg-white/10 text-white/40 font-semibold cursor-not-allowed border border-white/5 flex items-center justify-center gap-2"
                >
                  <Lock size={16} /> Programme Ended
                </button>
              </div>
            </div>
          </div>

          {/* 2. TUHFAT-UL-ATFAL */}
          <div className="bg-[#123F35] rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <div className="mb-4">
                  <Badge tone="sage">
                    <Lock size={12} className="mr-1.5" /> Programme Concluded
                  </Badge>
                </div>
                <h2 className="text-3xl font-serif text-white mb-4">Tuhfat-ul-Atfal Memorisation and Explanation</h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  A dedicated programme on the memorisation and explanation of <em>Matn Tuhfat-ul-Atfal</em>, one of the foundational texts in the study of Tajweed. The programme was designed to help students go beyond memorising the text by developing an understanding of its verses, the Tajweed principles they contain, and their practical application.
                </p>
                
                <div className="grid grid-cols-2 gap-4 opacity-60">
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1 flex items-center gap-1"><Tag size={12}/> Access</p>
                    <p className="text-sm font-medium text-white">Free of Charge</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1 flex items-center gap-1"><Clock size={12}/> Duration</p>
                    <p className="text-sm font-medium text-white">1 Month</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1 flex items-center gap-1"><Globe size={12}/> Languages</p>
                    <p className="text-sm font-medium text-white">English & Arabic</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Institution</p>
                    <p className="text-sm font-medium text-white">Al-Kanz Online Institute</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-xl p-8 backdrop-blur-sm opacity-80">
                <h3 className="font-serif text-xl text-white mb-6">Programme Outcomes</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Memorisation of Matn Tuhfat-ul-Atfal",
                    "Explanation of verses and principles",
                    "Understanding of Tajweed rules",
                    "Practical application in recitation",
                    "Deeper engagement with classical texts"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                      <BookMarked size={16} className="text-gold/50 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <button 
                  disabled 
                  className="w-full py-3.5 rounded-input bg-white/10 text-white/40 font-semibold cursor-not-allowed border border-white/5 flex items-center justify-center gap-2"
                >
                  <Lock size={16} /> Programme Ended
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}