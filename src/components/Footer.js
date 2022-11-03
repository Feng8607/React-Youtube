import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <nav>
        <ul>
          <li>
            <div>
              <img alt="" src={require("../images/footer/home.png")} />
              首頁
            </div>
          </li>
          <li>
            <div>
              <img alt="" src={require("../images/footer/shorts.png")} />
              shorts
            </div>
          </li>
          <li>
            <img
              alt=""
              className="middleImg"
              src={require("../images/footer/establish.png")}
            />
          </li>
          <li>
            <div>
              <img alt="" src={require("../images/footer/media.PNG")} />
              訂閱內容
            </div>
          </li>
          <li>
            <div>
              <img alt="" src={require("../images/sideBar/shorts.PNG")} />
              媒體庫
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
