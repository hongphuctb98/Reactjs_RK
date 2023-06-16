import logo from "./logo.svg";
import "./App.css";
import DemoLifecycle from "./components/DemoLifecycle";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <DemoLifecycle />
    </div>
  );
}

export default App;
