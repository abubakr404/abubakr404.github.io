import { Navbar } from "@/components/navbar/navbar";
import { About } from "@/components/sections/about";
import { Footer } from "@/components/footer/footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <About />
      </main>
      <Footer />
    </>
  );
}
