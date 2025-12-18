import { faExpand, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Post = ({ postImg, postTitle, postDetails, postDate }) => {
  const [isZoomed, setIsZoom] = useState(false);

  return (
    <div className={isZoomed ? "post zoomed" : "post"}>
      <div className="blog-container">
        <button className="close" onClick={() => setIsZoom((prevData) => !prevData)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <img
          className="post-img"
          src={postImg}
          alt=""
          loading="lazy"
          onClick={() => setIsZoom((prevData) => !prevData)}
        />
        <div className="post-body">
          <h5 className="one-line title" title={postTitle}>
            {postTitle}
          </h5>
          <p className="one-line text">{postDetails}</p>
          <p className="one-line text" title={new Date(postDate).toLocaleString()}>
            <small>{new Date(postDate).toLocaleString()}</small>
          </p>
        </div>
      </div>
      <button className="more" onClick={() => setIsZoom((prevData) => !prevData)}>
        <a>Read More</a>
        <FontAwesomeIcon icon={faExpand} />
      </button>
    </div>
  );
};
export default Post;
