// import logo from "./logo.svg";
import "./App.css";
import Bt1 from "./baitap/Bt1";
import Bt2 from "./baitap/Bt2";
import Bt3 from "./baitap/Bt3";
import Bt4 from "./baitap/Bt4";
import Bt5 from "./baitap/Bt5";

import DemoJSX from "./components/DemoJSX";
import ParentComp from "./components/ParentComp";
import Thss01 from "./thuchanh/Thss01";
import Thss02 from "./thuchanh/Thss02";

// call toàn bộ nội dung của app
function App() {
  return (
    <div className="App">
      {/* gọi component để sử dụng */}
      {/* <DemoJSX /> */}
      <ParentComp />
      {/* <Bt1 /> */}
      {/* <Bt2 /> */}
      {/* <Bt3 /> */}
      {/* <Bt4 /> */}
      {/* <Bt5 /> */}
      {/* <Thss01 /> */}
      {/* <Thss02
        image="https://daotaotester.com/wp-content/uploads/2021/10/react-logo.jpg"
        title="React"
        description="ban co kien tuc ve ngon ngu react"
        published="one day"
        callBack={(ran) => {
          console.log(ran);
        }}
      /> */}
    </div>
  );
}

export default App;
