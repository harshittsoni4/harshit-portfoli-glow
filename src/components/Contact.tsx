import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import FadeIn from "./FadeIn";

const Contact = () => (
  <section id="contact" className="py-24">
    <div className="container mx-auto px-6">
      <FadeIn>
        <h2 className="section-heading text-center">Let's Connect</h2>
        <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        <p className="section-subtext text-center mx-auto mt-4">
          Have a project in mind or just want to say hello? Reach out!
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="glass-card p-8 md:p-12 mt-12 max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="mailto:harshit.kamikaze@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} className="text-primary shrink-0" />
              <span className="text-sm break-all">harshit.kamikaze@gmail.com</span>
            </a>
            <a
              href="tel:7007857455"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={18} className="text-primary shrink-0" />
              <span className="text-sm">7007857455</span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={18} className="text-primary shrink-0" />
              <span className="text-sm">Jaunpur, Uttar Pradesh</span>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex items-center justify-center gap-4">
            <a
              href="https://linkedin.com/in/harshit-soni-780b7a356"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </FadeIn>

      <div className="text-center mt-16 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Harshit Soni. All rights reserved.
      </div>
    </div>
  </section>
);

export default Contact;
