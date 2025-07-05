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
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-neutral-900">Avni PG</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('properties')} className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
              Properties
            </button>
            <button onClick={() => scrollToSection('rooms')} className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
              Rooms
            </button>
            <button onClick={() => scrollToSection('amenities')} className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
              Amenities
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-3">
            <Button asChild className="bg-neutral-900 text-white hover:bg-neutral-800 rounded-full px-6 py-2">
              <a href="tel:+919795204621">
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
          <div className="md:hidden py-4 border-t border-neutral-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('properties')} className="text-neutral-600 hover:text-neutral-900 transition-colors text-left">
                Properties
              </button>
              <button onClick={() => scrollToSection('rooms')} className="text-neutral-600 hover:text-neutral-900 transition-colors text-left">
                Rooms
              </button>
              <button onClick={() => scrollToSection('amenities')} className="text-neutral-600 hover:text-neutral-900 transition-colors text-left">
                Amenities
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-neutral-600 hover:text-neutral-900 transition-colors text-left">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-neutral-600 hover:text-neutral-900 transition-colors text-left">
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
