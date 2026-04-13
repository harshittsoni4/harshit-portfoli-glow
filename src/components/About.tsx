import { GraduationCap, MapPin, Award } from "lucide-react";
import FadeIn from "./FadeIn";

const About = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-6">
      <FadeIn>
        <h2 className="section-heading text-center">About & Education</h2>
        <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="glass-card p-8 md:p-12 mt-12 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
              <GraduationCap size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Bachelor of Technology (B.Tech)
              </h3>
              <p className="text-primary font-medium mt-1">Computer Science and Engineering</p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  Lovely Professional University, Phagwara, Punjab
                </span>
                <span className="flex items-center gap-1.5">
                  <Award size={14} />
                  CGPA: 8.37 / 10
                </span>
              </div>
              <p className="text-muted-foreground text-sm mt-2">Expected Graduation: 2029</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default About;
