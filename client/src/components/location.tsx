import { MapPin, Bus, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
        
        {/* Distance and Time to Key Places */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Distance to Key Places in Jhansi
          </h3>
          
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel className="w-full max-w-sm mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <Card className="overflow-hidden border-0 shadow-sm">
                    <CardContent className="p-0">
                      <img 
                        src="/images/WhatsApp Image 2025-07-05 at 12.49.55 PM (1)_1751728025300.jpeg"
                        alt="Distance and time to key locations from Avni PG"
                        className="w-full h-auto object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="overflow-hidden border-0 shadow-sm">
                    <CardContent className="p-0">
                      <img 
                        src="/images/WhatsApp Image 2025-07-05 at 12.49.55 PM_1751728025300.jpeg"
                        alt="Travel time to important places in Jhansi"
                        className="w-full h-auto object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="overflow-hidden border-0 shadow-sm">
                    <CardContent className="p-0">
                      <img 
                        src="/images/WhatsApp Image 2025-07-05 at 12.49.56 PM (1)_1751728025300.jpeg"
                        alt="Distance information to colleges and institutions"
                        className="w-full h-auto object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="overflow-hidden border-0 shadow-sm">
                    <CardContent className="p-0">
                      <img 
                        src="/images/WhatsApp Image 2025-07-05 at 12.49.56 PM_1751728025300.jpeg"
                        alt="Travel times to shopping and commercial areas"
                        className="w-full h-auto object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden border-0 shadow-sm">
              <CardContent className="p-0">
                <img 
                  src="/images/WhatsApp Image 2025-07-05 at 12.49.55 PM (1)_1751728025300.jpeg"
                  alt="Distance and time to key locations from Avni PG"
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-sm">
              <CardContent className="p-0">
                <img 
                  src="/images/WhatsApp Image 2025-07-05 at 12.49.55 PM_1751728025300.jpeg"
                  alt="Travel time to important places in Jhansi"
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-sm">
              <CardContent className="p-0">
                <img 
                  src="/images/WhatsApp Image 2025-07-05 at 12.49.56 PM (1)_1751728025300.jpeg"
                  alt="Distance information to colleges and institutions"
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-sm">
              <CardContent className="p-0">
                <img 
                  src="/images/WhatsApp Image 2025-07-05 at 12.49.56 PM_1751728025300.jpeg"
                  alt="Travel times to shopping and commercial areas"
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
