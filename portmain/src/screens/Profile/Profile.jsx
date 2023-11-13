import React from "react";
import { Button } from "../../components/Button";
import { ElementProfile } from "../../components/ElementProfile";
import "./style.css";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="overlap-wrapper">
        <div className="overlap-3">
          <div className="frame">
            <ElementProfile className="element-st-profile" href="https://www.youtube.com/watch?v=i-ul86Sk1vc" />
          </div>
          <Button className="button-instance" />
          <img className="icon-pencil" alt="Icon pencil" src="/img/icon-pencil.png" />
          <img className="icon-code" alt="Icon code" src="/img/icon-code.png" />
        </div>
      </div>
    </div>
  );
};
