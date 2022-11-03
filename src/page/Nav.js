import React from "react";
import { Link } from "react-router-dom";
const Nav = ({
  active,
  setActive,
  profile,
  setProfile,
  siderBar,
  setSiderbar,
}) => {
  const clickHandler = () => {
    setActive(!active);
    setSiderbar(!siderBar);
  };

  const profileHaandler = () => {
    setProfile(!profile);
  };
  const removeHandle = () => {
    setProfile("");
  };
  return (
    <div>
      <header>
        <nav className="flexDiv">
          <div className="navLeft flexDiv">
            <img
              src={require("../images/navBar/more.PNG")}
              alt=""
              className="menuIcon"
              onClick={clickHandler}
            />
            <Link to="/">
              <img
                src={require("../images/navBar/logo.PNG")}
                alt=""
                className="logo"
              />
            </Link>
          </div>
          <div className="navMiddle flexDiv">
            <div className="searchBox flexDiv">
              <input type="text" placeholder="搜尋" />
              <img src={require("../images/search.png")} alt="" />
            </div>
            <img
              src={require("../images/navBar/talk.PNG")}
              alt="micIcon "
              title="使用語音搜尋"
              className="micIcon"
            />
          </div>
          <div className="navRight flexDiv">
            <img
              className="rightIcon"
              src={require("../images/navBar/action.PNG")}
              alt=""
            />
            <img
              className="rightIcon"
              src={require("../images/navBar/noties.PNG")}
              alt=""
            />
            <div className="profileList">
              <img
                src={require("../images/Jack.png")}
                alt=""
                className="userIcon"
                onClick={profileHaandler}
              />
              <div className={`navList ${profile ? "proDisplay" : null}`}>
                <div>
                  <div className="canelIcon">
                    <img
                      alt=""
                      onClick={removeHandle}
                      src={require("../images/navBar/canel.png")}
                    />
                  </div>
                  <div className="proInfo">
                    <img src={require("../images/Jack.png")} alt="" />
                    <div className="proContent">
                      <p>mariohsieh</p>
                      <p className="account">管理你的帳戶</p>
                    </div>
                  </div>
                  <hr />
                  <div className="listContent">
                    <Link to="/personal">
                      <div>
                        <img src={require("../images/profile/1.PNG")} alt="" />
                        <p>你的頻道</p>
                      </div>
                    </Link>
                    <div>
                      <img src={require("../images/profile/2.PNG")} alt="" />
                      <p>Youtube工作室</p>
                    </div>
                    <div className="more">
                      <p>
                        <img src={require("../images/profile/3.PNG")} alt="" />
                        切換帳戶
                      </p>
                      <img src={require("../images/profile/15.PNG")} alt="" />
                    </div>
                    <div>
                      <img src={require("../images/profile/4.PNG")} alt="" />
                      <p>登出</p>
                    </div>
                  </div>
                  <hr />
                  <div className="listContent">
                    <div>
                      <img src={require("../images/profile/5.PNG")} alt="" />
                      <p>購買內容與會員資格</p>
                    </div>
                    <div>
                      <img src={require("../images/profile/6.PNG")} alt="" />
                      <p>你在YouTube中的資料</p>
                    </div>
                  </div>
                  <hr />
                  <div className="listContent">
                    <div className="more">
                      <p>
                        <img src={require("../images/profile/7.PNG")} alt="" />
                        外觀裝置
                      </p>
                      <img src={require("../images/profile/15.PNG")} alt="" />
                    </div>
                    <div className="more">
                      <p>
                        <img src={require("../images/profile/8.PNG")} alt="" />
                        語言:中文台灣
                      </p>
                      <img src={require("../images/profile/15.PNG")} alt="" />
                    </div>
                    <div className="more">
                      <p>
                        <img src={require("../images/profile/9.PNG")} alt="" />
                        嚴格篩選模式:停用
                      </p>
                      <img src={require("../images/profile/15.PNG")} alt="" />
                    </div>
                    <div className="more">
                      <p>
                        <img src={require("../images/profile/10.PNG")} alt="" />
                        位置:台灣
                      </p>
                      <img src={require("../images/profile/15.PNG")} alt="" />
                    </div>
                    <div>
                      <img src={require("../images/profile/11.png")} alt="" />
                      <p>鍵盤快速鍵</p>
                    </div>
                  </div>
                  <hr />
                  <div className="listContent">
                    <div>
                      <img src={require("../images/profile/12.PNG")} alt="" />
                      <p>設定</p>
                    </div>
                  </div>
                  <hr />
                  <div className="listContent">
                    <div>
                      <img src={require("../images/profile/13.PNG")} alt="" />
                      <p>說明</p>
                    </div>
                    <div>
                      <img src={require("../images/profile/14.PNG")} alt="" />
                      <p>提供意見</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
