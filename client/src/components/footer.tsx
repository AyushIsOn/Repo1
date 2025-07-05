import { AlertTriangle, Phone } from "lucide-react";

function FraudWarning() {
  return (
    <div className="bg-red-50 border border-red-200 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="flex items-start space-x-4">
          <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-red-900 mb-4">
              ⚠️ BEWARE OF CYBER FRAUDSTERS
            </h3>
            <p className="text-red-800 mb-4 leading-relaxed">
              Some cyber fraudsters have put their numbers on Google Maps and ask users to pay token money online to book rooms. 
              <strong> We DO NOT charge anything until admission is confirmed.</strong> Please do not fall for this fraud.
            </p>
            <div className="bg-white border border-red-200 rounded-lg p-4">
              <p className="text-red-900 font-semibold mb-2">
                ONLY CALL ON THESE VERIFIED NUMBERS:
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <a 
                  href="tel:+919795204621" 
                  className="flex items-center text-red-700 hover:text-red-900 font-medium"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +91 97952 04621
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <FraudWarning />
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
    </>
  );
}