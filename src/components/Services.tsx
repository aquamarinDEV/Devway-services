
import React, { useState } from 'react';
import { Button } from "../components/ui/button";
import { CheckCircle, Code, Database, Globe, Server, ServerCog, ArrowRight } from "lucide-react";

const servicesData = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications using cutting-edge technologies.",
    benefits: [
      "Responsive Design",
      "Progressive Web Apps",
      "Single Page Applications",
      "E-commerce Solutions"
    ]
  },
  {
    icon: ServerCog,
    title: "Custom Software",
    description: "Tailored software solutions that solve your specific business challenges.",
    benefits: [
      "Enterprise Resource Planning",
      "Customer Relationship Management",
      "Workflow Automation",
      "Legacy System Integration"
    ]
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform your raw data into actionable insights with our advanced analytics.",
    benefits: [
      "Business Intelligence",
      "Predictive Analytics",
      "Data Visualization",
      "Machine Learning Integration"
    ]
  },
  {
    icon: Server,
    title: "Cloud Solutions",
    description: "Scalable, secure and resilient cloud infrastructure for your applications.",
    benefits: [
      "Cloud Migration",
      "DevOps Implementation",
      "Serverless Architecture",
      "24/7 Monitoring & Support"
    ]
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <Code size={14} className="mr-2 text-primary" />
            <span className="text-sm font-medium text-primary font-mono">services.map(s =&gt; s.deliver())</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">What We Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide end-to-end solutions designed to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className={`p-6 rounded-lg border border-white/5 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:bg-black/30 ${activeIndex === index ? 'border-primary/30 bg-black/30 transform scale-[1.02]' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className={`mb-5 p-3 rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10 text-primary transition-all duration-300 ${activeIndex === index ? 'bg-primary/20' : ''}`}>
                <service.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              
              <p className="text-muted-foreground mb-6 text-sm">{service.description}</p>
              
              {/* Service benefits */}
              <ul className="space-y-2 mb-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-primary/70 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="link" 
                className="text-primary p-0 h-auto flex items-center hover:text-primary/80"
              >
                <span className="mr-1">Learn more</span>
                <ArrowRight size={14} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
