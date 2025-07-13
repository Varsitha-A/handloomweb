import React from 'react'
import '../pages/Home.css'
import img1 from '../images/man.jpeg'
import img2 from '../images/women.jpeg'
const Product = () => {
  return (
    <div>
  <div class="container my-5 text-center">
    <h2 class="mb-4">Shop by Category</h2>
    <div class="row g-4">
      <div class="col-md-6">
        <div class="card section-box">

           <img src={img1} className="card-img-top section-img" alt="man"/>
          <div class="card-body">
            <h4 class="card-title">Men's Collection</h4>
            <a href="men.html" class="btn btn-primary">Shop Men's</a>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card section-box">
         <img src={img2} className="card-img-top section-img" alt="Women"/>
          <div class="card-body">
            <h4 class="card-title">Women's Collection</h4>
            <a href="women.html" class="btn btn-danger">Shop Women's</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Product