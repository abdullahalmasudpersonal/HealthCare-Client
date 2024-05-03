import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/ui/HomePage/Specialist/Specialist";
import TopRatedDoctor from "@/components/ui/HomePage/TopRatedDoctor/TopRatedDoctor";
import { Button } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctor />
    </>
  );
};

export default HomePage;
