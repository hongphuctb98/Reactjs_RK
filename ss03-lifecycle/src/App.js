import logo from "./logo.svg";
import "./App.css";
import DemoLifecycle from "./components/DemoLifecycle";
import DemoForm from "./components/DemoForm";
import DemoForm2 from "./components/DemoForm2";
import DemoForm3 from "./components/DemoForm3";
import ContactForm from "./execution/ContactForm";
import Form from "./execution/Form";
import FormGender from "./execution/FormGender";

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
      <FormGender />
    </div>
  );
}

export default App;
