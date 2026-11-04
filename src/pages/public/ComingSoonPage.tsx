import { Link } from "react-router-dom";
import { 
  Lock, LayoutDashboard, Video, Brain, TrendingUp, 
  Bell, ArrowRight, ShieldCheck 
} from "lucide-react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export default function ComingSoonPage() {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Personal Dashboard",
      desc: "Track your memorisation streak, upcoming classes, and daily revision targets at a glance."
    },
    {
      icon: Video,
      title: "Live Class Integration",
      desc: "Join your 1-on-1 sessions directly from the portal with a single click."
    },
    {
      icon: Brain,
      title: "Hifdh & Revision Logs",
      desc: "Easily submit your daily memorisation and review records to your tutor."
    },
    {
      icon: TrendingUp,
      title: "Progress Analytics",
      desc: "Visualise your growth over time with detailed attendance and retention charts."
    },
    {
      icon: Bell,
      title: "Instant Feedback",
      desc: "Receive tutor notes, corrections, and next steps immediately after class."
    },
    {
      icon: ShieldCheck,
      title: "Parent Monitoring",
      desc: "A linked parent portal to keep guardians updated on attendance and progress."
    }
  ];

  return (
    <div className="min-h-screen bg-ivory relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-emerald-forest/5 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F3B37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-app py-20 md:py-32 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-[#a07d2e] text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in-up">
          <Lock size={14} />
          Under Construction
        </div>

        {/* Headings */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-emerald-deep mb-6 max-w-3xl leading-tight animate-fade-in-up animation-delay-100">
          A World-Class Learning Experience is <span className="text-[#C7A45D] italic">Coming Soon</span>
        </h1>
        
        <p className="text-lg text-slate max-w-2xl mb-12 animate-fade-in-up animation-delay-200">
          We are building a secure, distraction-free Student and Parent Portal designed to make tracking your Qur'an journey seamless. 
        </p>

        {/* CTA Box */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 animate-fade-in-up animation-delay-300">
          <Link to="/apply">
            <Button variant="primary" className="px-8 py-4 rounded-full text-base">
              Enrol Now to Get Early Access
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost" className="px-8 py-4 rounded-full text-base group">
              Contact Admissions
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform ml-1" />
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="w-full">
          <h2 className="text-2xl font-serif font-semibold text-emerald-deep mb-10">Sneak Peek at the Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 border-none shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sage text-emerald-forest grid place-items-center mb-5 group-hover:scale-110 group-hover:bg-emerald-deep group-hover:text-white transition-all">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-emerald-deep mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{feature.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}