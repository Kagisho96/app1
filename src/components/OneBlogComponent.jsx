import { useParams } from "react-router-dom"   
import { blogPosts } from "./BlogComponent";
import { FaCalendarAlt } from 'react-icons/fa';

export const OneBlogComponent = () => {
  const { id} = useParams()
  const blogPost = blogPosts.find((blog) => blog.id === parseInt(id))
  return (

<div className="gap-y-4 text-l border-grey-600 border border-gray-200pd-5 box-content pl-20 pr-20">
  <br />
  <h1 className="font-bold "> BLOG-POST {id}</h1>
  <br />
  <h3>{blogPost.title}</h3>
  <br />
  <img src={blogPost.image} alt={blogPost.title} />
  <br />
  <div style={{ display: "flex", alignItems: "center" }}>
    <FaCalendarAlt style={{ marginRight: "10px" }} />
    <p style={{ margin: 0 }}>{blogPost.date}</p>
  </div>
  <br />
  <p>{blogPost.description}</p>
</div>

  );

};
