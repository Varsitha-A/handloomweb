import React from 'react';
import './About.css'; // You can rename this to About.css if needed

const About = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center section-title mb-4">About Us</h2>
      {/* <div className="container my-5" style={{ paddingTop: '0px' }}></div> */}
      
      <p className="text-center fs-5">
        Welcome to <strong>Handloom</strong>, your trusted online destination for authentic handloom wear. 
        Our platform is dedicated to showcasing the incredible craftsmanship of Indian artisans who preserve the ancient tradition of weaving by hand. 
      </p>

      <h3 className="mt-5 mb-3">🌿 Why Handloom?</h3>
      <ul className="fs-5">
        <li><strong>Eco-Friendly:</strong> Handloom uses minimal electricity and natural dyes, making it environmentally sustainable.</li>
        <li><strong>Unique Designs:</strong> Each product is handcrafted with distinct patterns that machines can't replicate.</li>
        <li><strong>Comfortable & Breathable:</strong> Natural fibers like cotton and silk make handloom clothes skin-friendly.</li>
        {/* <li><strong>Supports Rural Livelihood:</strong> Buying handloom directly benefits weavers and their families.</li> */}
        {/* <li><strong>Timeless Elegance:</strong> Handloom fabrics never go out of style — they carry a legacy of tradition and culture.</li> */}
      </ul>

      <h3 className="mt-5 mb-3">🎯 Why Choose Us?</h3>
      <ul className="fs-5">
        <li><strong>Curated Collections:</strong> We handpick high-quality sarees, kurtas, shirts, shawls, and more.</li>
        {/* <li><strong>Direct from Artisans:</strong> We work with weavers across India to ensure fair prices and authenticity.</li> */}
        {/* <li><strong>Secure Shopping:</strong> Easy and safe checkout process with reliable delivery.</li> */}
        {/* <li><strong>Customer Satisfaction:</strong> Our team is committed to providing excellent support and timely service.</li> */}
      </ul>

      <p className="mt-4 text-center fs-5">
        Join us in celebrating Indian tradition and sustainable fashion. <br />
        <strong>Every purchase you make supports a craftsperson and keeps a heritage alive.</strong>
      </p>
    </div>
  );
};

export default About;
