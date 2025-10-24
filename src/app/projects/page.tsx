import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <section className="text-center mt-20">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Adriel 👋</h1>
        <p className="text-lg mb-8">
          A passionate Android & Web Developer building digital experiences.
        </p>
        <a
          href="/projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </section>
      <Footer />
    </main>
  );
}