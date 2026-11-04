import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, ChevronRight, ChevronLeft, User, BookOpen, Clock, ShieldCheck, UserCircle2, Users, MessageCircle } from "lucide-react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import { Link } from "react-router-dom";

// --- 1. Define the Validation Schema ---
const applicationSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  country: z.string().min(2, "Country is required"),
  timezone: z.string().min(2, "Timezone is required"),
  
  programme: z.string().min(1, "Please select a programme"),
  memorisationLevel: z.string().min(2, "Please describe your current level"),
  experience: z.string().optional(),

  preferredDays: z.array(z.string()).min(1, "Please select at least 1 day").max(3, "Maximum of 3 days allowed"),
  preferredTimeStart: z.string().min(1, "Please select a start time"),
  preferredTimeEnd: z.string().min(1, "Please select an end time"),
  format: z.string().min(1, "Please select a format"),
  
  isMinor: z.enum(["yes", "no"]),
  guardianName: z.string().optional(),
  guardianEmail: z.string().email("Invalid email").optional().or(z.literal("")),
})
.refine((data) => {
  if (data.preferredTimeStart && data.preferredTimeEnd) {
    const start = new Date(`1970-01-01T${data.preferredTimeStart}:00`);
    const end = new Date(`1970-01-01T${data.preferredTimeEnd}:00`);
    const diffInMinutes = (end.getTime() - start.getTime()) / (1000 * 60);
    return diffInMinutes > 0 && diffInMinutes <= 60;
  }
  return true;
}, {
  message: "The time window must be exactly 1 hour or less, and the end time must be after the start time.",
  path: ["preferredTimeEnd"],
})
.refine((data) => {
  if (data.isMinor === "yes") {
    return !!data.guardianName && data.guardianName.length > 2 && !!data.guardianEmail && data.guardianEmail.includes("@");
  }
  return true;
}, {
  message: "Guardian details are required for minors",
  path: ["guardianName"],
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

const steps = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Learning Background", icon: BookOpen },
  { id: 3, title: "Preferences", icon: Clock },
  { id: 4, title: "Guardian & Submit", icon: ShieldCheck },
];

const DAYS_OF_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
  "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Holy See", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia (formerly Macedonia)", "Norway",
  "Oman",
  "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar",
  "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
  "Vanuatu", "Venezuela", "Vietnam",
  "Yemen",
  "Zambia", "Zimbabwe"
];

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: { 
      isMinor: "no",
      preferredDays: [] 
    },
    mode: "onTouched",
  });

  const isMinor = watch("isMinor");
  const selectedDays = watch("preferredDays") || [];

  const handleDayToggle = (day: string) => {
    let newDays = [...selectedDays];
    if (newDays.includes(day)) {
      newDays = newDays.filter((d) => d !== day);
    } else {
      if (newDays.length >= 3) return;
      newDays.push(day);
    }
    setValue("preferredDays", newDays, { shouldValidate: true });
  };

  const handleNext = async () => {
    let fieldsToValidate: any[] = [];
    if (currentStep === 1) fieldsToValidate = ["firstName", "lastName", "email", "country", "timezone"];
    if (currentStep === 2) fieldsToValidate = ["programme", "memorisationLevel"];
    if (currentStep === 3) fieldsToValidate = ["preferredDays", "preferredTimeStart", "preferredTimeEnd", "format"];
    
    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => setCurrentStep((prev) => prev - 1);

  const onSubmit = async (data: ApplicationFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 800));

    const phoneNumber = "2349047686311";
    
    const text = `*NEW APPLICATION: AL-KANZ INSTITUTE*%0A%0A` +
      `*PERSONAL INFO*%0A` +
      `Name: ${data.firstName} ${data.lastName}%0A` +
      `Email: ${data.email}%0A` +
      `Location: ${data.country} (${data.timezone})%0A%0A` +
      
      `*LEARNING BACKGROUND*%0A` +
      `Programme: ${data.programme}%0A` +
      `Level: ${data.memorisationLevel}%0A` +
      `Experience: ${data.experience || "None provided"}%0A%0A` +
      
      `*SCHEDULE PREFERENCES*%0A` +
      `Days: ${data.preferredDays.join(", ")}%0A` +
      `Time Window: ${data.preferredTimeStart} - ${data.preferredTimeEnd}%0A` +
      `Format: ${data.format}%0A%0A` +
      
      `*STATUS*%0A` +
      `Adult or Minor: ${data.isMinor === "yes" ? "Minor (Under 18)" : "Adult"}%0A` +
      (data.isMinor === "yes" ? `Guardian: ${data.guardianName} (${data.guardianEmail})` : "");

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
    setIsSuccess(true);
  };

  const handleFinalSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentStep === 4) {
      handleSubmit(onSubmit)();
    }
  };

  if (isSuccess) {
    return (
      <div className="container-app py-24 flex justify-center">
        <Card className="max-w-lg w-full text-center py-12 px-8">
          <div className="w-20 h-20 bg-emerald-forest/10 text-emerald-forest rounded-full grid place-items-center mx-auto mb-6">
            <MessageCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold text-emerald-deep mb-3">Redirecting to WhatsApp</h2>
          <p className="text-slate mb-8">
            Jazakallah Khair. Your application has been prepared. Please ensure you press <strong>Send</strong> in the WhatsApp window that just opened to complete your submission.
          </p>
          <Link to="/">
            <Button className="w-full justify-center">Return to Homepage</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-ivory min-h-screen py-12">
      <div className="container-app max-w-3xl">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-emerald-deep mb-2">Begin Your Journey</h1>
          <p className="text-slate">Complete the form below to apply for enrolment at Al-Kanz.</p>
        </div>

        <div className="flex items-center justify-between mb-8 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-sage -z-10" />
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;
            
            return (
              <div key={step.id} className="flex flex-col items-center gap-2 bg-ivory px-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isActive ? "bg-emerald-deep text-white shadow-md ring-4 ring-ivory" : 
                  isCompleted ? "bg-emerald-forest text-white ring-4 ring-ivory" : 
                  "bg-sage text-slate ring-4 ring-ivory"
                }`}>
                  {isCompleted ? <CheckCircle2 size={20} /> : <Icon size={18} />}
                </div>
                <span className={`text-xs font-semibold ${isActive || isCompleted ? "text-emerald-deep" : "text-slate"}`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>

        <Card className="p-8 md:p-10">
          <form onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}>
            
            {currentStep === 1 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <h2 className="text-xl font-semibold text-emerald-deep mb-4 border-b border-sage pb-3">Personal Information</h2>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">First Name</label>
                    <input {...register("firstName")} className="w-full px-3.5 py-3 border border-sage rounded-input focus:outline-none focus:border-emerald-forest" placeholder="Aisha" />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Last Name</label>
                    <input {...register("lastName")} className="w-full px-3.5 py-3 border border-sage rounded-input focus:outline-none focus:border-emerald-forest" placeholder="Bello" />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email Address</label>
                  <input type="email" {...register("email")} className="w-full px-3.5 py-3 border border-sage rounded-input focus:outline-none focus:border-emerald-forest" placeholder="aisha@example.com" />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Country</label>
                    {/* Changed to a SELECT dropdown */}
                    <select {...register("country")} className="w-full px-3.5 py-3 border border-sage rounded-input focus:outline-none focus:border-emerald-forest bg-white">
                      <option value="">Select your country...</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Timezone</label>
                    <select {...register("timezone")} className="w-full px-3.5 py-3 border border-sage rounded-input focus:outline-none focus:border-emerald-forest bg-white">
                      <option value="">Select timezone...</option>
                      <option value="GMT">GMT (London)</option>
                      <option value="EST">EST (New York)</option>
                      <option value="PST">PST (Los Angeles)</option>
                      <option value="WAT">WAT (Lagos)</option>
                      <option value="GST">GST (Dubai)</option>
                    </select>
                    {errors.timezone && <p className="text-red-500 text-xs mt-1">{errors.timezone.message}</p>}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-xl font-semibold text-emerald-deep mb-4 border-b border-sage pb-3">Learning Background</h2>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Programme of Interest</label>
                  <select {...register("programme")} className="w-full px-3.5 py-3 border border-sage rounded-input focus:outline-none focus:border-emerald-forest bg-white">
                    <option value="">Select a programme...</option>
                    <option value="Hifdhul-Qur'an">Hifdhul-Qur'an (Memorisation)</option>
                    <option value="Murājaʿah">Murājaʿah (Revision)</option>
                    <option value="Tajweed">Tajweed (Recitation)</option>
                    <option value="Arabic">Arabic Learning</option>
                    <option value="Riwayāt">Riwayāt & Advanced Studies</option>
                  </select>
                  {errors.programme && <p className="text-red-500 text-xs mt-1">{errors.programme.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Current Memorisation Level</label>
                  <input {...register("memorisationLevel")} className="w-full px-3.5 py-3 border border-sage rounded-input focus:outline-none focus:border-emerald-forest" placeholder="e.g., I have memorised 5 Juz, or I am a complete beginner." />
                  {errors.memorisationLevel && <p className="text-red-500 text-xs mt-1">{errors.memorisationLevel.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Previous Learning Experience (Optional)</label>
                  <textarea {...register("experience")} rows={3} className="w-full px-3.5 py-3 border border-sage rounded-input focus:outline-none focus:border-emerald-forest resize-none" placeholder="Tell us briefly about any previous Islamic studies or Qur'an classes you have taken."></textarea>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-xl font-semibold text-emerald-deep mb-4 border-b border-sage pb-3">Learning Preferences</h2>
                
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <label className="block text-sm font-medium">Preferred Days (Select up to 3)</label>
                    <span className="text-xs text-slate">{selectedDays.length} / 3 selected</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {DAYS_OF_WEEK.map((day) => {
                      const isSelected = selectedDays.includes(day);
                      const isDisabled = !isSelected && selectedDays.length >= 3;
                      return (
                        <button
                          key={day}
                          type="button"
                          onClick={() => handleDayToggle(day)}
                          disabled={isDisabled}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            isSelected 
                              ? "bg-emerald-deep text-white border border-emerald-deep shadow-sm" 
                              : isDisabled
                                ? "bg-sage/50 text-slate/50 border border-sage cursor-not-allowed"
                                : "bg-white text-charcoal border border-sage hover:border-emerald-forest hover:text-emerald-forest"
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                  {errors.preferredDays && <p className="text-red-500 text-xs mt-2">{errors.preferredDays.message}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-5 bg-sage/30 p-5 rounded-input border border-sage">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Earliest Start Time</label>
                    <input type="time" {...register("preferredTimeStart")} className="w-full px-3.5 py-3 border border-sage rounded-input focus:outline-none focus:border-emerald-forest bg-white" />
                    {errors.preferredTimeStart && <p className="text-red-500 text-xs mt-1">{errors.preferredTimeStart.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Latest End Time</label>
                    <input type="time" {...register("preferredTimeEnd")} className="w-full px-3.5 py-3 border border-sage rounded-input focus:outline-none focus:border-emerald-forest bg-white" />
                    {errors.preferredTimeEnd && <p className="text-red-500 text-xs mt-1">{errors.preferredTimeEnd.message}</p>}
                  </div>
                  <p className="text-xs text-slate md:col-span-2 flex items-center gap-1 mt-1">
                    <Clock size={14} /> Note: The time window must be exactly 1 hour or less.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Preferred Class Format</label>
                  <select {...register("format")} className="w-full px-3.5 py-3 border border-sage rounded-input focus:outline-none focus:border-emerald-forest bg-white">
                    <option value="">Select format...</option>
                    <option value="1-on-1 Private Sessions">1-on-1 Private Sessions</option>
                    <option value="Small Group Classes">Small Group Classes (2-4 students)</option>
                  </select>
                  {errors.format && <p className="text-red-500 text-xs mt-1">{errors.format.message}</p>}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-xl font-semibold text-emerald-deep mb-4 border-b border-sage pb-3">Final Details</h2>
                
                <div>
                  <label className="block text-sm font-medium mb-3">Who is this application for?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <button 
                      type="button" 
                      onClick={() => setValue("isMinor", "no", { shouldValidate: true })}
                      className={`text-left w-full cursor-pointer rounded-xl border-2 p-4 flex items-start gap-4 transition-all duration-200 ${
                        isMinor === "no" 
                          ? "border-emerald-forest bg-sage/20 shadow-sm" 
                          : "border-sage bg-white hover:border-emerald-forest/50"
                      }`}
                    >
                      <div className={`p-2 rounded-full shrink-0 ${isMinor === "no" ? "bg-emerald-forest text-white" : "bg-sage text-slate"}`}>
                        <UserCircle2 size={24} />
                      </div>
                      <div>
                        <p className="font-semibold text-emerald-deep">I am an adult</p>
                        <p className="text-xs text-slate mt-1">Applying for myself</p>
                      </div>
                    </button>

                    <button 
                      type="button" 
                      onClick={() => setValue("isMinor", "yes", { shouldValidate: true })}
                      className={`text-left w-full cursor-pointer rounded-xl border-2 p-4 flex items-start gap-4 transition-all duration-200 ${
                        isMinor === "yes" 
                          ? "border-emerald-forest bg-sage/20 shadow-sm" 
                          : "border-sage bg-white hover:border-emerald-forest/50"
                      }`}
                    >
                      <div className={`p-2 rounded-full shrink-0 ${isMinor === "yes" ? "bg-emerald-forest text-white" : "bg-sage text-slate"}`}>
                        <Users size={24} />
                      </div>
                      <div>
                        <p className="font-semibold text-emerald-deep">Under 18</p>
                        <p className="text-xs text-slate mt-1">Applying for a child</p>
                      </div>
                    </button>
                    
                  </div>
                </div>

                {isMinor === "yes" && (
                  <div className="bg-sage/30 p-5 rounded-xl border border-sage space-y-4 mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-sm text-emerald-forest font-medium flex items-center gap-2">
                      <ShieldCheck size={16} /> Parent/Guardian details are required for applicants under 18.
                    </p>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Guardian Full Name</label>
                      <input {...register("guardianName")} className="w-full px-3.5 py-3 border border-sage rounded-input focus:outline-none focus:border-emerald-forest bg-white" placeholder="Mr. Abdullah" />
                      {errors.guardianName && <p className="text-red-500 text-xs mt-1">{errors.guardianName.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Guardian Email</label>
                      <input type="email" {...register("guardianEmail")} className="w-full px-3.5 py-3 border border-sage rounded-input focus:outline-none focus:border-emerald-forest bg-white" placeholder="abdullah@example.com" />
                      {errors.guardianEmail && <p className="text-red-500 text-xs mt-1">{errors.guardianEmail.message}</p>}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-10 pt-6 border-t border-sage">
              <Button 
                type="button" 
                variant="ghost" 
                onClick={handleBack} 
                className={currentStep === 1 ? "invisible" : ""}
              >
                <ChevronLeft size={16} className="mr-1" /> Back
              </Button>
              
              {currentStep < 4 ? (
                <Button type="button" onClick={handleNext}>
                  Continue <ChevronRight size={16} className="ml-1" />
                </Button>
              ) : (
                <Button 
                  type="button" 
                  onClick={handleFinalSubmit} 
                  disabled={isSubmitting}
                  className="bg-emerald-forest hover:bg-emerald-deep text-white"
                >
                  {isSubmitting ? "Opening WhatsApp..." : "Send Application via WhatsApp"}
                </Button>
              )}
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}