import Navbar from "../../../components/Navbar";
import "./Home.css"

const Home = () => {
 
  return (
    <>
      <Navbar />
      <div className="card">
        <img src="image.jpg" alt="Image" className="card-image" />
        <div className="card-content">
            <h2 className="card-title">Title</h2>
            <p className="card-subtitle">Subtitle</p>
           <a href="#" className="read-more">Read More</a>
        </div>
    </div>
    </>
  );
}

export default Home;
