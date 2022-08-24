import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const baseUrl = "https://testimonialapi.toolcarton.com/api";

  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    await fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => setTestimonials(data));
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div className="App">
      <h3 className="testimonial-header">Testimonials</h3>
      <div className="container">
        {testimonials.map((testimonial, id) => (
          <div className="testimonials">
            <img
              alt={testimonial.name}
              className="image"
              height="150"
              src={testimonial.avatar}
            />
            <div key={testimonial.id} className="User-names">
              {testimonial.name}{" "}
            </div>
            <div className="message">{testimonial.message}</div>
            <audio className="audio" controls src={testimonial.audio} />
          </div>
        ))}
      </div>
    </div>
  );
}
