import { Button } from "@/components/ui/button";
import { Upload, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center justify-center overflow-hidden pt-16"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(355 95% 55% / 0.08), transparent), radial-gradient(ellipse 60% 50% at 80% 60%, hsl(220 40% 20% / 0.5), transparent), hsl(220, 18%, 8%)",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(220 20% 92%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 20% 92%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-up">
          Boxing Feedback Platform
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[1.05] mb-6 animate-fade-up-delay-1">
          Get Answer for
          <br />
          <span className="text-gradient">Every Punch</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delay-2">
          Upload your boxing video and get professional feedback from experienced coaches —
          at an affordable price.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
          <Button size="lg" className="text-base px-8 py-6 gap-2">
            Try Now <ArrowRight size={18} />
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 gap-2 border-border hover:border-primary/50">
            <Upload size={18} /> Upload Your Video
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
