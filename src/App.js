// import {dash} from "../components";
import { Routes, Route } from "react-router-dom";
import { Home, BlogComponent, OneBlogComponent  } from ".";

 const StartPoint = () => {

  const data = {
        title: "PITSI KAGISHO",
        description: "MY FIRST EVER BLOG APP",
    }
  return (

    <>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home title ={data.title} />}/>
        <Route path="/blogs" element={<BlogComponent />}/>
        <Route path=":id" element={<OneBlogComponent />}/>
      </Routes>
    
    </>
  );

};

export default StartPoint;