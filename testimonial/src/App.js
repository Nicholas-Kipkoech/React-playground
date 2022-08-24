import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "./App.css";

export default function App() {
  const baseUrl = "https://testimonialapi.toolcarton.com/api";

  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTestimonials = async () => {
    await fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => setTestimonials(data));
    setLoading(false);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h3 className="testimonial-header">Testimonials</h3>
        <div className="containers">
          {loading ? (
            <Spinner
              animation="border"
              className="spinner"
              role="status"
            ></Spinner>
          ) : (
            testimonials.map((testimonial, id) => (
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
            ))
          )}
        </div>
      </div>
    </div>
  );
}
