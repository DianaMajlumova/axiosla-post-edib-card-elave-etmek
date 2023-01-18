import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../Layout/Navbar/Navbar";
import { Link } from "react-router-dom";

function Home() {
  const [post, setPost] =useState([]);

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/categories").then((response) => {
      setPost(response.data);
    });
  }, []);

return (
  <>
    <Navbar/>
    <section>
      {post.map((element) => {
        return (
          <div key={element.id} className="cardBox">
            <h2>{element.id}</h2>
            <p>{element.description}</p>
            <p>{element.name}</p>
            <Link to={`product/${element.id}`}><button>Learn more</button></Link>
          </div>
        );
      })}
    </section>
  </>
);
    }
export default Home;
