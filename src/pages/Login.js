// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './Login.css';

// function Login() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = e => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:7100/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData)
//       });

//       const data = await res.json();
//       if (data.success) {
//         alert("Login successful");
//         navigate('/product');
//       } else {
//         alert(data.message || "Login failed");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Server error");
//     }
//   };
  

//   return (
//     <div className="page-container">
//       <div className="contact-section">
//         <div className="contact-form-box">
//           <form className="contact-form" onSubmit={handleSubmit}>
//             <div className="form-title">🔐 Login</div>

//             <input
//               className="form-input"
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//             <input
//               className="form-input"
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />

//             <button type="submit" className="form-button">Login</button>

//             <div className="switch-auth">
//               Don’t have an account? <Link to="/register">Sign Up</Link>
//             </div>

//             <div className="switch-auth">
//               <Link to="/Forget">Forgot Password?</Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login; 
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:7100/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        // ✅ Save user info to localStorage
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Login successful");
        navigate('/profile');
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert("Server error");
    }
  };

  return (
    <div className="page-container">
      <div className="contact-section">
        <div className="contact-form-box">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-title">🔐 Login</div>

            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit" className="form-button">Login</button>

            <div className="switch-auth">
              Don’t have an account? <Link to="/register">Sign Up</Link>
            </div>

            <div className="switch-auth">
              <Link to="/forget">Forgot Password?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
