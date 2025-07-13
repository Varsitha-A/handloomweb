// import React, { useEffect, useState } from "react";
// import './Profile.css';

// function Profile() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   if (!user) {
//     return (
//       <div className="profile-container">
//         <h2>Please login to view your profile.</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="profile-container">
//       <div className="profile-card">
//         <h2 className="profile-title">👤 Your Profile</h2>
//         <div className="profile-detail"><strong>Name:</strong> {user.name || "N/A"}</div>
//         <div className="profile-detail"><strong>Email:</strong> {user.email}</div>
//         <div className="profile-detail"><strong>Phone:</strong> {user.phone || "N/A"}</div>
//         <div className="profile-detail"><strong>City:</strong> {user.address || "N/A"}</div>
//         <div className="profile-detail"><strong>State:</strong> {user.gender || "N/A"}</div>
//         {/* <div className="profile-detail"><strong>Gender:</strong> {user.gender || "N/A"}</div> */}
//       </div>
//     </div>
//   );
// }

// export default Profile;
// src/pages/Profile.js
import React, { useEffect, useState } from "react";
import './Profile.css';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="profile-container">
        <h2>Please login to view your profile.</h2>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-title">👤 Your Profile</h2>
        <div className="profile-detail"><strong>Name:</strong> {user.name || "N/A"}</div>
        <div className="profile-detail"><strong>Email:</strong> {user.email}</div>
        <div className="profile-detail"><strong>Phone:</strong> {user.phone || "N/A"}</div>
        {/* <div className="profile-detail"><strong>City:</strong> {user.address || "N/A"}</div>
        <div className="profile-detail"><strong>State:</strong> {user.gender || "N/A"}</div> */}
      </div>
    </div>
  );
}

export default Profile;
