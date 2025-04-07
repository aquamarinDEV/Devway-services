
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Code, Smartphone, Globe, Shield, Cloud, BarChart3 } from "lucide-react";

const services = [
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: "Custom Software Development",
    description: "We build tailored software applications that perfectly match your unique business requirements and goals."
  },
  {
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    title: "Mobile App Development",
    description: "Create stunning, high-performance mobile applications for iOS and Android that engage users and drive growth."
  },
  {
    icon: <Globe className="h-12 w-12 text-primary" />,
    title: "Web Application Development",
    description: "We design and develop responsive, modern web applications that provide seamless user experiences across all devices."
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "Cybersecurity Solutions",
    description: "Protect your digital assets with our comprehensive cybersecurity services and secure application development practices."
  },
  {
    icon: <Cloud className="h-12 w-12 text-primary" />,
    title: "DevOps & Cloud Services",
    description: "Streamline your development workflow and optimize infrastructure with our expert DevOps and cloud management solutions."
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-primary" />,
    title: "AI & Data Analytics",
    description: "Leverage the power of artificial intelligence and data analytics to gain valuable insights and make data-driven decisions."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Technical background */}
      <div className="absolute inset-0 bg-black/30 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={i}
              className="absolute whitespace-nowrap font-mono text-xs opacity-50"
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: Math.random() * 0.5 + 0.1
              }}
            >
              {Math.random() > 0.5 ? 
                '01001010' : 
                '{ code: true }'}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <Code size={14} className="mr-2 text-primary" />
            <span className="text-sm font-medium text-primary font-mono">services.map(solution =&gt; future)</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-gradient-accent">Our Services</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We offer a comprehensive range of software development services to meet the diverse needs of modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-card glow border-white/5 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:translate-y-[-5px]"
            >
              <CardHeader className="space-y-1 pb-2">
                <div className="mb-4 relative">
                  {service.icon}
                  <div className="absolute -right-1 -top-1 h-8 w-8 border-t-2 border-r-2 border-primary/40"></div>
                  <div className="absolute -left-1 -bottom-1 h-8 w-8 border-b-2 border-l-2 border-primary/40"></div>
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <button className="text-primary hover:text-primary/80 text-sm flex items-center font-medium transition-colors">
                  View service details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
