import React from 'react'
import '../pages/Home.css'
const Contact = () => {
  return (
    <div><section class="container mt-5">
    <h2>Contact Us</h2>
    <form>
      <div class="mb-3">
        <label class="form-label">Your Name</label>
        <input type="text" class="form-control" required/>
      </div>
      <div class="mb-3">
        <label class="form-label">Your Email</label>
        <input type="email" class="form-control" required/>
      </div>
      <div class="mb-3">
        <label class="form-label">Your Message</label>
        <textarea class="form-control" rows="4" required></textarea>
      </div>
      <button class="btn btn-primary">Send Message</button>
    </form>
  </section></div>
  )
}

export default Contact