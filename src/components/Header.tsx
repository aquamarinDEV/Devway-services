
import React, { useState, useEffect } from 'react';
import { Button } from "../components/ui/button";
import { Code, Menu, X, ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-xl bg-background/80 shadow-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="relative">
            <span className="text-2xl font-bold text-gradient">Devway</span>
            <span className="absolute -top-1 -right-2 h-2 w-2 bg-primary rounded-full animate-pulse"></span>
          </Link>
          
          {/* Decorative element */}
          <div className="hidden md:flex items-center ml-6 pl-6 border-l border-white/10">
            <Code size={16} className="text-primary mr-2" />
            <span className="text-xs text-muted-foreground font-mono">dev studio</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/#services" className="text-foreground hover:text-primary transition-colors relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/#about" className="text-foreground hover:text-primary transition-colors relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/projects" className="text-foreground hover:text-primary transition-colors relative group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-1" asChild>
            <Link to="/contact">
              <span>Start Project</span>
              <ChevronDown size={16} />
            </Link>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-white/5">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/#services" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link to="/#about" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/projects" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
