import { Card, CardContent } from "@/components/ui/card";
import { Bed } from "lucide-react";
import { Button } from "@/components/ui/button";

const roomTypes = [
  {
    id: 1,
    name: "Single Seater Room",
    occupancy: "1 Person",
    description: "Spacious and private single-seater with attached bathroom and study area.",
    type: "Private Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 2,
    name: "Double Sharing Room",
    occupancy: "2 People",
    description: "Shared accommodation with individual beds, study tables, and personal storage space.",
    type: "Shared Room",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 3,
    name: "Triple Sharing Room",
    occupancy: "3 People",
    description: "Budget-friendly triple sharing with individual beds, lockers, and study facilities.",
    type: "Shared Room",
    image: "https://images.unsplash.com/photo-1631947430066-48c30d57b943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  }
];

export default function Rooms() {
  const handleInquire = () => {
    window.open('tel:+919795204621', '_self');
  };

  return (
    <section id="rooms" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Choose the Room That Suits You Best
          </h2>
          <p className="text-lg text-neutral-500">
            Comfortable accommodation options for every preference and budget
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {roomTypes.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-neutral-900">{room.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                    room.id === 1 ? 'bg-primary' : 
                    room.id === 2 ? 'bg-secondary' : 'bg-accent'
                  }`}>
                    {room.occupancy}
                  </span>
                </div>
                <p className="text-neutral-500 mb-4">{room.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-neutral-500">
                    <Bed className="w-4 h-4 mr-1" />
                    <span>{room.type}</span>
                  </div>
                  <Button 
                    onClick={handleInquire}
                    variant="ghost"
                    className="text-primary hover:text-blue-700 font-medium p-0"
                  >
                    Inquire Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
