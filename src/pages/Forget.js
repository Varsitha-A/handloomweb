import React, { useState } from 'react'; // Reuse same style
import { useNavigate } from 'react-router-dom';

function Forget() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    newPassword: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Password updated successfully!");
        navigate("/login");
      } else {
        alert(data.message || "Failed to reset password");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-form-box">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-title">🔑 Forgot Password</div>

          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your registered email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            className="form-input"
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" className="form-button">Reset Password</button>
        </form>
      </div>
    </div>
  );
}

export default Forget;