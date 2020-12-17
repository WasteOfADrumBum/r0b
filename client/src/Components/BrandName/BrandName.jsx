import React from "react";

const BrandName = () => {
  return (
    <div>
      <code style={{ color: "black", fontSize: "max(8vw, 3rem)", whiteSpace: "nowrap"}}>
        ←
        <b>
          <span
            style={{
              color: "rgb(97, 218, 251)",
              WebkitTextStrokeWidth: ".15rem",
              WebkitTextStrokeColor: "black",
            }}
          >
            R
          </span>
          -
          <span
            style={{
              color: "rgb(235, 84, 36)",
              WebkitTextStrokeWidth: ".15rem",
              WebkitTextStrokeColor: "black",
            }}
          >
            0
          </span>
          -
          <span
            style={{
              color: "rgb(121, 82, 179)",
              WebkitTextStrokeWidth: ".15rem",
              WebkitTextStrokeColor: "black",
            }}
          >
            B
          </span>
        </b>
        →
      </code>
    </div>
  );
};

export default BrandName;
