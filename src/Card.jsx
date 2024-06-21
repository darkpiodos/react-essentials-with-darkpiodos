import React from "react";
import profile from "./assets/darkdeev.png";
import Button from "./Button";
import ButtonSample from "./assets/Button/ButtonSample";
import ButtonInline from "./ButtonInline";
const Card = () => {
  return (
    <div className="card">
      <img src={profile} alt="Profile Pix" className="img-profile" />
      <h2 className="card-title">Darwin Piodos</h2>
      <p className="card-text">
        Committed to delivering quality web solutions, I aim to contribute to a
        collaborative team in developing visually appealing and responsive
        websites.
      </p>
      <Button />
      <ButtonSample />
      <ButtonInline />
    </div>
  );
};

export default Card;
