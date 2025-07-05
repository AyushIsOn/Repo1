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
  Wifi,
  Camera
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
    id: 15,
    name: "AC (On Demand)",
    description: "Air conditioning available",
    icon: Snowflake,
    color: "bg-accent"
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
    description: "Every alternative day",
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
  },
  {
    id: 16,
    name: "CCTV Cameras",
    description: "24/7 security monitoring",
    icon: Camera,
    color: "bg-accent"
  }
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Everything You Need
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl">
            All essential amenities included for a comfortable and convenient living experience. 
            You would only need a pillow and a bedsheet - rest all are provided.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity) => {
            const IconComponent = amenity.icon;
            return (
              <Card key={amenity.id} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-neutral-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-neutral-900" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{amenity.name}</h3>
                  <p className="text-sm text-neutral-600">{amenity.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
