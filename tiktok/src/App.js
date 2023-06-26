import { useEffect, useState } from "react";
import NoteMain from "./component/NoteMain";

const orders = [100, 200, 500];
const gifts = ["cpu i9", "cpu i7", "cpu i5"];

const course = [
  { id: 1, name: "html,css" },
  { id: 2, name: "js" },
  { id: 3, name: "react" },
];

function App() {
  const [countdown, setCountdown] = useState(180);

  useEffect(() => {
    const timeId = setInterval(() => {
      setCountdown((prevState) => prevState - 1);
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);
  return (
    <div>
      <NoteMain />
      <NoteMain></NoteMain>
    </div>
  );
}

export default App;
