import logo from "./logo.svg";
import "./App.css";
import DemoLifecycle from "./components/DemoLifecycle";
import DemoForm from "./components/DemoForm";
import DemoForm2 from "./components/DemoForm2";
import DemoForm3 from "./components/DemoForm3";
import ContactForm from "./execution/ContactForm";
import Form from "./execution/Form";
import FormGender from "./execution/FormGender";
import Baitap1 from "./execution/Baitap1";
import FormValidate from "./execution/FormValidate";
import Baitap2 from "./execution/Baitap2";
import Baitap3 from "./execution/Baitap3";
import Baitap4 from "./execution/Baitap4";
import Baitap5 from "./execution/Baitap5";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      {/* <DemoLifecycle /> */}
      {/* <DemoForm /> */}
      {/* <DemoForm2 /> */}
      {/* <DemoForm3 /> */}
      {/* <ContactForm /> */}
      {/* <Form /> */}
      {/* <FormGender /> */}
      {/* <Baitap1 /> */}
      {/* <FormValidate /> */}
      {/* <Baitap2 /> */}
      {/* <Baitap3 /> */}
      {/* <Baitap4 /> */}
      <Baitap5 />
    </div>
  );
}

export default App;
