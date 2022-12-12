const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
      <h2 className="text-center special-head" title="blogs">
        blogs
      </h2>
      <div className="container g-col-lg-4">
        <div className="card">
          <div className="blog-container">
            <button className="close">
              <i className="fa fa-xmark" aria-hidden="true"></i>
            </button>
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1595970115799-ff4d1d35031e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=580&amp;q=80"
              alt="deploy abubakr website-image"
            />
            <div className="card-body">
              <h5 className="card-title" title="deploy abubakr website">
                deploy abubakr website
              </h5>
              <p className="card-text">
                this website to help customers and recruiters to contact with abubakr
                hisham and see his services and skills
              </p>
              <p className="card-text" title="25 sept 2022">
                <small>25 sept 2022</small>
              </p>
            </div>
          </div>
          <button className="card-footer more">
            <a>Read More</a>
            <i className="fa fa-expand"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
