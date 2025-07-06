import { MapPin, Bus, ShoppingCart, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProtectedImage } from "@/components/ui/protected-image";
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
        
        <div className="grid lg:grid-cols-2 gap-16 items-center justify-items-center lg:justify-items-start">
          <Card className="overflow-hidden border-0 shadow-sm w-full max-w-lg lg:max-w-none">
            <CardContent className="p-0">
              <div className="h-80 overflow-hidden bg-gray-50 flex items-center justify-center">
                <ProtectedImage
                  src="/webp-images/Girls - 1_1751727828946.webp" 
                  alt="Google Maps showing locations of all three Avni PG buildings"
                  className="w-full h-full object-contain"
                  watermark="Avni PG"
                  disableRightClick={true}
                  disableDownload={true}
                />
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-8 w-full max-w-lg lg:max-w-none text-center lg:text-left">
            <div className="flex items-start space-x-4 justify-center lg:justify-start">
              <div className="bg-neutral-900 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Strategic Location</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Perfectly positioned in Shivaji Nagar with easy access to colleges, markets, and transportation hubs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 justify-center lg:justify-start">
              <div className="bg-neutral-900 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Bus className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Well Connected</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Close to bus stops and auto-rickshaw stands for convenient daily commuting throughout the city.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 justify-center lg:justify-start">
              <div className="bg-neutral-900 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Essential Amenities</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Walking distance to grocery stores, medical facilities, restaurants, and daily necessities.
                </p>
              </div>
            </div>
            
            {/* Google Maps Button */}
            <div className="flex justify-center lg:justify-start mt-8">
              <Button 
                asChild
                className="bg-neutral-900 hover:bg-neutral-700 text-white px-6 py-3 text-base font-medium rounded-full"
              >
                <a href="https://g.co/kgs/qVi1nHk" target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-5 h-5 mr-2" />
                  View on Google Maps
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
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
                      <ProtectedImage
                        src="/webp-images/WhatsApp Image 2025-07-05 at 12.49.55 PM (1)_1751728025300.webp"
                        alt="Distance and time to key locations from Avni PG"
                        className="w-full h-auto object-cover"
                        watermark="Avni PG"
                        disableRightClick={true}
                        disableDownload={true}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="overflow-hidden border-0 shadow-sm">
                    <CardContent className="p-0">
                      <ProtectedImage
                        src="/webp-images/WhatsApp Image 2025-07-05 at 12.49.55 PM_1751728025300.webp"
                        alt="Travel time to important places in Jhansi"
                        className="w-full h-auto object-cover"
                        watermark="Avni PG"
                        disableRightClick={true}
                        disableDownload={true}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="overflow-hidden border-0 shadow-sm">
                    <CardContent className="p-0">
                      <ProtectedImage
                        src="/webp-images/WhatsApp Image 2025-07-05 at 12.49.56 PM (1)_1751728025300.webp"
                        alt="Distance information to colleges and institutions"
                        className="w-full h-auto object-cover"
                        watermark="Avni PG"
                        disableRightClick={true}
                        disableDownload={true}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="overflow-hidden border-0 shadow-sm">
                    <CardContent className="p-0">
                      <ProtectedImage
                        src="/webp-images/WhatsApp Image 2025-07-05 at 12.49.56 PM_1751728025300.webp"
                        alt="Travel times to shopping and commercial areas"
                        className="w-full h-auto object-cover"
                        watermark="Avni PG"
                        disableRightClick={true}
                        disableDownload={true}
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
                  src="/webp-images/WhatsApp Image 2025-07-05 at 12.49.55 PM (1)_1751728025300.webp"
                  alt="Distance and time to key locations from Avni PG"
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-sm">
              <CardContent className="p-0">
                <img 
                  src="/webp-images/WhatsApp Image 2025-07-05 at 12.49.55 PM_1751728025300.webp"
                  alt="Travel time to important places in Jhansi"
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-sm">
              <CardContent className="p-0">
                <img 
                  src="/webp-images/WhatsApp Image 2025-07-05 at 12.49.56 PM (1)_1751728025300.webp"
                  alt="Distance information to colleges and institutions"
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-sm">
              <CardContent className="p-0">
                <img 
                  src="/webp-images/WhatsApp Image 2025-07-05 at 12.49.56 PM_1751728025300.webp"
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
