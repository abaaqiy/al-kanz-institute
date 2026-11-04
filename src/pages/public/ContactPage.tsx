import { useState } from "react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import { Mail, Phone, Clock, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSent, setIsSent] = useState(false);

  const handleWhatsAppRedirect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Get values from the form
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Your official WhatsApp number (without the + sign)
    const phoneNumber = "2349047686311";

    // Format the message with line breaks (%0A)
    const text = `*New Message from Al-Kanz Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A%0A*Message:*%0A${message}`;

    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");

    // Show success state
    setIsSent(true);
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSent(false), 5000);
    
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <div className="container-app py-16 grid md:grid-cols-2 gap-12">
      
      {/* Contact Information */}
      <div>
        <h1 className="text-4xl font-bold font-serif text-emerald-deep mb-4">Contact Us</h1>
        <p className="text-slate text-lg mb-10">
          Have a question about our programmes, enrolment, or scheduling? Send us a message and our team will get back to you.
        </p>
        
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center shrink-0">
              <Mail size={20} className="text-emerald-forest" />
            </div>
            <div>
              <h4 className="font-semibold text-emerald-deep mb-1">Email</h4>
              <a href="mailto:alkanzinstitute@gmail.com" className="text-slate hover:text-emerald-forest transition-colors">
                alkanzinstitute@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center shrink-0">
              <Phone size={20} className="text-emerald-forest" />
            </div>
            <div>
              <h4 className="font-semibold text-emerald-deep mb-1">Phone / WhatsApp</h4>
              <a href="tel:+2349047686311" className="text-slate hover:text-emerald-forest transition-colors">
                +234 904 768 6311
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center shrink-0">
              <Clock size={20} className="text-emerald-forest" />
            </div>
            <div>
              <h4 className="font-semibold text-emerald-deep mb-1">Student Support Hours</h4>
              <p className="text-slate">Mon–Fri, 9:00 AM – 5:00 PM (GMT)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <Card className="bg-white border-none shadow-lg">
        <h2 className="text-2xl font-serif text-emerald-deep mb-6">Send a Message</h2>
        
        {isSent ? (
          <div className="bg-emerald-forest/10 border border-emerald-forest/20 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-emerald-forest text-white rounded-full grid place-items-center mx-auto mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-xl font-bold text-emerald-deep mb-2">Redirecting to WhatsApp</h3>
            <p className="text-slate text-sm">
              If WhatsApp did not open automatically, please ensure you have it installed or allow pop-ups for this site.
            </p>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleWhatsAppRedirect}>
            <div>
              <label className="block text-sm font-medium mb-1.5 text-charcoal">Full Name</label>
              <input 
                type="text" 
                name="name"
                required
                className="w-full px-3.5 py-3 border border-sage rounded-input focus:outline-none focus:border-emerald-forest" 
                placeholder="Your name" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5 text-charcoal">Email Address</label>
              <input 
                type="email" 
                name="email"
                required
                className="w-full px-3.5 py-3 border border-sage rounded-input focus:outline-none focus:border-emerald-forest" 
                placeholder="you@example.com" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5 text-charcoal">Message</label>
              <textarea 
                name="message"
                required
                rows={4} 
                className="w-full px-3.5 py-3 border border-sage rounded-input focus:outline-none focus:border-emerald-forest resize-none" 
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <Button type="submit" className="w-full justify-center mt-2 py-3.5">
              Send via WhatsApp
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
}