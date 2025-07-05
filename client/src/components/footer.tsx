import { AlertTriangle, Phone } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Avni PG</h3>
            <p className="text-neutral-300">Your Home Away From Home</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <button 
              onClick={() => scrollToSection('properties')}
              className="text-neutral-300 hover:text-white transition-colors text-left md:text-center"
            >
              Properties
            </button>
            <button 
              onClick={() => scrollToSection('amenities')}
              className="text-neutral-300 hover:text-white transition-colors text-left md:text-center"
            >
              Amenities
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-neutral-300 hover:text-white transition-colors text-left md:text-center"
            >
              Contact
            </button>
          </div>
        </div>
        
        {/* Compact Fraud Warning Box */}
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 mb-8">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-pink-700 mb-2">
                ⚠️ BEWARE OF CYBER FRAUDSTERS
              </h4>
              <p className="text-xs text-pink-600 mb-3 leading-relaxed">
                Some cyber fraudsters have put their numbers on Google Maps and ask users to pay token money online to book rooms. 
                We <span className="font-semibold">DO NOT</span> charge anything until admission is confirmed. Please do not fall for this fraud.
              </p>
              <div className="bg-green-50 border border-green-200 rounded p-2">
                <p className="text-xs text-green-700 font-semibold mb-1">
                  ONLY CALL ON THESE VERIFIED NUMBERS:
                </p>
                <a 
                  href="tel:+919795204621" 
                  className="flex items-center text-green-600 hover:text-green-800 text-sm font-medium"
                >
                  <Phone className="w-3 h-3 mr-2" />
                  +91 97952 04621
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-neutral-700 text-center text-neutral-400">
          <p className="text-sm">&copy; 2025 Avni PG Hostel. All rights reserved. | Shivaji Nagar, Jhansi, Uttar Pradesh</p>
        </div>
      </div>
    </footer>
  );
}