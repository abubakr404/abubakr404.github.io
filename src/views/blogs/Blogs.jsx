import Post from "../post/Post";

const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
      <h2 className="special-head" title="Blogs">
        Blogs
      </h2>
      <div className="container">
        <Post
          postImg="https://images.unsplash.com/photo-1595970115799-ff4d1d35031e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          postTitle="Deploy abubakr website"
          postDetails="this website to help customers and recruiters to contact with abubakr hisham and see his services and skills"
          postDate="25 sept 2022"
        />
        <Post
          postImg="https://images.unsplash.com/photo-1433048980017-63f162f662b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          postTitle="Task Runner"
          postDetails="Any desgister needs to use task runner in it projects if you don't use it yet, go and start learn it and used is very good option to use it's will saved time that weast in save files and commpress img and so on.."
          postDate="24 aug 2022"
        />
        <Post
          postImg="https://images.unsplash.com/photo-1526590847572-533c6ae9f542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          postTitle="Css preprocessor"
          postDetails="using css preprocessor is good way to syles your project it's faster, safety and mintable."
          postDate="20 aug 2022"
        />
        <Post
          postImg="https://images.unsplash.com/photo-1630547723707-c2a27b6a5fd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          postTitle="First post"
          postDetails="this is the first post in the site"
          postDate="17 jul 2022"
        />
      </div>
    </section>
  );
};

export default Blogs;
