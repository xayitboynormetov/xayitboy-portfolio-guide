import { ArrowDown, Github, Instagram } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      <div className="container mx-auto text-center relative z-10 animate-in fade-in duration-700">
        <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
          <span className="text-sm font-medium text-primary">
            Yosh dasturchi | 14 yosh
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in slide-in-from-bottom duration-700 delay-100">
          Salom, men{" "}
          <span className="gradient-text">Xayitboy Normetov</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in slide-in-from-bottom duration-700 delay-200">
          Web dasturlash va zamonaviy texnologiyalar bilan tajribaga ega
          o'quvchi dasturchiman
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8"
          >
            Loyihalarni ko'rish
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            variant="outline"
            className="text-lg px-8 border-2"
          >
            Bog'lanish
          </Button>
        </div>

        <div className="flex gap-6 justify-center animate-in slide-in-from-bottom duration-700 delay-400">
          <a
            href="https://instagram.com/_xay1tboy_241_._"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all card-hover"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all card-hover"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="h-8 w-8 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
