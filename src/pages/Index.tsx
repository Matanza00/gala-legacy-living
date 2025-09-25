import PromoBar from "@/components/PromoBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PatternBand from "@/components/PatternBand";
import PatternLayer from "@/components/PatternLayer";
import PerksCard from "@/components/PerksCard";
import AmenitiesBand from "@/components/AmenitiesBand";
import FloorPlansGrid from "@/components/FloorPlansGrid";
import NeighborhoodSection from "@/components/NeighborhoodSection";
import Footer from "@/components/Footer";
import galleryImage from "@/assets/gallery-interior-1.jpg";

const Index = () => {
  return (
    <>
      {/* Fixed Pattern Background Layer */}
      <PatternLayer fixed={true} opacity={0.8} tintColor="rgba(75,16,56,0.03)">
        <div className="min-h-screen">
          <PromoBar />
          <Header />
          <Hero />
          
          {/* Decorative Pattern Band with Perks Card */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="pattern-card rounded-2xl p-8 max-w-4xl mx-auto">
                <PerksCard />
              </div>
            </div>
          </section>
          
          {/* Interior Gallery Band */}
          <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${galleryImage})` }}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 heading-luxury">
                Elegant Interiors
              </h2>
              <p className="text-xl mb-6 max-w-2xl">
                Experience sophisticated living spaces designed for comfort and style
              </p>
            </div>
          </section>
          
          {/* Content sections over pattern */}
          <div className="pattern-card mx-4 mb-8 rounded-2xl overflow-hidden">
            <FloorPlansGrid />
          </div>
          
          <div className="pattern-card mx-4 mb-8 rounded-2xl overflow-hidden">
            <AmenitiesBand />
          </div>
          
          <div className="pattern-card mx-4 mb-8 rounded-2xl overflow-hidden">
            <NeighborhoodSection />
          </div>
          
          <Footer />
        </div>
      </PatternLayer>
    </>
  );
};

export default Index;
