import logo from "./logo.svg";
import "./App.css";
import DemouseState from "./components/DemouseState";
import DemoUseEffect from "./components/DemoUseEffect";
import Th01 from "./thuchanh/Th01";
import Th02 from "./thuchanh/Th02";
import Th03 from "./thuchanh/Th03";
import Th04 from "./thuchanh/Th04";
import Th05 from "./thuchanh/Th05";
import Th06 from "./thuchanh/Th06";
import Th07 from "./thuchanh/Th07";
import Th08 from "./thuchanh/Th08";
import Bt01 from "./Baitap/Bt01";
import Bt02 from "./Baitap/Bt02";
import BtTodoList from "./Baitap/BtTodoList";
import TodoListLive from "./Baitap/TodoListLive";
import IndexColor from "./LiftingStateUp/IndexColor";
import ParentContext from "./DemoUseContext/ParentContext";
import DemoUseReducer from "./DemoUseContext/DemoUseReducer";
import DemoUseRef from "./DemoUseContext/DemoUseRef";

function App() {
  return (
    <div className="App">
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{ width: "150px" }}
      />
      {/* <DemouseState /> */}
      {/* <DemoUseEffect /> */}
      {/* <Th01 /> */}
      {/* <Th02 /> */}
      {/* <Th03 /> */}
      {/* <Th04 /> */}
      {/* <Th05 /> */}
      {/* <Th06 /> */}
      {/* <Th07 /> */}
      {/* <Th08 /> */}
      {/* <Bt01 /> */}
      {/* <Bt02 /> */}
      {/* <IndexColor /> */}
      {/* <BtTodoList /> */}
      {/* <TodoListLive /> */}
      {/* <ParentContext /> */}
      {/* <DemoUseReducer /> */}
      <DemoUseRef />
    </div>
  );
}

export default App;
