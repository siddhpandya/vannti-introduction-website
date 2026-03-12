import { Shield, Video, DollarSign, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const usps = [
  {
    icon: Shield,
    title: "Expert Coach Analysis",
    desc: "Your boxing videos are analyzed by experienced and verified coaches who know what it takes to win.",
  },
  {
    icon: Video,
    title: "Video-Based Feedback",
    desc: "Upload your sparring or training video and receive detailed technique corrections.",
  },
  {
    icon: DollarSign,
    title: "Affordable Coaching",
    desc: "Get professional-level coaching insights at a reasonable price — no expensive gym sessions needed.",
  },
  {
    icon: Zap,
    title: "Fast Improvement",
    desc: "Receive clear feedback to improve your punches, defense, and strategy quickly.",
  },
];

const USPSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-vannti" className="py-24 px-4">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Why Vannti?</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Professional Boxing Analysis <span className="text-gradient">Made Accessible</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {usps.map((u, i) => (
            <div
              key={u.title}
              className={`group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                <u.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{u.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
