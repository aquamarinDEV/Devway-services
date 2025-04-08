import React from 'react';
import { Button } from '../components/ui/button';
import { Terminal, Code, Server, Database } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-24 relative overflow-hidden">
      {/* Technical background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl"></div>
        
        {/* Code-inspired decorative elements */}
        <div className="hidden md:block absolute top-20 left-10 w-32 h-32 border-l-2 border-t-2 border-primary/20"></div>
        <div className="hidden md:block absolute bottom-20 right-10 w-32 h-32 border-r-2 border-b-2 border-primary/20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20">
              <Terminal size={14} className="mr-2 text-primary" />
              <span className="text-sm font-medium text-primary font-mono">about.expertise</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-gradient">About Devway</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2015, Devway has been at the forefront of software innovation, 
              helping businesses transform their digital presence and operational efficiency through 
              cutting-edge technology solutions.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              We are a team of passionate engineers, designers, and problem solvers who thrive on 
              challenging projects and delivering exceptional results that exceed our clients' expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="bg-secondary/20 backdrop-blur-sm p-4 rounded-lg border border-white/5 hover:border-primary/20 transition-colors">
                <h3 className="text-4xl font-bold text-primary mb-2">200+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-secondary/20 backdrop-blur-sm p-4 rounded-lg border border-white/5 hover:border-primary/20 transition-colors">
                <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
                <p className="text-muted-foreground">Team Members</p>
              </div>
              <div className="bg-secondary/20 backdrop-blur-sm p-4 rounded-lg border border-white/5 hover:border-primary/20 transition-colors">
                <h3 className="text-4xl font-bold text-primary mb-2">95%</h3>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="bg-secondary/20 backdrop-blur-sm p-4 rounded-lg border border-white/5 hover:border-primary/20 transition-colors">
                <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
            </div>
            
            
          </div>
          
          <div className="order-1 lg:order-2 glassmorphism border border-white/10 rounded-2xl overflow-hidden h-[400px] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-30" />
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20" />
            
            {/* Terminal-like decoration */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-black/50 flex items-center px-4">
              <div className="flex space-x-2">
                <span className="h-3 w-3 rounded-full bg-red-500"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
              </div>
              <div className="ml-4 text-xs font-mono text-white/70">mission.js</div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center p-8 pt-12">
              <div className="space-y-8 text-center backdrop-blur-sm p-6 rounded-lg border border-white/5">
                <h3 className="text-2xl font-bold mb-4 text-gradient">Our Mission</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Code className="h-6 w-6 mr-4 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground text-left">
                      To empower businesses with innovative software solutions that drive growth and competitive advantage.
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <Server className="h-6 w-6 mr-4 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground text-left">
                      To build scalable, future-proof technology that adapts to changing business needs.
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <Database className="h-6 w-6 mr-4 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground text-left">
                      To deliver solutions that transform data into actionable business intelligence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;