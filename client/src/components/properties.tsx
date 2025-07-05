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
    <section id="properties" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Our Properties</h2>
          <p className="text-xl text-neutral-600 max-w-2xl">
            Three premium PG buildings in Shivaji Nagar, each designed for comfort and community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={property.image} 
                  alt={`${property.name} Building`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
                  <button className="text-neutral-900 hover:text-neutral-700 font-medium flex items-center">
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
