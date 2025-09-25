import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Apply = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-primary heading-luxury">
            Apply Now
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Begin your journey to luxury senior living at GALA. Complete your application today.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apply;