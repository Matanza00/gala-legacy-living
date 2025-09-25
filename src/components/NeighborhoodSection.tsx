// src/components/NeighborhoodSection.tsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Coffee, ShoppingBag, Utensils, Heart, Car } from "lucide-react";
import neighborhoodImage from "@/assets/neighborhood-scene.jpg";

const amenityIcons = {
  dining: Utensils,
  shopping: ShoppingBag,
  coffee: Coffee,
  healthcare: Heart,
  transportation: Car,
  location: MapPin
};

const neighborhoodFeatures = [
  { icon: "dining", title: "Fine Dining", description: "Upscale restaurants within walking distance" },
  { icon: "shopping", title: "Boutique Shopping", description: "Curated retail experiences nearby" },
  { icon: "coffee", title: "Artisan Cafés", description: "Local coffee culture and gathering spots" },
  { icon: "healthcare", title: "Healthcare Access", description: "Top medical facilities and specialists" },
  { icon: "transportation", title: "Easy Transit", description: "Convenient access to the city" },
  { icon: "location", title: "Prime Location", description: "Heart of the most desirable district" }
];

const NeighborhoodSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Features List */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary heading-luxury">
              The Perfect
              <br />
              Neighborhood
            </h2>
            <p className="text-luxury mb-12">
              Located in the heart of the city's most prestigious district, 
              GALA puts you steps away from the finest dining, shopping, 
              and cultural experiences the city has to offer.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {neighborhoodFeatures.map((feature, index) => {
                const IconComponent = amenityIcons[feature.icon as keyof typeof amenityIcons];
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <Link to="/neighborhood">
              <Button className="btn-luxury-purple">
                Explore Neighborhood
              </Button>
            </Link>
          </div>
          
          {/* Right: Images */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={neighborhoodImage} 
                alt="Neighborhood street view"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square bg-gradient-marble rounded-xl flex items-center justify-center">
                <Coffee className="w-8 h-8 text-luxury-purple" />
              </div>
              <div className="aspect-square bg-gradient-marble rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-luxury-purple" />
              </div>
              <div className="aspect-square bg-gradient-marble rounded-xl flex items-center justify-center">
                <Utensils className="w-8 h-8 text-luxury-purple" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodSection;