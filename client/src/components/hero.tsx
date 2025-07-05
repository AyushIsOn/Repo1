import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-primary to-blue-600 text-white">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Avni PG</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            A Comfortable Stay for Students & Working Professionals in Jhansi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('properties')}
              className="bg-secondary hover:bg-amber-500 text-white px-8 py-3 text-lg font-semibold"
            >
              Explore Properties
            </Button>
            <Button 
              asChild
              variant="outline"
              className="bg-white text-primary hover:bg-gray-100 border-white px-8 py-3 text-lg font-semibold"
            >
              <a href="tel:+919795204621">Book Your Stay</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
