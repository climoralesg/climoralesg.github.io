import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Claudio Morales</h1>
          <p className="text-xl text-muted-foreground">Backend Developer</p>
        </div>

        <div className="border-t border-b border-border py-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            Soy Claudio, un apasionado de la informática y buenos momentazos. 
            Me especializo en encontrar soluciones efectivas para desafíos complejos, 
            trabajando en equipos multidisciplinarios con un enfoque colaborativo y 
            habilidades relacionales.
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <a 
            href="mailto:climoralesg@gmail.com" 
            className="text-sm hover:underline"
          >
            climoralesg@gmail.com
          </a>
          <span className="text-muted-foreground">|</span>
          <a 
            href="https://github.com/climoralesg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm hover:underline"
          >
            GitHub
          </a>
          <span className="text-muted-foreground">|</span>
          <a 
            href="https://linkedin.com/in/climoralesg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm hover:underline"
          >
            LinkedIn
          </a>
          <span className="text-muted-foreground">|</span>
          <a 
            href="/docs/Claudio-Morales-CV.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm hover:underline"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};
