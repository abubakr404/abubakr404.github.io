import { Navbar } from "@/components/navbar/navbar";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer/footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
