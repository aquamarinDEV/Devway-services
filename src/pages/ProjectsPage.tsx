
import React, { useState } from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useEffect } from 'react';

// Import project data from Projects component
import { projects as allProjects } from '../components/Projects';

const ProjectsPage = () => {
  const [category, setCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;
  
  // Filter projects based on selected category
  const filteredProjects = category === "all" 
    ? allProjects 
    : allProjects.filter(project => project.category === category);
  
  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  
  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  // Set page title
  useEffect(() => {
    document.title = "Our Projects - Devway";
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Our Portfolio</h1>
            <p className="text-lg text-muted-foreground mb-4">
              Explore our latest work and see how we help businesses transform through technology.
            </p>
          </div>
          
          {/* Filter buttons */}
          <ToggleGroup 
            type="single" 
            value={category} 
            onValueChange={(value) => value && setCategory(value)}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            <ToggleGroupItem 
              value="all" 
              className="px-4 py-2 rounded-full data-[state=on]:bg-primary data-[state=on]:text-primary-foreground bg-secondary/20 text-sm font-medium"
            >
              All Projects
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="Web Application" 
              className="px-4 py-2 rounded-full data-[state=on]:bg-primary data-[state=on]:text-primary-foreground bg-secondary/20 text-sm font-medium"
            >
              Web Application
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="Enterprise Solution" 
              className="px-4 py-2 rounded-full data-[state=on]:bg-primary data-[state=on]:text-primary-foreground bg-secondary/20 text-sm font-medium"
            >
              Enterprise Solution
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="Data Analytics" 
              className="px-4 py-2 rounded-full data-[state=on]:bg-primary data-[state=on]:text-primary-foreground bg-secondary/20 text-sm font-medium"
            >
              Data Analytics
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="IoT Solution" 
              className="px-4 py-2 rounded-full data-[state=on]:bg-primary data-[state=on]:text-primary-foreground bg-secondary/20 text-sm font-medium"
            >
              IoT Solution
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Display Projects Component with custom projects */}
        <Projects customProjects={currentProjects} />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="container mx-auto px-4 mt-12">
            <Pagination>
              <PaginationContent>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink 
                      href="#" 
                      isActive={currentPage === index + 1}
                      onClick={(e) => {
                        e.preventDefault(); 
                        setCurrentPage(index + 1);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
