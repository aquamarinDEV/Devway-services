
import React, { useState } from 'react';
import { Button } from "../components/ui/button";
import { CheckCircle, Code, Database, Globe, Server, ServerCog, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useIsMobile } from "../hooks/use-mobile";

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
    ],
    details: "Our web development services use the latest frameworks and technologies to create fast, responsive, and user-friendly websites and web applications. We focus on performance, accessibility, and SEO to ensure your web presence drives business results."
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
    ],
    details: "We build bespoke software solutions designed specifically for your business needs. Whether you need to streamline operations, improve customer engagement, or integrate with existing systems, our custom software development services deliver scalable, maintainable solutions."
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
    ],
    details: "Our data analytics services help you make sense of your data and turn it into actionable insights. We use advanced analytics tools and techniques to identify patterns, predict trends, and visualize results in ways that drive better business decisions."
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
    ],
    details: "We provide comprehensive cloud solutions to help you leverage the power of cloud computing. From infrastructure setup and migration to ongoing management and optimization, we ensure your cloud environment is secure, scalable, and cost-effective."
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [serviceDetailsOpen, setServiceDetailsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<(typeof servicesData)[0] | null>(null);
  const isMobile = useIsMobile();

  const handleLearnMore = (service: (typeof servicesData)[0]) => {
    setSelectedService(service);
    setServiceDetailsOpen(true);
  };

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
                onClick={() => handleLearnMore(service)}
              >
                <span className="mr-1">Learn more</span>
                <ArrowRight size={14} />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Dialog */}
      <Dialog open={serviceDetailsOpen} onOpenChange={setServiceDetailsOpen}>
        <DialogContent className={`sm:max-w-2xl ${isMobile ? 'w-[95vw] p-4' : ''}`}>
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <selectedService.icon size={24} />
                  </div>
                  <DialogTitle className="text-2xl font-bold">{selectedService.title}</DialogTitle>
                </div>
                <DialogDescription>
                  {selectedService.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-6">
                <h4 className="font-medium mb-3">Overview</h4>
                <p className="text-muted-foreground mb-6">{selectedService.details}</p>
                
                <h4 className="font-medium mb-3">Key Benefits</h4>
                <ul className="space-y-2 mb-6">
                  {selectedService.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={18} className="mr-3 mt-0.5 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => {
                      setServiceDetailsOpen(false);
                      // Scroll to contact section
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        setTimeout(() => {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }
                    }}
                  >
                    Request a Consultation
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
