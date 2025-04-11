import "./App.css";
import MyButton from "./MyButton.jsx";
import Button from "./Button.jsx";
import NestingComponents from "./NestingComponents.jsx";
import icon from "./assets/react.svg";
import { useState } from "react";

const user = {
  name: "Quan",
  // imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageUrl: "/avatar.jpg",
  imageSize: 90,
};

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

function App() {
  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <h2>Nesting Components</h2>
        <NestingComponents />
      </div>

      <div>
        <img className="icon" src={icon} alt="Ảnh đã import" />
      </div>

      <div>
        <h2>{user.name}</h2>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={"Photo of " + user.name}
          style={{ width: user.imageSize, height: user.imageSize }}
        />
      </div>

      <div>
        <h2>Rendering lists </h2>
        <ul>{listItems}</ul>
      </div>

      <div>
        <h2>Responding to events</h2>
        <MyButton />
      </div>

      <div>
        <h2>Updating the screen</h2>
        <MyButton />
      </div>

      <div>
        <h2>Counters that update separately</h2>
        <Button count={count} onClick={() => setCount(count + 1)} />
        <Button count={count} onClick={() => setCount(count + 1)} />
      </div>
    </div>
  );
}

export default App;
