import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebaseConfig";
import { faExpand, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from "../../components/spinner/Spinner";

const Blogs = ({ title, headTitle }) => {
  const [posts, setPosts] = useState(null);
  const [zoomPos, setZoomPos] = useState({ postNum: 0, isZoomed: false });

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
          <Spinner />
        ) : (
          posts.map((post, i) => (
            <div
              key={post.id}
              className={
                zoomPos.isZoomed && zoomPos.postNum === i ? "post zoomed" : "post"
              }
            >
              <div className="blog-container">
                <button
                  className="close"
                  onClick={() =>
                    setZoomPos((prevData) => ({
                      postNum: i,
                      isZoomed: !prevData.isZoomed,
                    }))
                  }
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
                <img
                  className="post-img"
                  src={post.imageLink}
                  alt="deploy abubakr website-image"
                  onClick={() =>
                    setZoomPos((prevData) => ({
                      postNum: i,
                      isZoomed: !prevData.isZoomed,
                    }))
                  }
                />
                <div className="post-body">
                  <h5 className="one-line title" title={post.title}>
                    {post.title}
                  </h5>
                  <p className="one-line text">{post.details}</p>
                  <p className="one-line text" title="25 sept 2022">
                    <small>{new Date(+post.id).toLocaleString()}</small>
                  </p>
                </div>
              </div>
              <button
                className="more"
                onClick={() =>
                  setZoomPos((prevData) => ({
                    postNum: i,
                    isZoomed: !prevData.isZoomed,
                  }))
                }
              >
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
