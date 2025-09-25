import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-luxury-living.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-[0.15em] leading-tight">
          LUXURY
          <br />
          SENIOR LIVING
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
          Experience the finest in 55+ community living with elegant residences, 
          world-class amenities, and sophisticated lifestyle services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/floor-plans">
            <Button className="btn-luxury-gold text-lg px-10 py-4">
              Explore Floor Plans
            </Button>
          </Link>
          <Link to="/contact">
            <Button className="btn-luxury-outline bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-4">
              Schedule Tour
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;