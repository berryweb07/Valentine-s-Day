import React, { useState } from "react";
import "./Card.css";

const Card = () => {
  const [accepted, setAccepted] = useState(false);
  // Numbers mein values rakhein (px text hatayein)
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    // Better random coordinates range
    const x = Math.floor(Math.random() * 200) - 100;
    const y = Math.floor(Math.random() * 200) - 100;
    setNoPosition({ x, y });
  };

  return (
    <div className="container">
      <div className="card">
        {!accepted ? (
          <>
            <h2 className="title">Will you be my Valentine? ❤️</h2>
            <div className="button">
              <button className="yesButton" onClick={() => setAccepted(true)}>
                Yes ❤️
              </button>
              <button
                className="noButton"
                onClick={(e) => e.preventDefault()}
                onMouseMove={moveNoButton}
                style={{
                  transform: `translate(${noPosition.x}px, ${noPosition.y}px)`
                }}
              >
                No 💔
              </button>
            </div>
          </>
        ) : (
          <h2>"Yesss! Finally! I knew you couldn't resist (aur waise bhi No ka option toh tha hi nahi!) 😉❤️"</h2>
        )}
      </div>
    </div>
  );
};

export default Card;