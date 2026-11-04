import { Calendar, MessageSquare, ClipboardCheck, RefreshCw } from "lucide-react";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <Kpi label="Current streak" value="12 days" trend="↑" />
        <Kpi label="Memorisation progress" value="68%" trend="↑" />
        <Kpi label="Attendance this month" value="94%" trend="↑" />
      </div>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4">
        <Card>
          <PanelHeader title="Today's Agenda" icon={Calendar} />
          <ClassRow time="14:30" title="Tajweed — Juz 30" tutor="Ustadh Yusuf · Live audio" />
          <ClassRow time="16:00" title="Hifdh — Surah Al-Mulk" tutor="Ustadha Maryam · Video" soon />
          <ClassRow time="18:00" title="Murājaʿah Session" tutor="Self-paced · 20 min" />
        </Card>

        <Card>
          <PanelHeader title="Recent Feedback" icon={MessageSquare} />
          <FeedbackRow text="Excellent tajweed on madd rules. Work on ghunnah timing." meta="Ustadh Yusuf · 2 days ago" />
          <FeedbackRow text="Memorisation strong. Please revise Surah Al-Mulk daily." meta="Ustadha Maryam · 4 days ago" />
        </Card>

        <Card>
          <PanelHeader title="Upcoming Assessments" icon={ClipboardCheck} />
          <DueRow label="Juz 29 Recitation Test" badge="in 3 days" tone="amber" />
          <DueRow label="Surah Al-Mulk Memorisation" badge="in 1 week" tone="green" />
        </Card>

        <Card>
          <PanelHeader title="Revision Due" icon={RefreshCw} />
          <DueRow label="Surah An-Naba (1–20)" badge="Due" tone="amber" />
          <DueRow label="Surah An-Nazi'at (1–15)" badge="Tomorrow" tone="green" />
        </Card>
      </div>
    </div>
  );
}

function Kpi({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <Card className="p-5">
      <p className="text-xs text-slate mb-1.5">{label}</p>
      <p className="text-2xl font-semibold text-emerald-deep">
        {value} <span className="text-xs text-emerald-forest">{trend}</span>
      </p>
    </Card>
  );
}

function PanelHeader({ title, icon: Icon }: { title: string; icon: React.ElementType }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h4 className="flex items-center gap-2 font-semibold text-emerald-deep text-sm">
        <Icon size={15} /> {title}
      </h4>
      <button className="text-xs font-semibold text-emerald-forest">View all →</button>
    </div>
  );
}

function ClassRow({ time, title, tutor, soon }: { time: string; title: string; tutor: string; soon?: boolean }) {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-sage last:border-0">
      <div className="w-14 text-center bg-sage rounded-lg py-2 text-[11px] font-semibold text-emerald-forest leading-tight">
        {time}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-charcoal">{title}</p>
        <p className="text-xs text-slate">{tutor}</p>
      </div>
      <button
        className={`text-[11px] font-semibold px-3 py-1.5 rounded-lg ${
          soon ? "bg-sage text-emerald-forest" : "bg-emerald-deep text-white"
        }`}
      >
        {soon ? "Soon" : "Join"}
      </button>
    </div>
  );
}

function FeedbackRow({ text, meta }: { text: string; meta: string }) {
  return (
    <div className="py-3 border-b border-sage last:border-0">
      <p className="text-[13px] leading-snug text-charcoal mb-1">"{text}"</p>
      <small className="text-[11px] text-slate">{meta}</small>
    </div>
  );
}

function DueRow({ label, badge, tone }: { label: string; badge: string; tone: "amber" | "green" }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-sage last:border-0 text-sm">
      <span>{label}</span>
      <Badge tone={tone}>{badge}</Badge>
    </div>
  );
}