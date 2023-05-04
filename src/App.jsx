// import {dash} from "../components";
import { Routes, Route } from "react-router-dom";
import { Home, BlogComponent, OneBlogComponent, NavBar, Data} from "./components";
import { About } from "./components/About";


export const StartPoint = () => {

const data = {
        title: "PITSI KAGISHO",
        description: "MY FIRST EVER BLOG APP",
    }
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home title ={data.title} />}/>
        <Route path="/blogs" element={<BlogComponent />}/>
        <Route path=":id" element={<OneBlogComponent />}/>
        <Route path="/register" element={<Data />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    
    </>
  );

};

export default StartPoint;