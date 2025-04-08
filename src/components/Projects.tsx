
import React from 'react';
import { Card, CardContent } from "../components/ui/card";
import { ExternalLink, Github, Code } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const projects = [
  {
    id: 1,
    name: "Enterprise E-Commerce Platform",
    description: "A scalable microservices-based online shopping solution with integrated payment processing and inventory management.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB", "Docker"],
    category: "Web Application",
    details: "Our enterprise e-commerce platform offers a comprehensive solution for businesses looking to scale their online presence. Built with a microservices architecture, it handles high transaction volumes with ease while maintaining performance. Key features include real-time inventory management, multiple payment gateway integrations, and a customizable admin dashboard for business analytics."
  },
  {
    id: 2,
    name: "Healthcare Management System",
    description: "Digital platform for managing patient records, appointments, and medical staff workflows with HIPAA compliance.",
    image: "/placeholder.svg",
    technologies: ["Angular", "Express", "PostgreSQL", "AWS"],
    category: "Enterprise Solution",
    details: "Our Healthcare Management System revolutionizes medical record keeping and staff workflows while maintaining strict HIPAA compliance. The system includes secure patient portals, appointment scheduling with automated reminders, comprehensive medical history tracking, and integration capabilities with laboratory and pharmacy systems."
  },
  {
    id: 3,
    name: "Financial Analytics Dashboard",
    description: "Real-time data visualization tool for monitoring financial performance with predictive analytics capabilities.",
    image: "/placeholder.svg",
    technologies: ["Vue.js", "Python", "TensorFlow", "Redis"],
    category: "Data Analytics",
    details: "This powerful dashboard provides financial institutions with real-time insights and predictive modeling. It features custom visualization tools, anomaly detection for fraud prevention, automated reporting, and machine learning algorithms that improve forecasting accuracy over time as they learn from historical data patterns."
  },
  {
    id: 4,
    name: "Smart City Infrastructure",
    description: "IoT solution for urban management including traffic, waste, and energy optimization with machine learning algorithms.",
    image: "/placeholder.svg",
    technologies: ["React Native", "AWS", "Kubernetes", "TensorFlow"],
    category: "IoT Solution",
    details: "Our Smart City solution connects thousands of IoT sensors across urban environments to optimize city operations. The platform includes traffic pattern optimization that reduces congestion by up to 30%, smart waste management that schedules collections only when needed, and energy grid management that has helped cities reduce power consumption by up to 25%."
  },
  {
    id: 5,
    name: "Supply Chain Optimization",
    description: "End-to-end supply chain management platform with real-time tracking and AI-powered inventory forecasting.",
    image: "/placeholder.svg",
    technologies: ["React", "Python", "GraphQL", "PostgreSQL"],
    category: "Enterprise Solution",
    details: "This supply chain platform provides end-to-end visibility and optimization using AI-powered forecasting. Features include real-time shipment tracking with geofencing alerts, vendor performance analytics, inventory optimization that reduces holding costs, and demand forecasting that maintains 94% accuracy even with seasonal fluctuations."
  },
  {
    id: 6,
    name: "Customer Behavior Analytics",
    description: "ML-powered analytics platform that provides deep insights into customer behavior and personalization opportunities.",
    image: "/placeholder.svg",
    technologies: ["React", "Python", "TensorFlow", "BigQuery"],
    category: "Data Analytics",
    details: "Our customer analytics platform helps businesses understand and predict customer behavior with unprecedented accuracy. The system processes millions of customer interactions to identify patterns, segment audiences effectively, predict churn before it happens, and provide personalized recommendations that have increased client conversion rates by an average of 27%."
  },
  {
    id: 7,
    name: "Smart Home Automation",
    description: "IoT platform for connecting and controlling smart home devices with voice commands and mobile app integration.",
    image: "/placeholder.svg",
    technologies: ["React Native", "Node.js", "MQTT", "MongoDB"],
    category: "IoT Solution",
    details: "This comprehensive smart home system connects and controls all aspects of residential automation. It features voice control integration with major assistants, geofencing for automatic triggers, energy usage optimization that has reduced user utility bills by up to 23%, and advanced security features including AI-powered anomaly detection."
  },
  {
    id: 8,
    name: "Content Management System",
    description: "Custom headless CMS with API-first approach, providing content delivery for multiple frontend applications.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "GraphQL", "Node.js", "MongoDB"],
    category: "Web Application",
    details: "Our headless CMS solution provides unparalleled flexibility for content creators and developers alike. The system features a powerful API-first architecture, content versioning and workflow approvals, multi-channel publishing capabilities, and a user-friendly interface that requires minimal training while providing advanced capabilities."
  },
  {
    id: 9,
    name: "Predictive Maintenance System",
    description: "IoT solution for industrial equipment monitoring with predictive maintenance alerts based on ML algorithms.",
    image: "/placeholder.svg",
    technologies: ["Python", "TensorFlow", "React", "MongoDB"],
    category: "IoT Solution",
    details: "This industrial IoT platform has helped manufacturing clients reduce downtime by an average of 37%. The system uses vibration analysis, thermal monitoring, and performance metrics to detect equipment issues before they cause failures. Advanced machine learning models continuously improve prediction accuracy, and the mobile alert system ensures maintenance teams can respond immediately to critical warnings."
  },
  {
    id: 10,
    name: "HR Management Platform",
    description: "Comprehensive HR solution for employee management, payroll processing, and performance tracking.",
    image: "/placeholder.svg",
    technologies: ["Angular", "Node.js", "PostgreSQL", "Docker"],
    category: "Enterprise Solution",
    details: "Our HR platform streamlines all aspects of workforce management while improving employee satisfaction. Key modules include automated payroll processing with tax compliance, performance review systems with 360-degree feedback, recruitment and onboarding workflows, and advanced analytics that help identify flight risks and top performers."
  }
];

