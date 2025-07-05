import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-8 leading-tight">
            Avni PG For Students
            <br />
            <span className="text-neutral-600">and Working Professionals</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-12 max-w-2xl">
            Perfect PG accommodation with all the amenities located in Shivaji Nagar, Jhansi. 
            Close to all key places with a community that feels like home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 text-lg font-medium rounded-full"
            >
              <a href="tel:+919795204621">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-neutral-300 text-neutral-900 hover:bg-neutral-100 px-8 py-4 text-lg font-medium rounded-full"
            >
              <a href="https://wa.me/919795204621" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
