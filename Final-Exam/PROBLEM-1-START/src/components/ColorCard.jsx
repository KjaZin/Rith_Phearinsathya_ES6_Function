import React, { useState } from "react";

const colors = [
  "#5DADE2",
  "#E67E22",
  "#F5B041",
  "#8E44AD",
  "#2ECC71",
];


// Your code for the ColorCard
export default function ColorCard({ title }) {
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };
  return (
    <div className="card" style={{ backgroundColor: colors[colorIndex] }} onClick={handleClick}>
      <h3>{title}</h3>
      <p>{colors[colorIndex]}</p>
    </div>
  );
}

