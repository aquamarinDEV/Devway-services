
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "../components/ui/button";
import { ChevronDown, Code, Terminal } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const techStack = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", description: "JavaScript library for building user interfaces", icon: "⚛️" },
      { name: "Next.js", description: "React framework for production", icon: "▲" },
      { name: "TypeScript", description: "Typed superset of JavaScript", icon: "TS" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: "🎨" }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", description: "JavaScript runtime built on Chrome's V8 engine", icon: "🟢" },
      { name: "Express", description: "Web framework for Node.js", icon: "🚂" },
      { name: "NestJS", description: "Progressive Node.js framework", icon: "🐈" },
      { name: "GraphQL", description: "Query language for APIs", icon: "◼️" }
    ]
  },
  {
    category: "Database",
    technologies: [
      { name: "MongoDB", description: "NoSQL database", icon: "🍃" },
      { name: "PostgreSQL", description: "Advanced open source SQL database", icon: "🐘" },
      { name: "Redis", description: "In-memory data structure store", icon: "🔴" },
      { name: "Prisma", description: "Next-generation ORM", icon: "◓" }
    ]
  },
  {
    category: "DevOps",
    technologies: [
      { name: "Docker", description: "Platform for developing, shipping, and running applications", icon: "🐳" },
      { name: "Kubernetes", description: "Container orchestration system", icon: "☸️" },
      { name: "AWS", description: "Cloud computing services", icon: "☁️" },
      { name: "CI/CD", description: "Continuous integration and deployment", icon: "🔄" }
    ]
  }
];

const Hero = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [techStackDialogOpen, setTechStackDialogOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      
      const rect = gridRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      gridRef.current.style.setProperty('--x', `${x}px`);
      gridRef.current.style.setProperty('--y', `${y}px`);
    };

    const grid = gridRef.current;
    if (grid) {
      grid.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (grid) {
        grid.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const handleStartProject = () => {
    // Scroll to contact section when Start Project button is clicked
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Code-like Background Elements */}
      <div 
        ref={gridRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(220, 38, 38, 0.15) 0%, transparent 40%)`
        }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
        
        {/* Code Lines Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i} 
                className="whitespace-nowrap text-xs sm:text-sm font-mono opacity-30"
                style={{ 
                  transform: `translateY(${i * 40}px)`,
                  color: i % 3 === 0 ? '#ff4554' : i % 2 === 0 ? '#f1f1f1' : '#888'
                }}
              >
                {i % 2 === 0 ? 
                  'const transform = (ideas) => { return ideas.map(idea => new Solution(idea)); };' :
                  'function deployCode() { createValue(); improveExperience(); deliver(); }'}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Terminal size={16} className="text-primary" />
              <span className="text-sm font-mono font-medium text-primary">$ powering_future = true</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in tracking-tight">
            <span className="text-gradient">Transforming Ideas</span>
            <br />
            <span className="relative">
              Into 
              <span className="ml-3 relative inline-block">
                <span className="text-primary">Powerful</span>
                <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-primary"></span>
              </span> 
              Software
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We build cutting-edge software solutions that help businesses scale, innovate, and thrive in the digital landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6"
              onClick={handleStartProject}
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/20 hover:bg-primary/10 font-medium px-8 py-6"
              onClick={() => setTechStackDialogOpen(true)}
            >
              <Code size={18} className="mr-2" /> View Our Tech Stack
            </Button>
          </div>
          
          <div className="hidden md:block relative w-full max-w-4xl h-64 lg:h-80 mx-auto mt-8 glass-card rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-30 rounded-xl" />
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="space-y-4 text-center backdrop-blur-sm py-6 px-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gradient">Digital Solutions for Modern Businesses</h3>
                <p className="text-muted-foreground max-w-lg mx-auto">Bespoke software development that powers your business growth</p>
              </div>
            </div>
            
            {/* Terminal-like decoration */}
            <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md rounded px-3 py-1 flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Dialog - Improved for mobile */}
      <Dialog open={techStackDialogOpen} onOpenChange={setTechStackDialogOpen}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] p-4 md:p-6">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10">
            <span className="sr-only">Close</span>
          </DialogClose>
          
          <DialogHeader className="pb-2">
            <DialogTitle className="text-2xl font-bold text-gradient">Our Technology Stack</DialogTitle>
            <DialogDescription>
              We use cutting-edge technologies to deliver robust, scalable, and high-performance solutions
            </DialogDescription>
          </DialogHeader>
          
          <ScrollArea className="flex-grow overflow-auto max-h-[60vh] pr-4">
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
              {techStack.map((category) => (
                <div key={category.category} className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">{category.category}</h3>
                  <div className="space-y-3">
                    {category.technologies.map((tech) => (
                      <div key={tech.name} className="flex items-start p-3 rounded-lg border border-white/10 bg-black/20">
                        <div className="flex-shrink-0 h-8 w-8 bg-primary/10 rounded-md flex items-center justify-center text-lg mr-3">
                          {tech.icon}
                        </div>
                        <div>
                          <h4 className="font-medium">{tech.name}</h4>
                          <p className="text-sm text-muted-foreground">{tech.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="mt-4 border-t border-white/10 pt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Our technology choices are tailored to each project's specific needs, ensuring optimal performance and future scalability.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Scroll Down */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" aria-label="Scroll down">
          <ChevronDown size={32} className="text-foreground/60" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
