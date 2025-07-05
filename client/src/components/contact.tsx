import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, User } from "lucide-react";

export default function Contact() {
  const whatsappMessage = encodeURIComponent("Hi, I would like to inquire about PG accommodation at Avni PG");
  const whatsappUrl = `https://wa.me/919795204621?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Move In?</h2>
          <p className="text-xl text-neutral-300 max-w-2xl">
            Get in touch with us to secure your comfortable stay at Avni PG.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-neutral-900" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Shivaji Nagar, Jhansi, Uttar Pradesh
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-neutral-900" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone Numbers</h3>
                <p className="text-neutral-300 leading-relaxed">
                  <a href="tel:+919795204621" className="hover:text-white transition-colors">
                    +91 97952 04621
                  </a>
                  <br />
                  <a href="tel:+918318010062" className="hover:text-white transition-colors">
                    +91 83180 10062
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-neutral-900" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Contact Person</h3>
                <p className="text-neutral-300 leading-relaxed">Subhash Gupta (Owner)</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button 
              asChild
              className="bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-4 text-lg font-medium w-full rounded-full"
            >
              <a href="tel:+919795204621">
                <Phone className="w-5 h-5 mr-3" />
                Call Now - 97952 04621
              </a>
            </Button>
            
            <Button 
              asChild
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-medium w-full rounded-full"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp mr-3"></i>
                Message to WhatsApp
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="border-neutral-700 text-white hover:bg-neutral-800 hover:text-white px-8 py-4 text-lg font-medium w-full rounded-full bg-neutral-700"
            >
              <a href="tel:+918318010062">
                <Phone className="w-5 h-5 mr-3" />
                Alternate - 83180 10062
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
