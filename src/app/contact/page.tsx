import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contacts";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}