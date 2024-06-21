"use client";
import MainLayout from "@/views/layout/MainLayout";
import Hero from "@/views/hero/Hero";
import About from "@/views/about/About";
import Portfolio from "@/views/portfolio/Portfolio";
import Blogs from "@/views/blogs/Blogs";
import Contact from "@/views/contact/Contact";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Blogs />
        <Contact />
      </main>
    </MainLayout>
  );
};

export default Home;
