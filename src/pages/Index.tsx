// src/pages/index.jsx
import PromoBar from "@/components/PromoBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PatternBand from "@/components/PatternBand";
import PerksCard from "@/components/PerksCard";
import AmenitiesBand from "@/components/AmenitiesBand";
import FloorPlansGrid from "@/components/FloorPlansGrid";
import NeighborhoodSection from "@/components/NeighborhoodSection";
import Footer from "@/components/Footer";
import galleryImage from "@/assets/gallery-interior-1.jpg";
import StickyBackground from "@/components/StickyBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <StickyBackground debug={true} />

      {/* Section 1: Dark overlay (hero) - keep above bg but NOT controlling sticky tint */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/70 pointer-events-none" />
        <div className="relative z-10">
          <PromoBar />
          <Header />
          <Hero />
        </div>
      </section>

      {/* Section 2: Perks — THIS controls sticky overlay (deep purple via token) */}
      <section
        className="relative pt-2"
        data-sticky-overlay-target
        data-sticky-overlay="hsl(var(--luxury-purple) / 0.58)"
      >
        <div className="absolute inset-0 bg-gradient-marble-20 pointer-events-none" />
        <div className="relative z-10 ">
          <PerksCard />
          {/* Interior Gallery Band */}
          <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
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
          </div>
        </div>
      </section>

      {/* Section 3: FloorPlansGrid — THIS controls sticky overlay (gold via token) */}
      <section
        className="relative z-20"
        data-sticky-overlay-target
        data-sticky-overlay="hsl(var(--luxury-gold) / 0.45)"
        data-sticky-show="true"    // <<-- ADD THIS
      >
        <div className="absolute inset-0 bg-black/70 pointer-events-none" />
        <div className="relative z-10">
          <FloorPlansGrid />
        </div>
      </section>
      <div className="relative z-30">
        <AmenitiesBand />
      </div>
      {/* Section: Neighborhood — THIS controls sticky overlay (marble/cream via token) */}
        <section
          className="relative z-20"
          data-sticky-overlay-target
          data-sticky-overlay="hsl(var(--luxury-marble) / 0.62)"
          data-sticky-show="true"    // <<-- ADD THIS
        >
        <div className="absolute inset-0 bg-white/60 pointer-events-none" />
        <div className="relative z-10">
          <NeighborhoodSection />
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Index;
