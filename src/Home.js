import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My New Website",
      body: " i have launched a powerful thing",
      author: "safari",
      id: 1,
    },
    {
      title: "Welcome Party",
      body: "I have an amazing liquor party tonight",
      author: "Alice",
      id: 2,
    },
    {
      title: "KLAB TechUpskill",
      body: "I have a new opportunity to learn REACT in KLAB",
      author: "dreamCoder",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "safari")}
        title="Safari's Blogs"
      />
    </div>
  );
};

export default Home;
