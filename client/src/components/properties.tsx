import { Card, CardContent } from "@/components/ui/card";
import { ProtectedImage } from "@/components/ui/protected-image";
import { Users, ArrowRight } from "lucide-react";

const properties = [
  {
    id: 1,
    name: "Avni Girls 1",
    description: "Premium accommodation for female students with modern amenities and 24/7 security.",
    capacity: "Female Only",
    image: "/images/2023-07-14_1751728409526.jpg"
  },
  {
    id: 2,
    name: "Avni Girls 2",
    description: "Spacious rooms with attached bathrooms and common areas for socializing and studying.",
    capacity: "Female Only",
    image: "/images/20250705_104903_1751728288595.jpg"
  },
  {
    id: 3,
    name: "Avni Boys",
    description: "Comfortable accommodation for male students with all necessary facilities and study environment.",
    capacity: "Male Only",
    image: "/images/20250705_113142_1751728478634.jpg"
  }
];

export default function Properties() {
  const scrollToGallery = (propertyId: number) => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
      
      // Small delay to ensure scroll completes, then scroll to specific property
      setTimeout(() => {
        const propertyGallery = document.getElementById(`gallery-property-${propertyId}`);
        if (propertyGallery) {
          propertyGallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  };

  return (
    <section id="properties" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Our Properties</h2>
          <p className="text-xl text-neutral-600 max-w-2xl">
            We have three properties located in the same colony, each offering the same amenities and comfort for your convenience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[3/4] overflow-hidden">
                <ProtectedImage
                  src={property.image} 
                  alt={`${property.name} Building`}
                  className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${
                    property.image.includes('20250705_104903_1751728288595.jpg') ? 'rotate-90' : ''
                  }`}
                  watermark="Avni PG"
                  disableRightClick={true}
                  disableDownload={true}
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">{property.name}</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">{property.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-neutral-500">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{property.capacity}</span>
                  </div>
                  <button 
                    className="text-neutral-900 hover:text-neutral-700 font-medium flex items-center"
                    onClick={() => scrollToGallery(property.id)}
                  >
                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
