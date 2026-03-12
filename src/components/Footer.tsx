import logo from "@/assets/vannti-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Vannti" className="h-6 w-auto" />
          <span className="font-bold tracking-tight">VANNTI</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#why-vannti" className="hover:text-foreground transition-colors">Why Vannti</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
          <a href="#reviews" className="hover:text-foreground transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Vannti. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
