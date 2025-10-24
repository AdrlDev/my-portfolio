import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>
      <ProjectCard />
      <Footer />
    </main>
  );
}