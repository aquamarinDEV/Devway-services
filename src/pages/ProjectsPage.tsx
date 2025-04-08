
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

const ProjectsPage = () => {
  // Set page title using useEffect
  useEffect(() => {
    // Update document title
    document.title = "Our Projects - Devway";
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Explore our portfolio of successful projects and case studies');
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
          
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
              All Projects
            </button>
            <button className="px-4 py-2 rounded-full bg-background border border-border hover:border-primary/50 transition-colors text-sm font-medium">
              Web Application
            </button>
            <button className="px-4 py-2 rounded-full bg-background border border-border hover:border-primary/50 transition-colors text-sm font-medium">
              Enterprise Solution
            </button>
            <button className="px-4 py-2 rounded-full bg-background border border-border hover:border-primary/50 transition-colors text-sm font-medium">
              Data Analytics
            </button>
            <button className="px-4 py-2 rounded-full bg-background border border-border hover:border-primary/50 transition-colors text-sm font-medium">
              IoT Solution
            </button>
          </div>
        </div>

        <Projects />

        <div className="container mx-auto px-4 mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  3
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
