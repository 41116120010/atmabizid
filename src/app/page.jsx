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

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          background-color: #0A0A0A;
        }
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
}
