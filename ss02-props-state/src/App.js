import logo from "./logo.svg";
import "./App.css";
import ParentComp from "./components/ParentComp";
import Event from "./components/Event";
import ThBai2 from "./Baitap/ThBai2";
import ThBai3 from "./Baitap/ThBai3";
import ThBai4 from "./Baitap/ThBai4";
import ThBai5 from "./Baitap/ThBai5";
import ThBai6 from "./Baitap/ThBai6";
import ThBai7 from "./Baitap/ThBai7";
import Clock from "./clock/Clock";
import BtBai2 from "./Baitap/BtBai2";
import BtBai3 from "./Baitap/BtBai3";
import BtBai4 from "./Baitap/BtBai4";
import BtBai5 from "./Baitap/BtBai5";
import BtBai6 from "./Baitap/BtBai6";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      {/* <ParentComp /> */}
      {/* <Event /> */}

      {/* <ThBai2
        text="click me"
        color="red"
        background="blue
      "
      /> */}
      {/* <ThBai3 /> */}

      {/* <ThBai4 /> */}
      {/* <ThBai5 /> */}

      {/* <ThBai6 /> */}
      {/* <ThBai7 /> */}
      {/* <Clock /> */}
      {/* <BtBai2 /> */}
      {/* <BtBai3 /> */}
      <BtBai4 />
      {/* <BtBai5 /> */}
      {/* <BtBai6 /> */}
    </div>
  );
}

export default App;
