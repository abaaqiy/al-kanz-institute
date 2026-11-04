import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FileText, CalendarCheck, UserCheck, BookOpen, CheckCircle2, 
  GraduationCap, Globe, Book, ChevronDown, MessageCircle
} from "lucide-react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

// --- HOW IT WORKS PAGE ---
export function HowItWorksPage() {
  const steps = [
    { icon: FileText, title: "1. Explore & Apply", description: "Browse our programmes and submit your online application. Tell us about your goals, current level, and preferences." },
    { icon: CalendarCheck, title: "2. Assessment & Intro", description: "We'll schedule a brief, friendly assessment session to understand your current recitation level and learning needs." },
    { icon: UserCheck, title: "3. Tutor Matching & Plan", description: "Based on your schedule and goals, we match you with a dedicated tutor and create a personalised learning plan." },
    { icon: BookOpen, title: "4. Begin Learning", description: "Start your 1-on-1 live sessions. Track your progress, submit memorisation records, and grow consistently." },
  ];

  const expectations = [
    "Dedicated 1-on-1 live sessions with qualified tutors",
    "Personalised memorisation and revision schedules",
    "Regular progress reports for you and your parents",
    "Access to a secure student portal and resources",
    "Flexible scheduling across different time zones",
    "A supportive, disciplined, and sincere environment",
  ];

  return (
    <div className="bg-ivory min-h-screen pb-20">
      <section className="bg-emerald-deep py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full border-[40px] border-gold translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border-[20px] border-gold -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="container-app relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
            How It <span className="text-gold italic">Works</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            Your journey to a stronger connection with the Qur'an is simple and structured. Here is what the process looks like from application to your first class.
          </p>
        </div>
      </section>

      <section className="container-app -mt-10 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative pt-10 px-6 pb-8 border-none shadow-lg bg-white">
                <div className="absolute -top-6 left-6 w-12 h-12 rounded-xl bg-gold text-emerald-deep grid place-items-center shadow-md">
                  <Icon size={24} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-emerald-deep mb-3 mt-2">{step.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{step.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="container-app py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-forest font-semibold mb-4">
              <span className="w-6 h-px bg-gold" /> The Al-Kanz Experience
            </span>
            <h2 className="text-3xl font-serif text-emerald-deep mb-6">What to Expect as a Student</h2>
            <p className="text-slate mb-8 leading-relaxed">
              We are committed to providing a premium, distraction-free learning environment. Our focus is purely on your spiritual and academic growth in the Qur'an.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {expectations.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-forest shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal/80 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-sage/40 rounded-card p-10 md:p-14 border border-sage relative overflow-hidden text-center flex flex-col justify-center items-center min-h-[350px]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
            <p className="arabic text-3xl md:text-4xl text-emerald-deep mb-6 leading-relaxed">
              خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
            </p>
            <p className="text-sm font-medium text-slate mb-2 max-w-sm">
              "The best of you are those who learn the Qur'an and teach it."
            </p>
            <span className="text-xs text-gold uppercase tracking-widest font-semibold">Sahih al-Bukhari</span>
          </div>
        </div>
      </section>
    </div>
  );
}

