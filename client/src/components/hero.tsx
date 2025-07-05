import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-8 leading-tight">
            Find your perfect
            <br />
            <span className="text-neutral-600">home away from home.</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-12 max-w-2xl">
            Premium PG accommodation in Shivaji Nagar, Jhansi. Comfortable rooms, 
            modern amenities, and a community that feels like family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('properties')}
              className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 text-lg font-medium rounded-full"
            >
              Explore Properties
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-neutral-300 text-neutral-900 hover:bg-neutral-100 px-8 py-4 text-lg font-medium rounded-full"
            >
              <a href="tel:+919795204621">Book Your Stay</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
