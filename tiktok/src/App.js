import { useEffect, useState } from "react";

const orders = [100, 200, 500];
const gifts = ["cpu i9", "cpu i7", "cpu i5"];

const course = [
  { id: 1, name: "html,css" },
  { id: 2, name: "js" },
  { id: 3, name: "react" },
];
const tabs = ["posts", "photos", "albums"];

function App() {
  // const [gift, setGift] = useState();
  // const handleUpdate = () => {
  //   setGift(gifts[Math.floor(Math.random() * gifts.length)]);
  // };
  // return (
  //   <div className="App">
  //     <h1>{gift || "Chua co phan thuong"}</h1>
  //     <button onClick={handleUpdate}>Increase</button>
  //   </div>
  // );
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const handleSubmit = () => {
  //   console.log({
  //     name,
  //     email,
  //   });
  // };

  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [show, setShow] = useState(false);

  console.log(type);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      {tabs.map((tab) => (
        <button
          style={
            type === tab
              ? { color: "#fff", backgroundColor: "#000" }
              : { color: "#000", backgroundColor: "#fff" }
          }
          key={tab}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <ul>
        {posts.map((posts) => (
          <li key={posts.id}>{posts.title}</li>
        ))}
      </ul>

      {show && (
        <button style={{ position: "fixed", bottom: "10px", right: "10px" }}>
          goto top
        </button>
      )}
    </div>
  );
}

export default App;
