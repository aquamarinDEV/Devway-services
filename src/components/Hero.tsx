
import React, { useEffect, useRef } from 'react';
import { Button } from "../components/ui/button";
import { ChevronDown, Code, Terminal, Brackets } from "lucide-react";

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
          <div className="inline-block terminal mb-6 backdrop-blur-md w-auto max-w-full">
            <div className="terminal-header flex items-center justify-between px-4">
              <div className="flex space-x-2">
                <span className="h-3 w-3 rounded-full bg-red-500"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
              </div>
              <span className="text-xs font-mono text-muted-foreground/70">solutions.js</span>
              <span className="w-4"></span>
            </div>
            <div className="px-6 py-4 text-left overflow-hidden">
              <div className="font-mono text-sm">
                <span className="syntax-comment">// Premium solutions for modern businesses</span>
                <div className="mt-2">
                  <span className="syntax-keyword">const</span> <span className="text-blue-400">digitalSolution</span> <span className="text-white/90">=</span> <span className="syntax-keyword">new</span> <span className="text-green-400">Solution</span><span className="text-white/90">({</span>
                </div>
                <div className="pl-5 mt-1">
                  <span className="text-yellow-400">type</span><span className="text-white/90">:</span> <span className="syntax-string">"Premium"</span><span className="text-white/90">,</span>
                </div>
                <div className="pl-5">
                  <span className="text-yellow-400">target</span><span className="text-white/90">:</span> <span className="syntax-string">"Modern Business"</span><span className="text-white/90">,</span>
                </div>
                <div className="pl-5">
                  <span className="text-yellow-400">quality</span><span className="text-white/90">:</span> <span className="syntax-string">"Enterprise Grade"</span>
                </div>
                <div className="mt-1">
                  <span className="text-white/90">});</span>
                </div>
              </div>
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
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10 font-medium px-8 py-6">
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
