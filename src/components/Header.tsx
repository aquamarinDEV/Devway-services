
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-primary">Devway</Link>
          
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/projects" className="text-primary font-medium">Projects</Link></li>
              <li><Link to="#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="#about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
