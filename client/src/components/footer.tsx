export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-neutral-200 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Avni PG</h3>
            <p className="text-neutral-600">Your Home Away From Home</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <button 
              onClick={() => scrollToSection('properties')}
              className="text-neutral-600 hover:text-neutral-900 transition-colors text-left md:text-center"
            >
              Properties
            </button>
            <button 
              onClick={() => scrollToSection('rooms')}
              className="text-neutral-600 hover:text-neutral-900 transition-colors text-left md:text-center"
            >
              Rooms
            </button>
            <button 
              onClick={() => scrollToSection('amenities')}
              className="text-neutral-600 hover:text-neutral-900 transition-colors text-left md:text-center"
            >
              Amenities
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-neutral-600 hover:text-neutral-900 transition-colors text-left md:text-center"
            >
              Contact
            </button>
          </div>
        </div>
        <div className="pt-8 border-t border-neutral-200 text-center text-neutral-500">
          <p>&copy; 2025 Avni PG Hostel. All rights reserved. | Shivaji Nagar, Jhansi, Uttar Pradesh</p>
        </div>
      </div>
    </footer>
  );
}
