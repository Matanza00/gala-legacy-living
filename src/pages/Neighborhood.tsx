import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NeighborhoodSection from "@/components/NeighborhoodSection";

const Neighborhood = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-marble">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-primary heading-luxury">
            Neighborhood
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the vibrant community and cultural richness that surrounds 
            your new home at GALA.
          </p>
        </div>
      </section>

      <NeighborhoodSection />

      <Footer />
    </div>
  );
};

export default Neighborhood;