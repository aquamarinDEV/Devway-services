
import React from 'react';
import { Button } from '../components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">About TechNova</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2015, TechNova has been at the forefront of software innovation, 
              helping businesses transform their digital presence and operational efficiency through 
              cutting-edge technology solutions.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              We are a team of passionate engineers, designers, and problem solvers who thrive on 
              challenging projects and delivering exceptional results that exceed our clients' expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">200+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
                <p className="text-muted-foreground">Team Members</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">95%</h3>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
            </div>
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Learn Our Story
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 glassmorphism border border-white/10 rounded-2xl overflow-hidden h-[400px] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-30" />
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with innovative software solutions that drive growth, 
                  efficiency, and competitive advantage in a rapidly evolving digital landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
