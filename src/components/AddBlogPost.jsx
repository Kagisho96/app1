import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { blogPosts } from "./BlogComponent";



export const AddBlogPost = () => {
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    body: []
  }) 

  const [blogPosts, setBlogPosts] = useState([]);

  const formatText = (text)=>{
    return text.split(",")
  }
const handlChange = (event) => {
  event.preventDefault();
  const { name, value } = event.target;
//   console.log(name, value);
  setPostData({
    ...postData,
      [name]: name==="body"? formatText(value): value
    })
}
// const postBlog = (event) => {
//   event.preventDefault();
//   console.log(postData);
// }

const postBlog = (event) => {
  event.preventDefault();
  setBlogPosts([...blogPosts, postData]);
  console.log(postData);
  console.log(blogPosts);
}

  return <>
    <Link to={`/blok`}></Link>
    <form className="max-w-2xl mx-auto mt-6 p-4 bg-white rounded-lg shadow-md" onChange={handlChange} onSubmit={postBlog}>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
      Blog title
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="title" name='title' placeholder='Title' />
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
      Blog description
    </label>
    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" name='description' placeholder='Description'></textarea>
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="body">
      Blog Body
    </label>
    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="body" name='body' placeholder='Blog post body, separated by commas'></textarea>
  </div>

  <div className="flex items-center justify-between">
    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Post Blog" />
  </div>
</form>
  </>
}
