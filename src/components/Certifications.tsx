import { Award } from "lucide-react";
import FadeIn from "./FadeIn";

const certs = [
  { title: "AWS Cloud Technical Essentials", issuer: "Coursera" },
  { title: "Software Engineering", issuer: "Infosys Springboard" },
];

const Certifications = () => (
  <section id="certifications" className="py-24">
    <div className="container mx-auto px-6">
      <FadeIn>
        <h2 className="section-heading text-center">Certifications</h2>
        <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </FadeIn>

      <div className="flex flex-col sm:flex-row gap-6 mt-12 max-w-3xl mx-auto justify-center">
        {certs.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.1}>
            <div className="glass-card-hover p-6 flex items-start gap-4 flex-1">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                <Award size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{c.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{c.issuer}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
