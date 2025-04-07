
import React from 'react';
import { Card, CardContent } from "../components/ui/card";

const projects = [
  {
    name: "E-Commerce Platform",
    description: "A scalable online shopping solution with integrated payment processing and inventory management.",
    image: "/placeholder.svg",
    technologies: "React, Node.js, MongoDB"
  },
  {
    name: "Healthcare Management System",
    description: "Digital platform for managing patient records, appointments, and medical staff workflows.",
    image: "/placeholder.svg",
    technologies: "Angular, Express, PostgreSQL"
  },
  {
    name: "Financial Analytics Dashboard",
    description: "Real-time data visualization tool for monitoring financial performance and market trends.",
    image: "/placeholder.svg",
    technologies: "Vue.js, Python, TensorFlow"
  },
  {
    name: "Smart City Infrastructure",
    description: "IoT solution for urban management including traffic, waste, and energy optimization.",
    image: "/placeholder.svg",
    technologies: "React Native, AWS, Kubernetes"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Our Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions we've built that showcase our expertise and drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card border-white/5 overflow-hidden group h-full">
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 group-hover:opacity-100 opacity-0 transition-opacity z-10"></div>
                <div 
                  className="absolute inset-0 bg-center bg-cover transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
              </div>
              <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="mt-auto">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {project.technologies}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-muted-foreground mb-8">
            Want to see how we can help with your next project?
          </p>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
