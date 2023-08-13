import { Routes, Route } from "react-router-dom";
import { Home, BlogComponent, OneBlogComponent, NavBar, Data, About, Footer, AddBlogPost} from "./components";
import "tailwindcss/tailwind.css";
import healthcare from '/healthcare.jpg';


export const StartPoint = () => {

const data = {
        title: "PITSI KAGISHO",
        description: "MY FIRST EVER BLOG APP",
    }
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home title ={data.title} description={data.description}/>}/>
        <Route path="/blogs" element={<BlogComponent />}/>
        <Route path="blogs/:id" element={<OneBlogComponent />}/>
        <Route path="/register" element={<Data />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/addBlog" element={<AddBlogPost/>} />
      </Routes>
      <Footer />  
    </>
  );

};

export default StartPoint;