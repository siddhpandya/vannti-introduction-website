const VisionSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Our Vision</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Making Professional Coaching <span className="text-gradient">Accessible</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Vannti aims to make professional boxing coaching accessible to every athlete by connecting
          fighters with experienced coaches through video-based feedback.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Our goal is to help boxers improve faster with accurate and professional guidance —
          regardless of location, budget, or skill level.
        </p>
      </div>
    </section>
  );
};

export default VisionSection;
