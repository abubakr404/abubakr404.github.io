import { Navbar } from "@/components/navbar/navbar";
import { Portfolio } from "@/components/sections/portfolio";
import { Footer } from "@/components/footer/footer";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
