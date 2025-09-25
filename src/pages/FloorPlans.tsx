import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloorPlansGrid from "@/components/FloorPlansGrid";

const FloorPlans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-marble">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-primary heading-luxury">
            Floor Plans
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our collection of meticulously designed residences, 
            each crafted for the discerning lifestyle you deserve.
          </p>
        </div>
      </section>

      <FloorPlansGrid />

      <Footer />
    </div>
  );
};

export default FloorPlans;