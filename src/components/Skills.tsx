import { Code, Layout, Database, Cloud, Wrench, Zap } from "lucide-react";
import FadeIn from "./FadeIn";

const categories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Python", "Java", "C", "JavaScript", "SQL"],
  },
  {
    icon: Layout,
    title: "Frontend Technologies",
    skills: ["React.js", "HTML", "CSS"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "RDBMS"],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    skills: ["AWS (EC2, S3, Lambda)", "DevOps principles", "FinOps"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Git/GitHub", "WordPress", "cPanel", "Google Search Console", "Google Apps Script"],
  },
  {
    icon: Zap,
    title: "Other Skills",
    skills: ["API Integrations", "Data Parsing", "SEO"],
  },
];

const Skills = () => (
  <section id="skills" className="py-24">
    <div className="container mx-auto px-6">
      <FadeIn>
        <h2 className="section-heading text-center">Technical Skills</h2>
        <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
        {categories.map((cat, i) => (
          <FadeIn key={cat.title} delay={i * 0.08}>
            <div className="glass-card-hover p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <cat.icon size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground text-sm">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
