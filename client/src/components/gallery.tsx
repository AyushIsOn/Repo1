import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

const galleryData = [
  {
    id: 1,
    title: "Avni Girls 1 Rooms",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        alt: "Single room with study setup",
        description: "Single room with natural light and personal study setup"
      },
      {
        url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        alt: "Double sharing accommodation",
        description: "Double sharing with individual lockers and study space"
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        alt: "Modern bathroom facilities",
        description: "Attached bathroom with modern fixtures and geyser"
      },
      {
        url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        alt: "Common study area",
        description: "Common area with comfortable seating and study tables"
      }
    ]
  },
  {
    id: 2,
    title: "Avni Girls 2 Rooms",
    images: [
      {
        url: "https://images.unsplash.com/photo-1631947430066-48c30d57b943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        alt: "Triple sharing room layout",
        description: "Triple sharing with organized layout and storage"
      },
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        alt: "Common kitchen facilities",
        description: "Common kitchen with modern appliances and storage"
      },
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        alt: "Single room with cooling",
        description: "Single room with air cooler and dedicated study area"
      },
      {
        url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        alt: "Balcony relaxation area",
        description: "Balcony area for relaxation and fresh air"
      }
    ]
  },
  {
    id: 3,
    title: "Avni Boys Rooms",
    images: [
      {
        url: "/attached_assets/20250705_103605_1751716360876.jpg",
        alt: "Spacious boys room with study area",
        description: "Well-lit room with study desk, wardrobe, and comfortable living space"
      },
      {
        url: "/attached_assets/20250705_103901_1751716360877.jpg",
        alt: "Boys room with bed and storage",
        description: "Individual bed setup with personal storage and study chair"
      },
      {
        url: "/attached_assets/20250705_103916_1751716360877.jpg",
        alt: "Multi-bed boys accommodation",
        description: "Multiple bed arrangement with personal wardrobes and study areas"
      },
      {
        url: "/attached_assets/20250705_104258_1751716360877.jpg",
        alt: "Boys room with shared facilities",
        description: "Shared accommodation with individual beds and personal storage space"
      },
      {
        url: "/attached_assets/20250705_104552_1751716360877.jpg",
        alt: "Outdoor recreation area",
        description: "Outdoor space with recreational facilities and green surroundings"
      },
      {
        url: "/attached_assets/20250705_104754_1751716360877.jpg",
        alt: "Modern boys room with amenities",
        description: "Well-furnished room with modern amenities and comfortable living setup"
      }
    ]
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{url: string, alt: string, description: string} | null>(null);

  const openLightbox = (image: {url: string, alt: string, description: string}) => {
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
            <div key={section.id}>
              <h3 className="text-3xl font-bold text-neutral-900 mb-8">{section.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {section.images.map((image, index) => (
                  <div key={index} className="relative group cursor-pointer">
                    <div 
                      className="aspect-square overflow-hidden rounded-lg"
                      onClick={() => openLightbox(image)}
                    >
                      <img 
                        src={image.url} 
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
              <img 
                src={selectedImage.url} 
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <p className="text-center text-neutral-600 mt-4">{selectedImage.description}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
