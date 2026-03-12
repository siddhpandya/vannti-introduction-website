import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const videos = [
  { title: "Jab & Cross Technique", category: "Punch Techniques" },
  { title: "Defensive Drills", category: "Training Drills" },
  { title: "Coach Analysis Example", category: "Coaching Analysis" },
  { title: "Footwork Fundamentals", category: "Training Drills" },
  { title: "Hook Combinations", category: "Punch Techniques" },
  { title: "Sparring Review", category: "Coaching Analysis" },
];

const VideoSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-4">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Learn & Improve</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Video References</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <div
              key={v.title}
              className={`group relative aspect-video rounded-xl bg-card border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Placeholder gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, hsl(220 18% ${12 + i * 2}%), hsl(220 18% ${8 + i}%))`,
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={24} className="text-primary-foreground ml-0.5" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm">{v.title}</p>
                  <p className="text-xs text-muted-foreground">{v.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
