import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Dribbble,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

type Highlight = {
  title: string;
  description: string;
};

type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: LucideIcon;
};

const highlights: Highlight[] = [
  {
    title: "Collaborations",
    description:
      "Linear, Framer, Gamma, Clearbit, and early-stage founders crafting premium launches.",
  },
  {
    title: "Latest drop",
    description:
      "Aurora OS motion system · 47 reusable blueprints, adaptive tokens, and launch storyboard.",
  },
  {
    title: "Availability",
    description:
      "2 advisory spots for Q1 · Remote friendly across EU & US time zones.",
  },
];

const socialLinks: SocialLink[] = [
  {
    label: "Twitter",
    handle: "@caspermotions",
    href: "https://x.com/caspermotions",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    handle: "Casper Lightman",
    href: "https://linkedin.com/in/casperlightman",
    icon: Linkedin,
  },
  {
    label: "Dribbble",
    handle: "caspermotion",
    href: "https://dribbble.com/caspermotion",
    icon: Dribbble,
  },
  {
    label: "GitHub",
    handle: "casper-studio",
    href: "https://github.com/casper-studio",
    icon: Github,
  },
];

const listVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
};

export function GlassmorphismPortfolioBlock() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-card/80 to-card/60 backdrop-blur-2xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.08),transparent_60%)]" />

          <div className="relative z-10 grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_340px] lg:gap-16">
            <motion.div
              className="flex flex-col justify-center"
              initial="hidden"
              animate="visible"
              variants={listVariants}
            >
              <motion.div variants={itemVariants}>
                <Badge
                  variant="secondary"
                  className="mb-6 w-fit rounded-full border border-glass-border bg-secondary/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary backdrop-blur-md"
                >
                  Portfolio Insight
                </Badge>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Casper Lightman, Product Designer & Motion Director
                </h1>
                <p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                  Principal product designer pairing narrative motion with
                  premium SaaS brands. Casper leads founders and product teams
                  through expressive design systems that convert curiosity into
                  momentum.
                </p>
              </motion.div>

              <motion.div
                variants={listVariants}
                className="mt-10 grid gap-4 sm:grid-cols-3"
              >
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass-card-hover rounded-xl p-5"
                  >
                    <h3 className="mb-1.5 text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="mt-8">
                <Button
                  onClick={() =>
                    window.open("https://casper.studio/case-studies", "_blank")
                  }
                  className="h-12 w-full gap-2 rounded-full px-8 text-sm uppercase tracking-[0.25em] transition-all hover:shadow-lg sm:w-auto"
                >
                  View case studies
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="glass-card w-full max-w-xs rounded-2xl p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-5">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 blur-md" />
                    <div className="relative h-28 w-28 rounded-full bg-muted ring-2 ring-glass-border" />
                  </div>

                  <h2 className="text-lg font-bold text-foreground">Casper Lightman</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Product Designer · Motion Director
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Partnering with future-facing teams to choreograph
                    interfaces that feel cinematic yet effortless.
                  </p>
                </div>

                <div className="mt-6 space-y-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-xl px-4 py-3 transition-all hover:bg-secondary/60"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="text-left">
                            <p className="text-xs font-medium text-foreground">
                              {social.label}
                            </p>
                            <p className="text-[11px] text-muted-foreground">
                              {social.handle}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
