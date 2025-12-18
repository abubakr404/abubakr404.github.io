import { SpecialHeading } from "@/components/ui/special-heading";
import { PostCard } from "@/components/post-card/post-card";

export function Blogs() {
  const posts = [
    {
      postImg: "https://images.unsplash.com/photo-1595970115799-ff4d1d35031e?auto=format&fit=crop&w=800&q=80",
      postTitle: "Deploy abubakr website",
      postDetails: "this website to help customers and recruiters to contact with abubakr hisham and see his services and skills",
      postDate: "25 sept 2022",
    },
    {
      postImg: "https://images.unsplash.com/photo-1433048980017-63f162f662b0?auto=format&fit=crop&w=800&q=80",
      postTitle: "Task Runner",
      postDetails: "Any designer needs to use task runner in their projects. If you don't use it yet, start learning it. It saves a lot of time by automating repetitive tasks like minifying files and compressing images.",
      postDate: "24 aug 2022",
    },
    {
      postImg: "https://images.unsplash.com/photo-1526590847572-533c6ae9f542?auto=format&fit=crop&w=800&q=80",
      postTitle: "Css preprocessor",
      postDetails: "Using CSS preprocessors is a great way to style your project. It's faster, safer, and more maintainable.",
      postDate: "20 aug 2022",
    },
    {
      postImg: "https://images.unsplash.com/photo-1630547723707-c2a27b6a5fd1?auto=format&fit=crop&w=800&q=80",
      postTitle: "First post",
      postDetails: "This is the first post in the site.",
      postDate: "17 jul 2022",
    },
  ];

  return (
    <section id="blogs" className="py-20">
      <div className="container mx-auto px-4">
        <SpecialHeading>
          Blogs
        </SpecialHeading>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12">
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
