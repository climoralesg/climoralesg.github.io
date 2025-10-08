import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Projects />
      <Skills />
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          © 2025 Claudio Morales
        </p>
      </footer>
    </div>
  );
};

export default Index;
