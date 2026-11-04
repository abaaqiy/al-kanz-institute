import { Link } from "react-router-dom";
import { Calendar, MessageCircle, Video, Mic, MonitorPlay, CreditCard, ShieldCheck, Baby } from "lucide-react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export default function FeesPage() {
  const learningOptions = [
    {
      title: "Recorded Voice Classes",
      platform: "via WhatsApp",
      priceNGN: "₦15,000",
      priceUSD: "$12",
      icon: MessageCircle,
      desc: "Perfect for flexible learning. Receive recorded voice notes from your tutor to listen to and practice on your own schedule.",
    },
    {
      title: "Full Live Audio Classes",
      platform: "via Google Meet",
      priceNGN: "₦20,000",
      priceUSD: "$16",
      icon: Mic,
      desc: "Interactive audio sessions with your tutor. Ideal for focused recitation and correction without the need for video.",
    },
    {
      title: "Hybrid Live Classes",
      platform: "2 Audio + 1 Video",
      priceNGN: "₦25,000",
      priceUSD: "$20",
      icon: MonitorPlay,
      desc: "A balanced mix of audio and video. Two live audio classes for convenience, and one live video class for visual correction.",
    },
    {
      title: "Full Live Video Classes",
      platform: "via Google Meet",
      priceNGN: "₦30,000",
      priceUSD: "$24",
      icon: Video,
      desc: "The most interactive option. Face-to-face live video sessions with your tutor for maximum engagement and correction.",
    },
  ];

  const handleFeesEnquiry = () => {
    const phoneNumber = "2349047686311";
    const text = `*FEES & PAYMENT ENQUIRY*%0A%0AHello Al-Kanz Team,%0A%0AI would like to make an enquiry regarding tuition fees and payment details for your programmes.`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-ivory min-h-screen pb-24">
      {/* Header */}
      <section className="bg-emerald-deep py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full border-[40px] border-gold translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border-[20px] border-gold -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="container-app relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
            Class Structure & <span className="text-gold italic">Fees</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            Flexible learning options designed to suit your schedule, learning style, and budget.
          </p>
        </div>
      </section>

      <div className="container-app -mt-10 relative z-20">
        
        {/* Schedule Banner */}
        <div className="bg-white rounded-xl shadow-sm border border-sage p-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center mb-12">
          <Calendar className="text-gold" size={24} />
          <p className="text-emerald-deep font-medium text-lg">
            <strong className="font-bold">Class Schedule:</strong> Classes are held <strong>3 times per week</strong>.
          </p>
        </div>

        {/* Learning Options Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif text-emerald-deep mb-8 text-center">Learning Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningOptions.map((opt, i) => (
              <Card key={i} className="flex flex-col relative overflow-hidden group hover:border-gold transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-forest/20 group-hover:bg-gold transition-colors" />
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-emerald-forest mb-4">
                  <opt.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-emerald-deep mb-1">{opt.title}</h3>
                <p className="text-xs text-slate font-medium uppercase tracking-wider mb-4">{opt.platform}</p>
                <p className="text-sm text-slate leading-relaxed flex-1 mb-6">{opt.desc}</p>
                
                {/* SWITCHED PRICE LAYOUT */}
                <div className="mt-auto pt-4 border-t border-sage flex items-end justify-between">
                  <div>
                    <span className="block text-2xl font-bold text-emerald-forest">{opt.priceUSD}</span>
                    <span className="text-xs text-slate">per month</span>
                  </div>
                  <span className="text-sm font-semibold text-emerald-forest bg-sage/50 px-2 py-1 rounded">
                    ~ {opt.priceNGN}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Children's Classes Callout */}
        <div className="bg-emerald-deep rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 mb-20 shadow-lg relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 text-white/5">
            <Baby size={200} />
          </div>
          <div className="relative z-10 flex-1 text-center md:text-left">
            <h3 className="text-2xl font-serif text-white mb-3">Children's Classes</h3>
            <p className="text-white/80 leading-relaxed">
              Live Video Classes are highly recommended for children as they allow for better interaction, supervision, correction, and engagement during lessons. However, parents may choose another learning format depending on their child’s needs.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link to="/apply">
              <Button className="bg-gold hover:bg-[#b08f4c] text-emerald-deep font-bold px-8">
                Enrol Your Child
              </Button>
            </Link>
          </div>
        </div>

        {/* Payment Details Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif text-emerald-deep mb-3">Payment Details</h2>
            <p className="text-slate">Please use the button below to enquire about payment and receive the institute's bank details securely.</p>
          </div>

          <Card className="border-2 border-gold/30 bg-gradient-to-b from-white to-sage/10 text-center py-12">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CreditCard size={28} className="text-[#a07d2e]" />
            </div>
            
            <h3 className="text-2xl font-bold text-emerald-deep mb-3">Fees & Payment Enquiry</h3>
            <p className="text-slate mb-8 max-w-md mx-auto">
              To make a payment or ask questions about our tuition fees, please reach out to our team directly on WhatsApp.
            </p>
            
            <Button 
              onClick={handleFeesEnquiry}
              className="bg-[#25D366] hover:bg-[#1EBE5A] text-white px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <MessageCircle size={20} className="mr-2" />
              Enquire on WhatsApp
            </Button>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate">
              <ShieldCheck size={14} className="text-emerald-forest" />
              <span>Your payment details will be provided securely by the admin.</span>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}