import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import amenitiesImage from "@/assets/amenities-clubhouse.jpg";

const AmenitiesBand = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${amenitiesImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-purple/80 to-luxury-purple/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 heading-luxury">
          World-Class Amenities
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
          From our elegant clubhouse to our resort-style pool, every amenity 
          is designed to enhance your sophisticated lifestyle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/gallery">
            <Button className="btn-luxury-gold text-lg px-8 py-3">
              Explore Amenities
            </Button>
          </Link>
          <Link to="/contact">
            <Button className="btn-luxury-outline bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
              Schedule Tour
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesBand;