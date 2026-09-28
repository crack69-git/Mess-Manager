import FeaturesSection from "@/Components/Shared/FeatureSection";
import HeroSection from "@/Components/Shared/HeroSection";
import WhyChooseUs from "@/Components/Shared/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <WhyChooseUs />
    </div>
  );
}
