import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { X } from "lucide-react";

interface GalleryImage {
  url: string;
  alt: string;
  description: string;
  rotation?: number;
}

const galleryData = [
  {
    id: 1,
    title: "Avni Girls 1 Rooms",
    images: [
      {
        url: "/optimized-images/WhatsApp Image 2025-07-05 at 6.15.03 AM_1751727421470.webp",
        alt: "Girls room interior",
        description: "Comfortable room setup with personal space and modern amenities"
      },
      {
        url: "/optimized-images/WhatsApp Image 2025-07-05 at 6.15.02 AM_1751727425482.webp",
        alt: "Room facilities",
        description: "Well-organized room with storage and study facilities"
      },
      {
        url: "/optimized-images/WhatsApp Image 2025-07-05 at 6.15.00 AM_1751727429452.webp",
        alt: "Living space arrangement",
        description: "Clean and organized living space with proper ventilation"
      },
      {
        url: "/optimized-images/20250705_111711_1751727472907.webp",
        alt: "Bathroom and outdoor access",
        description: "Modern bathroom facilities with balcony access and greenery view"
      },
      {
        url: "/optimized-images/20250705_111434_1751727492174.webp",
        alt: "Building courtyard view",
        description: "Courtyard area with green spaces and recreational facilities"
      },
      {
        url: "/optimized-images/20250705_111415_1751727496435.webp",
        alt: "Rooftop garden area",
        description: "Beautiful rooftop garden with plants and peaceful environment"
      },
      {
        url: "/optimized-images/20250705_111302_1751727510189.webp",
        alt: "Kitchen and common facilities",
        description: "Shared kitchen area with refrigerator, cooking facilities and water purifier"
      },
      {
        url: "/optimized-images/2021-08-02_1751727639668.webp",
        alt: "Building corridor and entrance",
        description: "Clean corridors with modern stairs and well-maintained common areas"
      },
      {
        url: "/optimized-images/WhatsApp Image 2025-07-05 at 9.24.49 PM_1751731408158.webp",
        alt: "3 seater room with attached bathroom",
        description: "3 seater room with attached bathroom, geyser and direct access to the park with mandir"
      }
    ]
  },
  {
    id: 2,
    title: "Avni Girls 2 Rooms",
    images: [
      {
        url: "/optimized-images/20250705_112050_1751727258654.webp",
        alt: "Water heater facilities",
        description: "Modern geyser installation for hot water availability"
      },
      {
        url: "/optimized-images/20250705_112137_1751727258654.webp",
        alt: "Study room with furniture",
        description: "Dedicated study space with table, chair and storage cabinet"
      },
      {
        url: "/optimized-images/20250705_112151_1751727258654.webp",
        alt: "Girls room with personal space",
        description: "Individual room with study table, wardrobe and personal amenities"
      },
      {
        url: "/optimized-images/20250705_112450_1751727285725.webp",
        alt: "Shared accommodation for girls",
        description: "Comfortable shared room with individual beds and study areas"
      },
      {
        url: "/optimized-images/20250705_112846_1751727285725.webp",
        alt: "Girls room with natural light",
        description: "Well-lit room with window, bed and personal storage space"
      },
      {
        url: "/optimized-images/20250705_113024_1751727285725.webp",
        alt: "Common kitchen facilities",
        description: "Shared kitchen with cooking facilities, water storage and appliances"
      }
    ]
  },
  {
    id: 3,
    title: "Avni Boys Rooms",
    images: [
      {
        url: "/optimized-images/20250705_103605_1751716360876.webp",
        alt: "Spacious boys room with study area",
        description: "Well-lit room with study desk, wardrobe, and comfortable living space"
      },
      {
        url: "/optimized-images/20250705_103901_1751716360877.webp",
        alt: "Boys room with bed and storage",
        description: "Individual bed setup with personal storage and study chair"
      },
      {
        url: "/optimized-images/20250705_103916_1751716360877.webp",
        alt: "Multi-bed boys accommodation",
        description: "Multiple bed arrangement with personal wardrobes and study areas"
      },
      {
        url: "/optimized-images/20250705_104258_1751716360877.webp",
        alt: "Boys room with shared facilities",
        description: "Shared accommodation with individual beds and personal storage space"
      },
      {
        url: "/optimized-images/20250705_104552_1751716360877.webp",
        alt: "Outdoor recreation area",
        description: "Outdoor space with recreational facilities and green surroundings"
      },
      {
        url: "/optimized-images/20250705_104754_1751716360877.webp",
        alt: "Modern boys room with amenities",
        description: "Well-equipped room with modern facilities and comfortable living arrangement"
      },
      {
        url: "/optimized-images/20250705_111513_1751731261770.webp",
        alt: "Terrace area with city view",
        description: "Spacious terrace area with panoramic city view and outdoor space for relaxation"
      }
    ]
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">See Inside</h2>
          <p className="text-xl text-neutral-600 max-w-2xl">
            Take a closer look at our rooms, facilities, and the comfortable environment we provide.
          </p>
        </div>
        
        <div className="space-y-16">
          {galleryData.map((section) => (
            <div key={section.id} id={`gallery-property-${section.id}`}>
              <h3 className="text-3xl font-bold text-neutral-900 mb-8">{section.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {section.images.map((image, index) => (
                  <div key={index} className="relative group cursor-pointer">
                    <div 
                      className="aspect-square overflow-hidden rounded-lg"
                      onClick={() => openLightbox(image)}
                    >
                      <ResponsiveImage
                        src={image.url} 
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        watermark="Avni PG"
                        disableRightClick={true}
                        disableDownload={true}
                        rotation={(image as GalleryImage).rotation || 0}
                        sizes="(max-width: 768px) 150px, (max-width: 1200px) 250px, 300px"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg"></div>
                    </div>
                    <p className="text-sm text-neutral-600 mt-3 leading-relaxed">{image.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="sr-only">Image Gallery</DialogTitle>
          </DialogHeader>
          {selectedImage && (
            <div className="relative">
              <ResponsiveImage
                src={selectedImage.url} 
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
                watermark="Avni PG Hostel"
                disableRightClick={true}
                disableDownload={true}
                rotation={selectedImage.rotation || 0}
                priority={true}
                sizes="(max-width: 768px) 90vw, 80vw"
              />
              <p className="text-center text-neutral-600 mt-4">{selectedImage.description}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
