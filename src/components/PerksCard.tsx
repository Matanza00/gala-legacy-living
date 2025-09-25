import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const PerksCard = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="card-luxury text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary heading-luxury">
          55+ Never Looked
          <br />
          So Good!
        </h2>
        
        <p className="text-luxury mb-8 max-w-lg mx-auto">
          Discover a community designed exclusively for discerning adults who 
          appreciate the finer things in life. Every detail has been crafted 
          to exceed your expectations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/the-perks">
            <Button className="btn-luxury-purple">
              Discover The Perks
            </Button>
          </Link>
          <Link to="/gallery">
            <Button className="btn-luxury-outline">
              View Gallery
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PerksCard;