import { useParams } from "react-router-dom"   
import { blogPosts } from "./BlogComponent";

export const OneBlogComponent = () => {
  const { id} = useParams()
  const blogPosts = blogPosts.find((blog) => blog.id === parseInt(id)) 
  return (
    <div>
      <h1>{id}</h1>
      <h3>{blogPosts.title}</h3>
      <img src={blogPosts.image} alt={blogPosts.title} />
      <p>{blogPosts.description}</p>
      <p>{blogPosts.date}</p>
    </div>
  );
};
