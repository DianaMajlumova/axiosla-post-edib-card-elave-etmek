import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Layout/Navbar/Navbar';
import "./Product.scss";
function Product() {
  
    let { id } = useParams();
    const [post, setPost] = useState({});
  
    useEffect(() => {
      axios.get(`https://northwind.vercel.app/api/categories/${id}`).then((response) => {
        setPost(response.data);
      });
    }, []);
    return (
      <>
        <Navbar /> 
        <br />
        <div className="main_product_div">
          <div className="product_div">
            <div className="product_card">
              <div className="product_img">
                <h2>{post.id}</h2>
              </div>
              <p>{post.description}</p>
              <p>{post.name}</p>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Product
