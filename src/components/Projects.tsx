
import React from 'react';
import { Card, CardContent } from "../components/ui/card";
import { ExternalLink, Github, Code } from "lucide-react";

const projects = [
  {
    name: "Enterprise E-Commerce Platform",
    description: "A scalable microservices-based online shopping solution with integrated payment processing and inventory management.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB", "Docker"],
    category: "Web Application"
  },
  {
    name: "Healthcare Management System",
    description: "Digital platform for managing patient records, appointments, and medical staff workflows with HIPAA compliance.",
    image: "/placeholder.svg",
    technologies: ["Angular", "Express", "PostgreSQL", "AWS"],
    category: "Enterprise Solution"
  },
  {
    name: "Financial Analytics Dashboard",
    description: "Real-time data visualization tool for monitoring financial performance with predictive analytics capabilities.",
    image: "/placeholder.svg",
    technologies: ["Vue.js", "Python", "TensorFlow", "Redis"],
    category: "Data Analytics"
  },
  {
    name: "Smart City Infrastructure",
    description: "IoT solution for urban management including traffic, waste, and energy optimization with machine learning algorithms.",
    image: "/placeholder.svg",
    technologies: ["React Native", "AWS", "Kubernetes", "TensorFlow"],
    category: "IoT Solution"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-black/30">
      {/* Code-inspired background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-grid-pattern"></div>
        
        {/* Animated terminals */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div 
            key={i}
            className="absolute font-mono text-xs bg-secondary/40 backdrop-blur-sm p-3 rounded border border-white/5 w-48 hidden md:block"
            style={{ 
              top: `${20 + i * 30}%`, 
              right: i % 2 === 0 ? '10%' : '30%',
              transform: `rotate(${-5 + Math.random() * 10}deg)`
            }}
          >
            <div className="flex gap-1 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <div className="text-primary/80">$ git commit -m "feature: add {i}"</div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <Github size={14} className="mr-2 text-primary" />
            <span className="text-sm font-medium text-primary font-mono">projects.filter(p => p.isSuccessful)</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">Our Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions we've built that showcase our expertise and drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card border-white/5 overflow-hidden group h-full transition-all duration-300 hover:border-primary/30 hover:translate-y-[-5px]">
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/95 group-hover:opacity-100 opacity-0 transition-opacity z-10"></div>
                <div 
                  className="absolute inset-0 bg-center bg-cover transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-primary/80 backdrop-blur-sm text-xs font-medium z-20">
                  {project.category}
                </div>
              </div>
              
              <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                
                <p className="text-muted-foreground mb-4 flex-grow text-sm">{project.description}</p>
                
                <div className="mt-auto space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="inline-block px-2 py-1 bg-secondary/40 rounded-md text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-3 border-t border-white/5">
                    <button className="flex items-center text-xs text-primary hover:text-primary/70 transition-colors">
                      <Code size={12} className="mr-1" /> View Details
                    </button>
                    <button className="flex items-center text-xs text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink size={12} className="mr-1" /> Live Demo
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-muted-foreground mb-8">
            Want to see how we can help with your next project?
          </p>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
