import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = ({ active, setActive, profile, setProfile }) => {
  return (
    <div>
      <div className={`sideBar ${active ? "smallSidebar" : null}`}>
        <nav className="shortcutLinks">
          <Link to="/">
            <li>
              <img src={require("../images/home.png")} alt="" />
              <p>首頁</p>
            </li>
          </Link>
          <li>
            <img src={require("../images/sideBar/explore.PNG")} alt="" />
            <p>探索</p>
          </li>
          <li>
            <img src={require("../images/sideBar/shorts.PNG")} alt="" />
            <p>shorts</p>
          </li>
          <li>
            <img src={require("../images/sideBar/description.PNG")} alt="" />
            <p>訂閱內容</p>
          </li>
          <hr />
          <li>
            <img src={require("../images/sideBar/media.PNG")} alt="" />
            <p>媒體庫</p>
          </li>
          <li>
            <img src={require("../images/sideBar/history.PNG")} alt="" />
            <p>觀看紀錄</p>
          </li>
          <li>
            <img src={require("../images/sideBar/media.PNG")} alt="" />
            <p>你的影片</p>
          </li>
          <li>
            <img src={require("../images/sideBar/watchLate.PNG")} alt="" />
            <p>稍後觀看</p>
          </li>
          <li>
            <img src={require("../images/sideBar/collect.PNG")} alt="" />
            <p>我的收藏</p>
          </li>
          <li>
            <img src={require("../images/sideBar/likeMovie.PNG")} alt="" />
            <p>喜歡的影片</p>
          </li>
          <li>
            <img src={require("../images/show-more.png")} alt="" />
            <p>顯示更多</p>
          </li>
          <hr />
        </nav>
        <nav className="subscribedList">
          <h3>訂閱內容</h3>
          <li>
            <img src={require("../images/Jack.png")} alt="" />
            <p>Jack Nicholson</p>
          </li>
          <li>
            <img src={require("../images/simon.png")} alt="" />
            <p>Simon Baker</p>
          </li>
          <li>
            <img src={require("../images/tom.png")} alt="" />
            <p>Tom Hardy</p>
          </li>
          <li>
            <img src={require("../images/megan.png")} alt="" />
            <p>Megan Ryan</p>
          </li>
          <li>
            <img src={require("../images/cameron.png")} alt="" />
            <p>cameron Diaz</p>
          </li>
          <hr />
        </nav>
        <nav className="subscribedList">
          <h3>探索</h3>
          <li>
            <img src={require("../images/sideBar/movie.PNG")} alt="" />
            <p>電影</p>
          </li>
          <li>
            <img src={require("../images/sideBar/live.PNG")} alt="" />
            <p>直播</p>
          </li>
          <li>
            <img src={require("../images/sideBar/game.PNG")} alt="" />
            <p>遊戲</p>
          </li>
          <li>
            <img src={require("../images/sideBar/phy.PNG")} alt="" />
            <p>體育</p>
          </li>
          <hr />
        </nav>
        <nav className="subscribedList">
          <h3>更多YOUTUBE功能</h3>
          <li>
            <img
              src={require("../images/sideBar/YouTube Preminu.PNG")}
              alt=""
            />
            <p>YouTube Preminu</p>
          </li>
          <li>
            <img src={require("../images/sideBar/YouTube work.PNG")} alt="" />
            <p>創作者工作室</p>
          </li>
          <li>
            <img src={require("../images/sideBar/YouTube music.PNG")} alt="" />
            <p>YouTube music</p>
          </li>
          <li>
            <img src={require("../images/sideBar/YouTube TV.PNG")} alt="" />
            <p>YouTube Kids</p>
          </li>
          <li>
            <img src={require("../images/sideBar/YouTube TV.PNG")} alt="" />
            <p>YouTube TV</p>
          </li>
          <hr />
        </nav>
        <nav className="subscribedList">
          <li>
            <img src={require("../images/sideBar/setting.PNG")} alt="" />
            <p>設定</p>
          </li>
          <li>
            <img src={require("../images/sideBar/report.PNG")} alt="" />
            <p>檢舉紀錄</p>
          </li>
          <li>
            <img src={require("../images/sideBar/illustrate.PNG")} alt="" />
            <p>說明</p>
          </li>
          <li>
            <img src={require("../images/sideBar/Opinion.PNG")} alt="" />
            <p>提供意見</p>
          </li>
        </nav>
      </div>
      <main className="profile">
        <section className={`column ${active ? "largeContainer" : null}`}>
          <div className="profiList">
            <div className="profileTop">
              <img src={require("../images/Jack.png")} alt="" />
              <div>
                <p>marioHsieh</p>
                <p>6位訂閱者</p>
              </div>
              <button type="button" className="button1">
                自訂頻道
              </button>
              <button type="button" className="button2">
                管理影片
              </button>
            </div>
            <div className="profileInfo">
              <Link to="/personal/">
                <p className="playlistActive">首頁</p>
              </Link>
              <Link to="/personal/video">
                <p>影片</p>
              </Link>
              <Link to="/personal/playlist">
                <p>播放清單</p>
              </Link>
              <Link to="/personal/channels">
                <p>頻道</p>
              </Link>
              <Link to="/personal/about">
                <p>簡介</p>
              </Link>
              <img alt="" src={require("../images/search.png")} />
            </div>
          </div>
        </section>
      </main>
      <Outlet />
    </div>
  );
};

export default Profile;
