export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Avni PG</h3>
            <p className="text-gray-400">Your Home Away From Home</p>
          </div>
          <div className="flex space-x-6">
            <button 
              onClick={() => scrollToSection('properties')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Properties
            </button>
            <button 
              onClick={() => scrollToSection('rooms')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Rooms
            </button>
            <button 
              onClick={() => scrollToSection('amenities')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Amenities
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Avni PG Hostel. All rights reserved. | Shivaji Nagar, Jhansi, Uttar Pradesh</p>
        </div>
      </div>
    </footer>
  );
}
