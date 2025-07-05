import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, User } from "lucide-react";

export default function Contact() {
  const whatsappMessage = encodeURIComponent("Hi, I would like to inquire about PG accommodation at Avni PG");
  const whatsappUrl = `https://wa.me/919795204621?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Your Seat Today!</h2>
          <p className="text-lg text-blue-100">Get in touch with us to secure your comfortable stay</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="bg-white bg-opacity-10 backdrop-blur-sm border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-blue-100">Shivaji Nagar, Jhansi, Uttar Pradesh</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone Numbers</p>
                    <p className="text-blue-100">
                      <a href="tel:+919795204621" className="hover:text-white transition-colors">
                        +91 97952 04621
                      </a>
                    </p>
                    <p className="text-blue-100">
                      <a href="tel:+918318010062" className="hover:text-white transition-colors">
                        +91 83180 10062
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Contact Person</p>
                    <p className="text-blue-100">Subhash Gupta</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-4">
            <Button 
              asChild
              className="bg-secondary hover:bg-amber-500 text-white px-8 py-4 text-lg font-semibold w-full"
            >
              <a href="tel:+919795204621">
                <Phone className="w-5 h-5 mr-3" />
                Call Now - 97952 04621
              </a>
            </Button>
            
            <Button 
              asChild
              className="bg-accent hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold w-full"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp mr-3"></i>
                WhatsApp Inquiry
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 border-white text-white px-8 py-4 text-lg font-semibold w-full"
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
