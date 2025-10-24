import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Stats from "@/components/Stats";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-900">
          {/* Navbar */}
          <header className="absolute inset-x-0 top-0 z-50">
            <Navbar />
          </header>
    
          {/* About Section */}
          <About />

          {/* Stats Section */}
          <Stats />
    
          {/* Footer */}
          <Footer />
    </main>
  );
}