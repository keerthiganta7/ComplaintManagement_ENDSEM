import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    description: ""
  });

  const [complaints, setComplaints] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setComplaints([
      ...complaints,
      { ...formData, id: Date.now() }
    ]);

    setFormData({
      name: "",
      email: "",
      category: "",
      description: ""
    });
  };

  return (
    <div className="container">
      <h1>Complaint Management System</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Complaint Category</option>
          <option value="Academic">Academic</option>
          <option value="Hostel">Hostel</option>
          <option value="Transport">Transport</option>
          <option value="Other">Other</option>
        </select>

        <textarea
          name="description"
          placeholder="Enter Your Complaint"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Complaint</button>
      </form>

      <h2>Submitted Complaints</h2>

      {complaints.length === 0 ? (
        <p>No complaints submitted yet.</p>
      ) : (
        complaints.map((complaint) => (
          <div className="record" key={complaint.id}>
            <h3>{complaint.name}</h3>
            <p>Email: {complaint.email}</p>
            <p>Category: {complaint.category}</p>
            <p>Complaint: {complaint.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
