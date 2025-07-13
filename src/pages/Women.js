import React, { useContext } from 'react'; 
import '../pages/Home.css';
import { CartContext } from '../CartContext';

import img9 from '../images/saree2.webp';
import img10 from '../images/kurti1.webp';
import img11 from '../images/banaras1.jpeg';
import img12 from '../images/shawl1.jpeg';
import img13 from '../images/silkdupatta1.jpg';
import img14 from '../images/top1.jpeg';
import img35 from '../images/wkurta1.jpg';
import img36 from '../images/wkurta2.jpg';
import img37 from '../images/wkurta3.jpg';
import img38 from '../images/wkurta4.jpg';
import img39 from '../images/wkurta5.jpg';
import img40 from '../images/wkurta6.jpg';
import img41 from '../images/wlehenga1.jpg';
import img42 from '../images/lehenga2.jpg';
import img43 from '../images/lehenga3.jpg';
import img44 from '../images/lehenga4.jpg';
import img45 from '../images/lehenga5.jpg';
import img46 from '../images/wcasuals1.jpg';
import img47 from '../images/wcasuals2.jpg';
import img48 from '../images/wcasuals3.jpg';
import img49 from '../images/saree4.jpg';
import img50 from '../images/saree5.jpg';
import img51 from '../images/saree6.jpg';
import img52 from '../images/saree7.jpg';

const productList = [
  { name: 'Cotton Saree', price: 999, image: img9 },
  { name: 'Kurti', price: 799, image: img10 },
  { name: 'Silk Saree', price: 1899, image: img11 },
  { name: 'Wool Shawl', price: 1299, image: img12 },
  { name: 'Dupatta', price: 499, image: img13 },
  { name: 'Handloom Top', price: 799, image: img14 },
  { name: 'Handloom Top', price: 699, image: img35 },
  { name: 'Handloom Top', price: 599, image: img36 },
  { name: 'Handloom Top', price: 399, image: img37 },
  { name: 'Handloom Top', price: 899, image: img38 },
  { name: 'Handloom Top', price: 799, image: img39 },
  { name: 'Handloom Top', price: 699, image: img40 },
  { name: 'Handloom Top', price: 759, image: img41 },
  { name: 'Handloom Top', price: 699, image: img42 },
  { name: 'Handloom Top', price: 399, image: img43 },
  { name: 'Handloom Top', price: 699, image: img44 },
  { name: 'Handloom Top', price: 299, image: img45 },
  { name: 'Handloom Top', price: 999, image: img46 },
  { name: 'Handloom Top', price: 699, image: img47 },
  { name: 'Handloom Top', price: 899, image: img48 },
  { name: 'Handloom Top', price: 699, image: img49 },
  { name: 'Handloom Top', price: 699, image: img50 },
  { name: 'Handloom Top', price: 459, image: img51 },
  { name: 'Handloom Top', price: 599, image: img52 },
];

const Women = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Women's Handloom Wear</h2>
      <div className="row g-4">
        {productList.map((product, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <img src={product.image} className="card-img-top section-img" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Rs. {product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;
