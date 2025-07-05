import { Card, CardContent } from "@/components/ui/card";
import { Users, ArrowRight } from "lucide-react";

const properties = [
  {
    id: 1,
    name: "Avni Girls 1",
    description: "Premium accommodation for female students with modern amenities and 24/7 security.",
    capacity: "Female Only",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 2,
    name: "Avni Girls 2",
    description: "Spacious rooms with attached bathrooms and common areas for socializing and studying.",
    capacity: "Female Only",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 3,
    name: "Avni Boys",
    description: "Comfortable accommodation for male students with all necessary facilities and study environment.",
    capacity: "Male Only",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  }
];

export default function Properties() {
  return (
    <section id="properties" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Our Properties</h2>
          <p className="text-lg text-neutral-500">
            Explore Our Three Premium PG Buildings Located in Shivaji Nagar, Jhansi
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={property.image} 
                  alt={`${property.name} Building`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{property.name}</h3>
                <p className="text-neutral-500 mb-4">{property.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-neutral-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{property.capacity}</span>
                  </div>
                  <button className="text-primary hover:text-blue-700 font-medium flex items-center">
                    View Details <ArrowRight className="w-4 h-4 ml-1" />
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
