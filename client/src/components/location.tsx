import { MapPin, Bus, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Prime Location</h2>
          <p className="text-xl text-neutral-600 max-w-2xl">
            Located in the heart of Shivaji Nagar, Jhansi with easy access to everything you need.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Card className="overflow-hidden border-0 shadow-sm">
            <CardContent className="p-0">
              <div className="h-80 overflow-hidden">
                <img 
                  src="/images/Girls - 1_1751727828946.png" 
                  alt="Google Maps showing locations of all three Avni PG buildings"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-neutral-900 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Strategic Location</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Perfectly positioned in Shivaji Nagar with easy access to colleges, markets, and transportation hubs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-neutral-900 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Bus className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Well Connected</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Close to bus stops and auto-rickshaw stands for convenient daily commuting throughout the city.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-neutral-900 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Essential Amenities</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Walking distance to grocery stores, medical facilities, restaurants, and daily necessities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
