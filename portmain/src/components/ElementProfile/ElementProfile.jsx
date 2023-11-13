/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementProfile = ({ className, href }) => {
  return (
    <div className={`element-profile ${className}`}>
      <div className="port-menu-bar">
        <div className="overlap">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="rectangle" />
              <img className="profile-png" alt="Profile png" src="/img/profile-png-1.png" />
              <div className="div" />
              <img className="line" alt="Line" src="/img/line-2.svg" />
              <img className="img" alt="Line" src="/img/line-2.svg" />
              <img className="line-2" alt="Line" src="/img/line-3.svg" />
              <p className="text-wrapper">
                &nbsp;&nbsp;&nbsp;&nbsp;สวัสดีครับ ผม <br />
                <br />
                นายพงษ์นรินทร์ เอมสอาด ครับ
                <br />
                <br />
                ผมเป็นนักศึกษาจากคณะ <br />
                <br />
                วิทยาลัยเทคโนโลยีอุตสาหกรรม <br />
                <br />
                ในสาขาวิศวกรรมอิเล็กทรอนิกส์ <br />
                <br />
                แขนงคอมพิวเตอร์ครับ
              </p>
              <p className="front-end-back-end">
                สนใจในการทำงานด้าน การเขียนโปรแกรมหรือเขียนระบบ, <br />
                <br />
                Front end และ Back end ครับ และในตอนนี้กำลังหันมาฝึกด้าน
                <br />
                <br />
                การ Video editing, Animation และ Drawing ครับ <br />
                <br />
                เพราะผมชอบทั้งงานเขียน Code และการออกแบบครับ
              </p>
            </div>
          </div>
          <div className="rectangle-2" />
          <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-1.png" />
          <a className="text-wrapper-2" href={href} rel="noopener noreferrer" target="_blank">
            Interest
          </a>
          <div className="text-wrapper-3">Skills</div>
          <div className="text-wrapper-4">Education</div>
          <div className="group">
            <div className="overlap-2">
              <img className="polygon" alt="Polygon" src="/img/polygon-1.svg" />
              <img className="polygon-2" alt="Polygon" src="/img/polygon-2.png" />
            </div>
          </div>
          <div className="text-wrapper-5">Profile</div>
          <div className="rectangle-4" />
          <div className="text-wrapper-6">Portfolio</div>
          <div className="text-wrapper-7">I</div>
        </div>
      </div>
    </div>
  );
};

ElementProfile.propTypes = {
  href: PropTypes.string,
};
