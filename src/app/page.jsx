import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductSection from "../components/ProductSection";
import TechSection from "../components/TechSection";
import RoadmapSection from "../components/RoadmapSection";
import TeamSection from "../components/TeamSection";
import DashboardSection from "../components/DashboardSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <TechSection />
      <RoadmapSection />
      <TeamSection />
      <DashboardSection />
      <Footer />
    </div>
  );
}
