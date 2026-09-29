import ContactSection from "@/Components/Shared/ContactSection";
import CTASection from "@/Components/Shared/CTASection";
import FeaturesSection from "@/Components/Shared/FeatureSection";
import Footer from "@/Components/Shared/Footer";
import HeroSection from "@/Components/Shared/HeroSection";
import StatsSection from "@/Components/Shared/StatSection";
import Testimonials from "@/Components/Shared/Testimonials";
import WhyChooseUs from "@/Components/Shared/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
