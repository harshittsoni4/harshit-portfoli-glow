import { Brain, Server, TrendingDown, MonitorSmartphone } from "lucide-react";
import FadeIn from "./FadeIn";

const projects = [
  {
    icon: Brain,
    title: "NeuraCare - Mental Health Checker & Support",
    description:
      "Developed an interactive application designed to assess users' mental well-being and connect them with support resources. Built the frontend interface using React.js for accessibility and implemented secure backend logic to process inputs and generate recommendations.",
  },
  {
    icon: Server,
    title: "AWS Cloud Server Deployment",
    description:
      "Partnered with a technical team to design, develop, and deploy a secure and scalable AWS cloud server environment for a client. Configured core infrastructure for high availability, optimal performance, and robust security.",
  },
  {
    icon: TrendingDown,
    title: "Cloud Cost Optimization (FinOps)",
    description:
      "Collaborated with engineering to audit and optimize an existing cloud architecture. Successfully reduced overall cloud operational costs by 10% by implementing strategic FinOps practices, rightsizing resources, and eliminating waste.",
  },
  {
    icon: MonitorSmartphone,
    title: "Client Frontend Development",
    description:
      "Built a dynamic and responsive frontend web application for a client utilizing React.js, HTML, and CSS. Ensured cross-browser compatibility and optimized the user interface for maximum performance.",
  },
];

const Projects = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-6">
      <FadeIn>
        <h2 className="section-heading text-center">Projects & Experience</h2>
        <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.1}>
            <div className="glass-card-hover p-6 h-full flex flex-col">
              <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                <p.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {p.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
