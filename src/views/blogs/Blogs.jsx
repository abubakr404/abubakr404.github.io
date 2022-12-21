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
        setPosts(null);
        console.log(err);
      }
    };
    getPosts();
  }, []);

  return (
    <section className="blogs" id={title}>
      <h2 className="special-head" title={headTitle}>
        {headTitle}
      </h2>
      <div className="container">
        {posts === null ? (
          <div className="loader-1">
            <span className="loading-1">loging...</span>
          </div>
        ) : (
          posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="blog-container">
                <button className="close">
                  <FontAwesomeIcon icon={faXmark} />
                </button>
                <img
                  className="post-img"
                  src={post.imageLink}
                  alt="deploy abubakr website-image"
                />
                <div className="post-body">
                  <h5 className="one-line title" title={post.title}>
                    {post.title}
                  </h5>
                  <p className="one-line text">{post.details}</p>
                  <p className="one-line text" title="25 sept 2022">
                    <small>25 sept 2022</small>
                  </p>
                </div>
              </div>
              <button className="more">
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
