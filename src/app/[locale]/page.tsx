import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Portfolio } from "@/components/sections/portfolio";
import { Blogs } from "@/components/sections/blogs";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
