import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bed, Bath, Square } from "lucide-react";
import floorPlanA1 from "@/assets/floor-plan-a1.jpg";
import floorPlanA2 from "@/assets/floor-plan-a2.jpg";
import floorPlanB1 from "@/assets/floor-plan-b1.jpg";

const floorPlans = [
  {
    id: "a1",
    title: "The A1",
    beds: 1,
    baths: 1,
    sqft: 850,
    price: "$3,200",
    availability: "Available Now",
    image: floorPlanA1,
    description: "Sophisticated one-bedroom with elegant finishes"
  },
  {
    id: "a2", 
    title: "The A2",
    beds: 1,
    baths: 1,
    sqft: 950,
    price: "$3,500",
    availability: "Available Soon",
    image: floorPlanA2,
    description: "One-bedroom with den and premium upgrades"
  },
  {
    id: "b1",
    title: "The B1", 
    beds: 2,
    baths: 2,
    sqft: 1200,
    price: "$4,200",
    availability: "Available Now",
    image: floorPlanB1,
    description: "Spacious two-bedroom with luxury amenities"
  }
];

const FloorPlansGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary heading-luxury">
            Floor Plans
          </h2>
          <p className="text-luxury max-w-2xl mx-auto">
            Choose from our collection of thoughtfully designed residences, 
            each featuring premium finishes and sophisticated layouts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {floorPlans.map((plan) => (
            <div key={plan.id} className="card-luxury group hover:shadow-luxury transition-all duration-300">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={plan.image} 
                  alt={`${plan.title} floor plan`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {plan.availability}
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-bold mb-2 text-primary">
                {plan.title}
              </h3>
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              
              <div className="flex justify-between items-center mb-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Bed className="w-4 h-4" />
                  <span>{plan.beds} Bed</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Bath className="w-4 h-4" />
                  <span>{plan.baths} Bath</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Square className="w-4 h-4" />
                  <span>{plan.sqft} sq ft</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold text-primary">{plan.price}</span>
                <span className="text-sm text-muted-foreground">per month</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="btn-luxury-purple flex-1">
                  Lease Now
                </Button>
                <Link to={`/floor-plans/${plan.id}`} className="flex-1">
                  <Button className="btn-luxury-outline w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/floor-plans">
            <Button className="btn-luxury-outline">
              View All Floor Plans
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FloorPlansGrid;