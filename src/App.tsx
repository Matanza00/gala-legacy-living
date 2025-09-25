import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ThePerks from "./pages/ThePerks";
import Gallery from "./pages/Gallery";
import FloorPlans from "./pages/FloorPlans";
import Neighborhood from "./pages/Neighborhood";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import ServiceRequest from "./pages/ServiceRequest";
import PayRent from "./pages/PayRent";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/the-perks" element={<ThePerks />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/floor-plans" element={<FloorPlans />} />
          <Route path="/neighborhood" element={<Neighborhood />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/service-request" element={<ServiceRequest />} />
          <Route path="/pay-rent" element={<PayRent />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
