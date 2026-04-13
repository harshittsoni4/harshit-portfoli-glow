import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
    {/* Subtle gradient orbs */}
    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="glow-dot" />
          <span className="text-sm text-primary font-medium tracking-wide uppercase">
            Available for opportunities
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight leading-tight">
          Harshit Soni
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium mt-4">
          Full-Stack Developer & Cloud Architect
        </p>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
          Motivated Computer Science and Engineering student with a strong foundation in building
          scalable web applications and optimizing cloud environments using React.js, Python, AWS,
          and DevOps methodologies.
        </p>

        <div className="flex items-center justify-center gap-4 mt-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all duration-200"
          >
            View My Work <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-glass-border text-foreground font-semibold rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-200"
          >
            Contact Me <Mail size={16} />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
