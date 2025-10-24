import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>
      <Hero />
      <Footer />
    </main>
  );
}