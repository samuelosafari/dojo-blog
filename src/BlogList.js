const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h3>{title}</h3>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2 className="blog-title">{blog.title}</h2>
          <p className="blog-author">Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
