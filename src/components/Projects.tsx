
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

// Mock data for projects
const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Application",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=E-commerce",
    description: "A full-featured e-commerce platform with product management, user authentication, and payment processing."
  },
  {
    id: 2,
    title: "Healthcare Management System",
    category: "Enterprise Solution",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Healthcare",
    description: "An enterprise solution for healthcare providers to manage patient records, appointments, and billing."
  },
  {
    id: 3,
    title: "Financial Analytics Dashboard",
    category: "Data Analytics",
    image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Finance",
    description: "Real-time financial analytics dashboard with customizable reports and predictive insights."
  },
  {
    id: 4,
    title: "Smart Home Integration",
    category: "IoT Solution",
    image: "https://placehold.co/600x400/f59e0b/ffffff?text=Smart+Home",
    description: "IoT solution connecting and controlling smart home devices through a centralized application."
  },
  {
    id: 5,
    title: "Supply Chain Tracking",
    category: "Enterprise Solution",
    image: "https://placehold.co/600x400/ef4444/ffffff?text=Supply+Chain",
    description: "Blockchain-based supply chain tracking solution for improved transparency and efficiency."
  },
  {
    id: 6,
    title: "Property Management Portal",
    category: "Web Application",
    image: "https://placehold.co/600x400/64748b/ffffff?text=Property",
    description: "Property management portal for landlords and tenants with maintenance requests and payment tracking."
  }
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <Card key={project.id} className="overflow-hidden border-border hover:border-primary/50 transition-colors">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">{project.category}</span>
              </div>
              <p className="text-muted-foreground text-sm">{project.description}</p>
              <div className="mt-4">
                <button className="text-primary hover:underline text-sm font-medium">
                  View Case Study →
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
