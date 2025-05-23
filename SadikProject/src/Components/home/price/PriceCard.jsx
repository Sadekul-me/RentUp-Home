import React from "react";
import { price } from "../../data/Data";

const PriceCard = () => {
  return (
    <div className="content flex mtop">
      {price.map((item, index) => (
        <div className="box shadow" key={index}>
          {/* Top Button for Best Plan */}
          <div className="topbtn">
            <button className="btn3">{item.best}</button>
          </div>

          {/* Plan Title */}
          <h3>{item.plan}</h3>

          {/* Price Section */}
          <h1>
            <span>$</span>
            {item.price}
          </h1>

          {/* Description Text */}
          <p>{item.ptext}</p>

          {/* List of Features */}
          <ul>
            {item.list.map((val, i) => {
              const { icon, text, change } = val;
              return (
                <li key={i}>
                  <label
                    style={{
                      background: change === "color" ? "#dc35451f" : "#27ae601f",
                      color: change === "color" ? "#dc3848" : "#27ae60",
                    }}
                  >
                    {icon}
                  </label>
                  <p>{text}</p>
                </li>
              );
            })}
          </ul>

          {/* Start Plan Button */}
          <button
            className="btn5"
            style={{
              background: item.plan === "Standard" ? "#27ae60" : "#fff",
              color: item.plan === "Standard" ? "#fff" : "#27ae60",
            }}
          >
            Start {item.plan}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PriceCard;
