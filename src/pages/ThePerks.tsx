import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Crown, Sparkles, Heart, Shield, Car, Users } from "lucide-react";

const perks = [
  {
    icon: Crown,
    title: "Concierge Services",
    description: "Personal assistance with daily tasks, travel planning, and lifestyle management.",
    features: ["24/7 front desk", "Package handling", "Travel coordination", "Event planning"]
  },
  {
    icon: Sparkles,
    title: "Luxury Amenities", 
    description: "Resort-style facilities and premium services at your fingertips.",
    features: ["Infinity pool & spa", "State-of-the-art fitness center", "Private dining room", "Rooftop terrace"]
  },
  {
    icon: Heart,
    title: "Wellness Programs",
    description: "Comprehensive health and wellness services tailored for active seniors.",
    features: ["On-site healthcare", "Fitness classes", "Nutrition counseling", "Mental wellness support"]
  },
  {
    icon: Shield,
    title: "Security & Safety",
    description: "Peace of mind with advanced security systems and emergency response.",
    features: ["24/7 security monitoring", "Emergency response system", "Secure entry", "Safety escorts"]
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Convenient transportation options for shopping, dining, and appointments.",
    features: ["Luxury shuttle service", "Valet parking", "Car detailing", "Airport transfers"]
  },
  {
    icon: Users,
    title: "Lifestyle Services",
    description: "Elevated living with personalized services and exclusive experiences.",
    features: ["Housekeeping service", "Personal shopping", "Social events", "Cultural outings"]
  }
];

const ThePerks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-marble">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-primary heading-luxury">
            The Perks
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the exclusive benefits and luxurious services that make GALA 
            the premier choice for sophisticated senior living.
          </p>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="card-luxury group hover:shadow-luxury transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <perk.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-serif font-bold mb-4 text-primary">
                  {perk.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {perk.description}
                </p>
                
                <ul className="space-y-2">
                  {perk.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button className="btn-luxury-purple mr-4">
              Schedule a Tour
            </Button>
            <Button className="btn-luxury-outline">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThePerks;