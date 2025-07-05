import { Card, CardContent } from "@/components/ui/card";
import { 
  UtensilsCrossed, 
  Bed, 
  Lock, 
  Droplets, 
  Flame, 
  ShowerHead, 
  LampDesk,
  Wind,
  Sofa,
  Fan,
  Snowflake,
  Thermometer,
  Battery,
  Wifi
} from "lucide-react";

const amenities = [
  {
    id: 1,
    name: "Food – 3 Times a Day",
    description: "Nutritious meals served daily",
    icon: UtensilsCrossed,
    color: "bg-primary"
  },
  {
    id: 2,
    name: "Separate Beds",
    description: "Individual comfortable beds",
    icon: Bed,
    color: "bg-secondary"
  },
  {
    id: 3,
    name: "Personal Locker",
    description: "Secure storage for belongings",
    icon: Lock,
    color: "bg-accent"
  },
  {
    id: 4,
    name: "RO + UV Filtered Water",
    description: "Clean drinking water",
    icon: Droplets,
    color: "bg-primary"
  },
  {
    id: 5,
    name: "Common Kitchen",
    description: "Cooking facilities available",
    icon: Flame,
    color: "bg-secondary"
  },
  {
    id: 6,
    name: "Attached Bathrooms",
    description: "Private bathroom facilities",
    icon: ShowerHead,
    color: "bg-accent"
  },
  {
    id: 7,
    name: "Study Tables & Chairs",
    description: "Dedicated study space",
    icon: LampDesk,
    color: "bg-primary"
  },
  {
    id: 8,
    name: "Air Coolers",
    description: "Cooling facilities",
    icon: Wind,
    color: "bg-secondary"
  },
  {
    id: 9,
    name: "Mattress",
    description: "Comfortable sleeping surface",
    icon: Sofa,
    color: "bg-accent"
  },
  {
    id: 10,
    name: "Cleaning Services",
    description: "Regular housekeeping",
    icon: Fan,
    color: "bg-primary"
  },
  {
    id: 11,
    name: "Fridge",
    description: "Refrigeration facilities",
    icon: Snowflake,
    color: "bg-secondary"
  },
  {
    id: 12,
    name: "Geyser",
    description: "Hot water availability",
    icon: Thermometer,
    color: "bg-accent"
  },
  {
    id: 13,
    name: "Battery Backup",
    description: "Inverter for power backup",
    icon: Battery,
    color: "bg-primary"
  },
  {
    id: 14,
    name: "Wi-Fi (On Demand)",
    description: "Internet connectivity",
    icon: Wifi,
    color: "bg-secondary"
  }
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            What You Get With Your Stay
          </h2>
          <p className="text-lg text-neutral-500">
            All essential amenities included for a comfortable living experience
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity) => {
            const IconComponent = amenity.icon;
            return (
              <Card key={amenity.id} className="text-center hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`${amenity.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{amenity.name}</h3>
                  <p className="text-sm text-neutral-500">{amenity.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
