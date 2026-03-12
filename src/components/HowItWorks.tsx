import { Upload, UserCheck, MessageSquareText } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    icon: Upload,
    title: "Upload Your Video",
    desc: "Record your training or sparring session and upload it to the Vannti platform.",
  },
  {
    num: "02",
    icon: UserCheck,
    title: "Coach Reviews",
    desc: "A verified boxing coach carefully analyzes your technique, footwork, and strategy.",
  },
  {
    num: "03",
    icon: MessageSquareText,
    title: "Get Feedback",
    desc: "Receive detailed improvement suggestions and actionable tips to level up your game.",
  },
];

const HowItWorks = () => {
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
    <section id="how-it-works" className="py-24 px-4 bg-secondary/30">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Three Simple Steps</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`relative text-center px-6 py-10 ${visible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[7rem] font-black text-primary/[0.06] leading-none select-none">
                {s.num}
              </span>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <s.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
