import { useParams } from "react-router-dom"   
import { blogPosts } from "./BlogComponent";

export const OneBlogComponent = () => {
  const { id} = useParams()
  const blogPost = blogPosts.find((blog) => blog.id === parseInt(id))
  return (
    <div className="OneBlogComponent">
      <h1> BLOG-POST {id}</h1>
      <h3>{blogPost.title}</h3>
      <img src={blogPost.image} alt={blogPosts.title} />
      <p>{blogPost.description}</p>
      <p>{blogPost.date}</p>
    </div>
  );

};
