import React from "react";
import ColorCard from "./components/ColorCard";

// Your code for the App

// The bellow code is given JUST AS EXAMPLE, to help you to build your HTML with the CSS style

export default function App() {
  return (
    <div className="app">
      <h1>Colors Chooser</h1>
      <div className="card-container">
        <ColorCard title="Background Color" />
        <ColorCard title="Text Color" />
        <ColorCard title="Stroke Color" />
      </div>
    </div>
  );
}
