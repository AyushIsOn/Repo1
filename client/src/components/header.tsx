import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Avni PG</h1>
            <span className="ml-2 text-sm text-neutral-500">Shivaji Nagar, Jhansi</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('properties')} className="text-neutral-500 hover:text-primary transition-colors">
              Properties
            </button>
            <button onClick={() => scrollToSection('rooms')} className="text-neutral-500 hover:text-primary transition-colors">
              Rooms
            </button>
            <button onClick={() => scrollToSection('amenities')} className="text-neutral-500 hover:text-primary transition-colors">
              Amenities
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-neutral-500 hover:text-primary transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-neutral-500 hover:text-primary transition-colors">
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-3">
            <Button asChild className="bg-primary text-white hover:bg-blue-700">
              <a href="tel:+919795204621">
                <i className="fas fa-phone mr-2"></i>
                Call Now
              </a>
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('properties')} className="text-neutral-500 hover:text-primary transition-colors text-left">
                Properties
              </button>
              <button onClick={() => scrollToSection('rooms')} className="text-neutral-500 hover:text-primary transition-colors text-left">
                Rooms
              </button>
              <button onClick={() => scrollToSection('amenities')} className="text-neutral-500 hover:text-primary transition-colors text-left">
                Amenities
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-neutral-500 hover:text-primary transition-colors text-left">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-neutral-500 hover:text-primary transition-colors text-left">
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
