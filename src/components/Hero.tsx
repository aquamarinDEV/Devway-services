
import React, { useEffect, useRef } from 'react';
import { Button } from "../components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const gridRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div 
        ref={gridRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(123, 97, 255, 0.1) 0%, transparent 40%)`
        }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-medium text-primary">Innovating the Future of Software</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in">
            <span className="text-gradient">Transforming Ideas</span>
            <br />
            Into Powerful Software
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We build cutting-edge software solutions that help businesses scale, innovate, and thrive in the digital landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10">
              Learn More
            </Button>
          </div>
          
          <div className="hidden md:block relative w-full max-w-4xl h-64 lg:h-80 mx-auto mt-8 glass-card rounded-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-30 rounded-xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-light">Your Product Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </div>

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
