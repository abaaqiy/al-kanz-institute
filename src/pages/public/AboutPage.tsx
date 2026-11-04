import { Target, Eye, Heart, ShieldCheck, BookOpen, Users } from "lucide-react";
import Card from "../../components/ui/Card";

export default function AboutPage() {
  return (
    <div className="bg-ivory min-h-screen pb-20">
      <section className="bg-emerald-deep py-20 px-6 relative overflow-hidden">
        <div className="container-app relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
            About <span className="text-gold italic">Al-Kanz</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            An online educational institution dedicated to helping Muslims develop a stronger relationship with the Qur'an.
          </p>
        </div>
      </section>

      <section className="container-app py-16 space-y-16">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white border-none shadow-lg">
            <div className="w-12 h-12 rounded-full bg-sage text-emerald-forest grid place-items-center mb-6">
              <Target size={24} />
            </div>
            <h2 className="text-2xl font-serif text-emerald-deep mb-4">Our Mission</h2>
            <p className="text-slate leading-relaxed">
              To provide accessible, structured and high-quality Qur'anic and Arabic education that nurtures sound recitation, meaningful memorisation, consistent revision and a lifelong connection with the Qur'an.
            </p>
          </Card>

          <Card className="bg-white border-none shadow-lg">
            <div className="w-12 h-12 rounded-full bg-sage text-emerald-forest grid place-items-center mb-6">
              <Eye size={24} />
            </div>
            <h2 className="text-2xl font-serif text-emerald-deep mb-4">Our Vision</h2>
            <p className="text-slate leading-relaxed">
              To reach a worldwide audience and become a leading institute for quality Qur'anic learning and memorisation, building an internationally recognised learning environment.
            </p>
          </Card>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-3xl font-serif text-emerald-deep mb-8 text-center">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Sincerity", desc: "Seeking Allah's pleasure through the teaching and learning of His Book." },
              { icon: ShieldCheck, title: "Discipline", desc: "Encouraging consistency, commitment and accountability." },
              { icon: Target, title: "Excellence", desc: "Maintaining high standards in teaching and learning." },
              { icon: BookOpen, title: "Expertise", desc: "Promoting sound knowledge and proper application of Qur'anic principles." },
              { icon: Users, title: "Accessibility", desc: "Making quality learning available to students across different locations and time zones." },
            ].map((value, i) => (
              <Card key={i} className="bg-sage/30 border-none shadow-sm text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-white text-emerald-forest grid place-items-center mb-4 shadow-sm">
                  <value.icon size={20} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-emerald-deep mb-2">{value.title}</h3>
                <p className="text-sm text-slate">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}