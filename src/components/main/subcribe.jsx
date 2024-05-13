import React from "react";
import "../../styles/main/subcribe.css";
const Subcribe = () => {
  return (
    <div className="subcribe-container">
      <strong>NEWSLETTER</strong>
      <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
      <span>
        The dream collection is jewelry that emphasizes our individuality and
        exudes beauty and style.
      </span>
      <div className="subscribe-email">
        <input type="text" placeholder="Your email address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
export default Subcribe;
