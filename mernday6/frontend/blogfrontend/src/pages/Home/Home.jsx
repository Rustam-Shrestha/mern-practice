import axios from "axios";
import Navbar from "../../../components/Navbar";
import "./Home.css"
import { useEffect, useState } from "react";

const Home = () => {
  // initialize with empty array as the coming data are in array form
const [blogs, setBlogs] = useState([]);


  // an asynchronous function that will wait for asios to fetch datausing get requese
 const fetchBlogs = async () => {
  try{

    // storing data in variable to access later
    const response = await axios.get("http://localhost:2000/allblogs")
    // update the blog with all the blog data fetched
    setBlogs(response.data.blogs);
  }catch(error){
    alert(error)
  }
}


useEffect(()=>{
  fetchBlogs()
},[])

// console.log(blogs+"blog are here")
  return (
    <>
      <Navbar />
          {blogs.map((blog)=>{
            return(
      <div className="card" key={blog._id}>
        <img src="image.jpg" alt="Image" className="card-image" />
        <div className="card-content">

            <h2 className="card-title">{blog.title}</h2>
            <p className="card-subtitle">{blog.subtitle}</p>
            <sub>{blog.createdAt}</sub>
           <a href="#" className="read-more">Read More</a>
        </div>
    </div>
            );
          })}
    </>
  );
}

export default Home;
