import React, { useContext } from 'react'; 
// import '../pages/Home.css';
import './Men.css';
import { CartContext } from '../CartContext';
import img3 from '../images/Kurta.jpeg';
import img4 from '../images/shirt.jpeg';
import img5 from '../images/dhothi.jpeg';
import img6 from '../images/skurta.jpeg';
import img7 from '../images/casuals.jpeg';
import img8  from '../images/veshti.jpeg';
import img15 from '../images/kurta2.jpg';
import img16 from '../images/kurta3.jpg';
import img17 from '../images/kurta4.jpg';
import img19 from '../images/kurta6.jpg';
import img20 from '../images/kurta7.jpg';
import img21 from '../images/kurta8.jpg';
import img23 from '../images/shirt2.jpg';
import img24 from '../images/shirt3.jpg';
import img25 from '../images/shirt4.webp';
import img26 from '../images/shirt5.jpg';
import img27 from '../images/shirt6.jpg';
import img28 from '../images/traditional1.jpg';
import img29 from '../images/traditional2.jpg';
import img30 from '../images/traditional3.jpg';
import img31 from '../images/tshirt1.jpg';
import img32 from '../images/tshirt2.jpg';
import img33 from '../images/formals1.jpg';
import img34 from '../images/formals2.jpg';

const Men = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { name: "Kurta Set", price: 1399, image: img3 },
    { name: "Cotton Shirt", price: 899, image: img4 },
    { name: "Linen Dhoti", price: 1099, image: img5 },
    { name: "Silk Kurta", price: 1599, image: img6 },
    { name: "Casual Shirt", price: 999, image: img7 },
    { name: "Traditional Veshti", price: 799, image: img8 },
    { name: "Kurta 2", price: 1999, image: img15 },
    { name: "Kurta 3", price: 2999, image: img16 },
    { name: "Kurta 4", price: 1999, image: img17 },
    { name: "Kurta 6", price: 2999, image: img19 },
    { name: "Kurta 7", price: 2899, image: img20 },
    { name: "Kurta 8", price: 799, image: img21 },
    { name: "Shirt 2", price: 1999, image: img23 },
    { name: "Shirt 3", price: 1999, image: img24 },
    { name: "Shirt 4", price: 899, image: img25 },
    { name: "Shirt 5", price: 799, image: img26 },
    { name: "Shirt 6", price: 1999, image: img27 },
    { name: "Traditional 1", price: 2999, image: img28 },
    { name: "Traditional 2", price: 1999, image: img29 },
    { name: "Traditional 3", price: 1299, image: img30 },
    { name: "T-Shirt 1", price: 1999, image: img31 },
    { name: "T-Shirt 2", price: 909, image: img32 },
    { name: "Formals 1", price: 909, image: img33 },
    { name: "Formals 2", price: 909, image: img34 },
  ];

  return (
      <div className="page-container">

    <div className="container my-5">
      <h2 className="mb-4 text-center">Men's Handloom Wear</h2>
      <div className="row g-4">
        {products.map((product, index) => (
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
    </div>
  );
};

export default Men;