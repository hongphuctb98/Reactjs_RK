import React, { Component } from "react";

import "./Thss02.css";

// class Thss02 extends Component {
//   render() {
//     return (
//       <div className="post-item">
//
//       </div>
//     );
//   }
// }

function Thss02({ image, title, description, published, callBack = () => {} }) {
  return (
    <div className="post-item">
      <img src={image} alt="" />
      <div>
        <label htmlFor="email">Email</label>
        <input type=" " id="email" />
        <h2 className="post-title">{title}</h2>
        <p className="post-desc">{description}</p>
        <p className="post-published">{published} </p>
      </div>
    </div>
  );
}

export default Thss02;