interface ProjectsProps {
  customProjects?: typeof projects;
}

const Projects = ({ customProjects }: ProjectsProps) => {
  const navigate = useNavigate();
  const projectsToShow = customProjects || projects.slice(0, 4);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleViewAllClick = () => {
    navigate('/projects');
    window.scrollTo(0, 0);
  };

  const handleViewDetails = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  return (
    <section id="projects" className="py-16 relative bg-black/30">
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
        {!customProjects && (
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20">
              <Github size={14} className="mr-2 text-primary" />
              <span className="text-sm font-medium text-primary font-mono">projects.filter(p =&gt; p.isSuccessful)</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-gradient">Our Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative solutions we've built that showcase our expertise and drive real business results.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {projectsToShow.map((project, index) => (
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
                    <button 
                      onClick={() => handleViewDetails(project)} 
                      className="flex items-center text-xs text-primary hover:text-primary/70 transition-colors"
                    >
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
        
        {/* Only show "View All" button on the homepage */}
        {!customProjects && (
          <div className="mt-16 text-center">
            <p className="text-xl text-muted-foreground mb-8">
              Want to see how we can help with your next project?
            </p>
            <button 
              onClick={handleViewAllClick} 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              View All Case Studies
            </button>
          </div>
        )}
      </div>

      {/* Project Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gradient">{selectedProject.name}</DialogTitle>
                <DialogDescription className="pt-2">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="inline-block px-2 py-1 bg-secondary/40 rounded-md text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <div 
                  className="w-full h-60 bg-center bg-cover rounded-md"
                  style={{ backgroundImage: `url(${selectedProject.image})` }}
                ></div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Project Overview</h3>
                  <p className="text-muted-foreground">{selectedProject.details}</p>
                </div>
                <div className="pt-4 flex justify-end">
                  <button 
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <ExternalLink size={16} className="mr-2" /> View Live Demo
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
