import ErrorBoundary from "../components/ErrorBoundary";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductSection from "../components/ProductSection";
import TechSection from "../components/TechSection";
import RoadmapSection from "../components/RoadmapSection";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <ErrorBoundary>
      <div className="bg-[#0A0A0A] min-h-screen">
        {/* Skip Navigation Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#C8956C] focus:text-[#0A0A0A] focus:rounded-lg focus:font-inter focus:font-semibold focus:text-sm"
        >
          Langsung ke konten utama
        </a>
        <Navbar />
        <main id="main-content">
          <HeroSection />
          <ProductSection />
          <TechSection />
          <RoadmapSection />
          <TeamSection />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
