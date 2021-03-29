import "./App.css";
import { useState } from "react";

const users = [
  {
    name: "Holly",
    image: "👩🏽‍🔬",
    title: "Scientist",
  },
  {
    name: "Janet",
    image: "👩🏻‍🎤",
    title: "Pilot",
  },
  {
    name: "Henry",
    image: "🦹🏻‍♂️",
    title: "Hairdresser",
  },
  {
    name: "Nick",
    image: "🤖",
    title: "Doctor",
  },
];

function App() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  function getUser() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUser(users[Math.floor(Math.random() * users.length)]);
    }, 3000);
  }

  return (
    <div className="App">
      <div className="user">
        {loading ? (
          <p>Looking for the best user for you.. just a second!</p>
        ) : (
          <>
            <h1>{user.name}</h1>
            <h2>{user.image}</h2>
            <p>{user.title}</p>
          </>
        )}
      </div>
      <button onClick={getUser}>Get new user</button>
    </div>
  );
}

export default App;
