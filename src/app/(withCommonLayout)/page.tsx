import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/ui/HomePage/Specialist/Specialist";
import TopRatedDoctor from "@/components/ui/HomePage/TopRatedDoctor/TopRatedDoctor";
import WhyUs from "@/components/ui/HomePage/WhyUs/WhyUs";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctor />
      <WhyUs />
    </>
  );
};

export default HomePage;
