import HeroSection from "@/components/HeroSection";
import PlansSection from "@/components/PlansSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PlansSection />
      <AboutSection />
      <CtaSection />
      <FaqSection />
      <Footer />
    </main>
  );
};

export default Index;
