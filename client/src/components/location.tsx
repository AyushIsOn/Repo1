import { MapPin, Bus, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Location() {
  return (
    <section id="location" className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Find Us Easily!</h2>
          <p className="text-lg text-neutral-500">Located in the heart of Shivaji Nagar, Jhansi</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-neutral-500 text-lg">Interactive Google Maps</p>
                  <p className="text-sm text-neutral-400">Showing all three buildings</p>
                  <p className="text-xs text-neutral-400 mt-2">Shivaji Nagar, Jhansi, Uttar Pradesh</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Prime Location</h3>
                <p className="text-neutral-500">
                  Strategically located in Shivaji Nagar with easy access to colleges, markets, and transportation.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Bus className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Well Connected</h3>
                <p className="text-neutral-500">
                  Close to bus stops and auto-rickshaw stands for convenient daily commuting.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Nearby Facilities</h3>
                <p className="text-neutral-500">
                  Walking distance to grocery stores, medical facilities, and dining options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
