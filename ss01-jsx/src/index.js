import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

// class Content extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Content</h1>
//       </div>
//     );
//   }
// }

// function Header() {
//   return (
//     <div>
//       <h1>Header</h1>
//     </div>
//   );
// }

//  render app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Header />
    <Content /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
