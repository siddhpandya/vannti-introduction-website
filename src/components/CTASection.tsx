import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section
      className="py-24 px-4"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% 50%, hsl(355 95% 55% / 0.1), transparent), hsl(220, 18%, 8%)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight mb-6">
          Improve Your Punch <span className="text-gradient">Today</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Join hundreds of athletes improving their technique with professional coach feedback.
        </p>
        <Button size="lg" className="text-base px-10 py-6 gap-2">
          Try Now <ArrowRight size={18} />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
