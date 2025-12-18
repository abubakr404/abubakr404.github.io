import { Navbar } from "@/components/navbar/navbar";
import { Blogs } from "@/components/sections/blogs";
import { Footer } from "@/components/footer/footer";

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Blogs />
      </main>
      <Footer />
    </>
  );
}