// --- TUTORS PAGE ---
export function TutorsPage() {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);
  const [teacherEmail, setTeacherEmail] = useState("");

  const tutors = [
    { 
      name: "Al-Qari Abdulbaaqiy Shefiu-Badmos", 
      role: "Qur'an Teacher & Tajweed Instructor", 
      languages: ["English", "Arabic", "Yoruba"], 
      specialization: "Hifdh, Muraja'ah, Tajweed", 
      bio: (
        <>
          A complete memoriser of the Noble Qur'an and a Qur'an perfector, with an Ijazah in Qur'an recitation and Tajweed. He is highly proficient in the Arabic language, holding recognized certificates showcasing this mastery. As a continuing student of Qira'at and Riwayat, he is committed to deepening his knowledge and proficiency. 
          <br/><br/>
          He memorised the Qur'an at <strong>Al-Madrasatul Islamiyyah Al-Mithaliyyah (المدرسة الإسلامية المثالية), Kubwa, Abuja, Nigeria</strong>. He completed his Junior Secondary (I'daadiy - إعدادي) and Senior Secondary (Thanawiy - ثانوي) studies in Arabic at <strong>Mahdu Najah Al-Islamiy (معهد نجاح الإسلامي), Ibadan, Oyo State, Nigeria</strong>, where he also furthered his Islamic and Arabic learning. He has also attended various Dawrahs and learnt from numerous scholars both offline and online.
          <br/><br/>
          Currently, he is pursuing a degree in <strong>Software Engineering at Obafemi Awolowo University, Ile-Ife, Osun State, Nigeria</strong>. With meaningful years of teaching experience across both offline and online learning environments, he is passionate about imparting authentic Qur'anic knowledge, nurturing proper recitation, and helping learners develop a strong, lasting relationship with the Book of Allah.
        </>
      ), 
      initials: "AS" 
    },
    { 
      name: "Al-Qari Mahmoud Shefiu-Badmos", 
      role: "Qur'an Teacher & Tajweed Instructor", 
      languages: ["English", "Arabic", "Yoruba"], 
      specialization: "Hifdh, Tajweed, Recitation", 
      bio: (
        <>
          A complete memoriser of the Noble Qur'an and a Qur'an perfector, with an Ijazah in Qur'an recitation and Tajweed. He is highly proficient in the Arabic language, holding recognized certificates showcasing this mastery. 
          <br/><br/>
          He memorised the Qur'an at <strong>Al-Madrasatul Islamiyyah Al-Mithaliyyah (المدرسة الإسلامية المثالية), Kubwa, Abuja, Nigeria</strong>. He completed his Junior Secondary (I'daadiy - إعدادي) and Senior Secondary (Thanawiy - ثانوي) studies in Arabic at <strong>Mahdu Najah Al-Islamiy (معهد نجاح الإسلامي), Ibadan, Oyo State, Nigeria</strong>, where he also furthered his Islamic and Arabic learning. He has also attended various Dawrahs and learnt from numerous scholars both offline and online.
          <br/><br/>
          Currently, he is pursuing a degree in <strong>Economics at the University of Ibadan, Oyo State, Nigeria</strong>. He is also a continuing student of Qira'at and Riwayat, and has notably participated and won various prizes in Qur'an Recitation Competitions. With meaningful years of teaching experience across offline and online environments, he is dedicated to helping learners develop a lasting relationship with the Book of Allah.
        </>
      ), 
      initials: "MS" 
    }
  ];

  const toggleReadMore = (index: number) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter(i => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  const handleTeacherApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teacherEmail) return;
    
    const phoneNumber = "2349047686311";
    const text = `*TEACHING APPLICATION*%0A%0AHello Al-Kanz Team,%0A%0AI am a qualified Qur'an/Arabic teacher with an Ijazah and I would like to join your tutoring team.%0A%0A*My Email:* ${teacherEmail}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
    setTeacherEmail(""); 
  };

  return (
    <div className="bg-ivory min-h-screen pb-24">
      <section className="bg-[#123F35] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-0 right-0 w-[800px] h-[800px] text-gold transform translate-x-1/3 -translate-y-1/3" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="20" />
            <path d="M50 10 L90 50 L50 90 L10 50 Z" />
          </svg>
        </div>
        <div className="container-app relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
            Meet Our <span className="text-[#C7A45D] italic">Tutors</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed font-light">
            Learn from dedicated scholars and certified instructors who have devoted their lives to the Book of Allah. 
          </p>
        </div>
      </section>

      <section className="container-app -mt-12 relative z-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {tutors.map((tutor, index) => {
            const isExpanded = expandedIndices.includes(index);
            
            return (
              <Card key={index} className="p-0 overflow-hidden border border-sage/60 shadow-soft hover:shadow-xl transition-all duration-300 bg-white flex flex-col group">
                <div className="relative pt-10 pb-8 px-6 text-center border-b border-sage/50 bg-gradient-to-b from-sage/20 to-white">
                  <div className="w-24 h-24 rounded-full bg-[#123F35] grid place-items-center mx-auto text-3xl font-serif mb-5 shadow-lg ring-4 ring-white relative">
                    <div className="absolute inset-0 rounded-full border-2 border-gold/40"></div>
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#F3DFA2] to-[#C7A45D]">
                      {tutor.initials}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#123F35] mb-1 leading-tight">{tutor.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-[#1D5B49] font-semibold mt-2">{tutor.role}</p>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-6 flex-1">
                    <div className={`text-sm text-slate leading-relaxed text-justify ${!isExpanded ? 'line-clamp-[8]' : ''}`}>
                      {tutor.bio}
                    </div>
                    <button 
                      onClick={() => toggleReadMore(index)}
                      className="text-emerald-forest text-sm font-semibold mt-2 hover:text-gold transition-colors focus:outline-none"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-sage/60 mt-auto">
                    <div className="flex items-start gap-4 text-sm text-charcoal/80">
                      <Globe size={18} className="text-[#C7A45D] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-charcoal">Languages</p>
                        <p className="text-slate">{tutor.languages.join(" • ")}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 text-sm text-charcoal/80">
                      <GraduationCap size={18} className="text-[#C7A45D] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-charcoal">Specialisation</p>
                        <p className="text-slate">{tutor.specialization}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="container-app mt-20 max-w-5xl mx-auto">
        <div className="bg-[#123F35] rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10 flex-1 text-center md:text-left">
            <div className="w-12 h-12 bg-white/10 rounded-xl grid place-items-center mb-6 mx-auto md:mx-0">
              <Book size={24} className="text-[#C7A45D]" />
            </div>
            <h2 className="text-3xl font-serif text-white mb-4">Join Our Tutoring Team</h2>
            <p className="text-white/70 max-w-lg font-light leading-relaxed">
              Are you a qualified Qur'an or Arabic teacher with an Ijazah? We are always looking for dedicated scholars to join the Al-Kanz faculty.
            </p>
          </div>

          <div className="relative z-10 w-full md:w-auto flex-1 max-w-md bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
             <form onSubmit={handleTeacherApplication} className="flex flex-col gap-3">
               <label className="text-sm font-medium text-white/90">Submit your email to apply</label>
               <div className="flex flex-col sm:flex-row gap-3">
                 <input 
                   type="email" 
                   required
                   placeholder="your@email.com" 
                   value={teacherEmail}
                   onChange={(e) => setTeacherEmail(e.target.value)}
                   className="w-full px-4 py-3 bg-white rounded-input text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50"
                 />
                 <Button type="submit" className="bg-[#C7A45D] hover:bg-[#b08f4c] text-[#123F35] shrink-0 font-semibold px-6 py-3">
                   Apply Now
                 </Button>
               </div>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// --- FAQS PAGE ---
export function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "General", "Programmes", "Technical", "Fees & Payments"];

  const faqs = [
    { category: "General", question: "Are your classes suitable for complete beginners?", answer: "Absolutely. We cater to all levels, from absolute beginners learning the Arabic alphabet (Qaida) to advanced students seeking Ijazah. During your initial assessment, we will place you exactly where you need to be." },
    { category: "Programmes", question: "How long does it take to memorise the Qur'an?", answer: "The time varies greatly depending on your age, availability, and consistency. A full-time student might finish in 2-3 years, while a part-time student might take 5-10 years. We focus on quality and retention over speed." },
    { category: "Technical", question: "What software do I need for the live classes?", answer: "We use secure, high-quality video conferencing software (like Zoom or Google Meet). You will need a stable internet connection, a microphone, and a webcam (for some classes). All links will be provided by your tutor." },
    { category: "Fees & Payments", question: "Are there any registration or hidden fees?", answer: "No, there are no hidden fees. The tuition fee covers your live classes, access to our learning portal, and progress tracking. Any specific material costs will be communicated clearly upfront." },
    { category: "General", question: "Can I request a specific tutor (e.g., male or female)?", answer: "Yes. We understand that comfort and modesty are important. During the application process, you can specify your preference for a male or female tutor, and we will accommodate your request whenever possible." },
    { category: "Programmes", question: "Do you offer certificates upon completion?", answer: "Yes, we provide structured progress reports and formal certificates for completed programmes. For advanced Hifdh and Tajweed courses, we can also facilitate Ijazah certifications." }
  ];

  const filteredFaqs = activeCategory === "All" ? faqs : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="bg-ivory min-h-screen pb-20">
      <section className="bg-emerald-deep py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full border-[40px] border-gold -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-app relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
            Frequently Asked <span className="text-gold italic">Questions</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            Find answers to common questions about our programmes, technology, and how Al-Kanz operates. 
          </p>
        </div>
      </section>

      <section className="container-app py-16 max-w-4xl">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-emerald-deep text-white shadow-md"
                  : "bg-white text-slate hover:bg-sage/50 border border-sage"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-white border border-sage rounded-card shadow-sm overflow-hidden [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 font-serif font-semibold text-emerald-deep text-lg hover:bg-ivory/50 transition-colors">
                {faq.question}
                <span className="transition-transform group-open:-rotate-180 ml-4 shrink-0 bg-sage/50 p-2 rounded-full">
                  <ChevronDown size={18} className="text-emerald-forest" />
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate leading-relaxed border-t border-sage pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-16 bg-sage/30 rounded-2xl p-10 text-center border border-sage">
          <MessageCircle size={32} className="mx-auto text-emerald-forest mb-4" />
          <h3 className="text-2xl font-serif font-semibold text-emerald-deep mb-3">Still have questions?</h3>
          <p className="text-slate mb-6 max-w-md mx-auto">
            Can't find the answer you're looking for? Please chat to our friendly admissions team.
          </p>
          <Link to="/contact">
            <Button className="bg-emerald-deep hover:bg-emerald-forest text-white px-8 py-3 rounded-full">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}