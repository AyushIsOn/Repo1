import Header from "@/components/header";
import Hero from "@/components/hero";
import Properties from "@/components/properties";
import Location from "@/components/location";
import Rooms from "@/components/rooms";
import Amenities from "@/components/amenities";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Properties />
      <Location />
      <Rooms />
      <Amenities />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
