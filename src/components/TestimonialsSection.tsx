import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Marcus J.",
    role: "Amateur Boxer",
    quote: "The coach pointed out mistakes in my jab that I never noticed. Game-changing feedback!",
    stars: 5,
  },
  {
    name: "Sarah K.",
    role: "MMA Fighter",
    quote: "Affordable and very professional feedback. I improved my guard position in just two weeks.",
    stars: 5,
  },
  {
    name: "Ravi P.",
    role: "Boxing Enthusiast",
    quote: "I train at home and Vannti is like having a personal coach. The video breakdowns are incredibly detailed.",
    stars: 5,
  },
  {
    name: "Elena D.",
    role: "Semi-Pro Boxer",
    quote: "Fast turnaround and expert-level analysis. I wish I found this platform sooner.",
    stars: 4,
  },
];

const TestimonialsSection = () => {
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
    <section id="reviews" className="py-24 px-4">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold">What Athletes Say</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    size={16}
                    className={si < t.stars ? "fill-primary text-primary" : "text-muted-foreground/30"}
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground mb-5">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
