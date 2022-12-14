import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebaseConfig";
import { faExpand, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blogs = ({ title, headTitle }) => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const getPosts = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(database, "posts"));
        querySnapshot.forEach((snapshot) => {
          list.push(snapshot.data());
        });
        setPosts(list);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, []);

  return (
    <section className="blogs" id={title}>
      <h2 className="text-center special-head" title={headTitle}>
        {headTitle}
      </h2>
      <div className="container g-col-lg-4">
        {posts === null ? (
          <div className="loader-1">
            <span className="loading-1">loging...</span>
          </div>
        ) : (
          posts.map((post) => (
            <div className="card" key={post.id}>
              <div className="blog-container">
                <button className="close">
                  <FontAwesomeIcon icon={faXmark} />
                </button>
                <img
                  className="card-img-top"
                  src={post.imageLink}
                  alt="deploy abubakr website-image"
                />
                <div className="card-body">
                  <h5 className="card-title" title={post.title}>
                    {post.title}
                  </h5>
                  <p className="card-text">{post.details}</p>
                  <p className="card-text" title="25 sept 2022">
                    <small>25 sept 2022</small>
                  </p>
                </div>
              </div>
              <button className="card-footer more">
                <a>Read More</a>
                <FontAwesomeIcon icon={faExpand} />
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Blogs;
