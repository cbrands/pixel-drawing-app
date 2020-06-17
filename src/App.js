import React, { useState } from "react";
import "./styles.css";
import Canvas from "./components/Canvas";
import ColorPicker from "./components/ColorPicker";

export default function App() {
  const [color, setColor] = useState(0);
  return (
    <div className="App">
      <ColorPicker currentColor={color} setColor={color => setColor(color)} />
      <Canvas currentColor={color} />
    </div>
  );
}
