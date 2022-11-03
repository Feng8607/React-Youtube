import React from "react";
import { Link } from "react-router-dom";
const Home = ({ active, setActive, profile, setProfile }) => {
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
      <main>
        <div className={`container ${active ? "largeContainer" : null}`}>
          <hr className="topHr" />
          <div className="banner">
            <ul>
              <li>全部</li>
              <li>合輯</li>
              <li>音樂</li>
              <li>直播中</li>
              <li>遊戲</li>
              <li>視覺藝術</li>
              <li>寵物</li>
              <li>動作冒險遊戲</li>
              <li>最新上傳</li>
              <li>已觀看</li>
              <li>讓你耳目一新的影片</li>
            </ul>
          </div>
          <hr className="buttomHr" />
          <div className="listContainer">
            <Link className="yuList" to="/playVideo">
              <img
                src={require("../images/thumbnail2.png")}
                alt=""
                className="thumbnail1"
              />

              <div className="cardContent">
                <img src={require("../images/Jack.png")} alt="" />
                <div className="ytInfo">
                  <h4 title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                    旅遊娛樂介紹，幫助大家在暢遊在各個景點
                  </h4>
                  <p title="Jack Nicholson">Jack Nicholson</p>
                  <p>觀看次數:21萬次 . 2年前</p>
                </div>
              </div>
            </Link>
            <Link className="yuList" to="/playVideo">
              <img
                src={require("../images/thumbnail1.png")}
                alt=""
                className="thumbnail1"
              />

              <div className="cardContent">
                <img src={require("../images/cameron.png")} alt="" />
                <div className="ytInfo">
                  <h4 title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                    旅遊娛樂介紹，幫助大家在暢遊在各個景點
                  </h4>
                  <p title="cameron Diaz">cameron Diaz</p>
                  <p>觀看次數:21萬次 . 2年前</p>
                </div>
              </div>
            </Link>
            <Link className="yuList" to="/playVideo">
              <img
                src={require("../images/thumbnail3.png")}
                alt=""
                className="thumbnail1"
              />

              <div className="cardContent">
                <img src={require("../images/megan.png")} alt="" />
                <div className="ytInfo">
                  <h4 title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                    旅遊娛樂介紹，幫助大家在暢遊在各個景點
                  </h4>
                  <p title="megan">megan</p>
                  <p>觀看次數:21萬次 . 2年前</p>
                </div>
              </div>
            </Link>
            <Link className="yuList" to="/playVideo">
              <img
                src={require("../images/thumbnail4.png")}
                alt=""
                className="thumbnail1"
              />

              <div className="cardContent">
                <img src={require("../images/tom.png")} alt="" />
                <div className="ytInfo">
                  <h4 title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                    旅遊娛樂介紹，幫助大家在暢遊在各個景點
                  </h4>
                  <p title="tom Hardy">tom Hardy</p>
                  <p>觀看次數:21萬次 . 2年前</p>
                </div>
              </div>
            </Link>
            <Link className="yuList" to="/playVideo">
              <img
                src={require("../images/thumbnail5.png")}
                alt=""
                className="thumbnail1"
              />

              <div className="cardContent">
                <img src={require("../images/Jack.png")} alt="" />
                <div className="ytInfo">
                  <h4 title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                    旅遊娛樂介紹，幫助大家在暢遊在各個景點
                  </h4>
                  <p title="Jack Nelson">Jack Nelson</p>
                  <p>觀看次數:21萬次 . 2年前</p>
                </div>
              </div>
            </Link>
            <Link className="yuList" to="/playVideo">
              <img
                src={require("../images/thumbnail6.png")}
                alt=""
                className="thumbnail1"
              />

              <div className="cardContent">
                <img src={require("../images/gerard.png")} alt="" />
                <div className="ytInfo">
                  <h4 title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                    旅遊娛樂介紹，幫助大家在暢遊在各個景點
                  </h4>
                  <p title="gerard">gerard</p>
                  <p>觀看次數:21萬次 . 2年前</p>
                </div>
              </div>
            </Link>
            <Link className="yuList" to="/playVideo">
              <img
                src={require("../images/thumbnail7.png")}
                alt=""
                className="thumbnail1"
              />

              <div className="cardContent">
                <img src={require("../images/cameron.png")} alt="" />
                <div className="ytInfo">
                  <h4 title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                    旅遊娛樂介紹，幫助大家在暢遊在各個景點
                  </h4>
                  <p title="Cameron Tutorial">Cameron Tutorial</p>
                  <p>觀看次數:21萬次 . 2年前</p>
                </div>
              </div>
            </Link>
            <Link className="yuList" to="/playVideo">
              <img
                src={require("../images/thumbnail8.png")}
                alt=""
                className="thumbnail1"
              />

              <div className="cardContent">
                <img src={require("../images/simon.png")} alt="" />
                <div className="ytInfo">
                  <h4 title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                    旅遊娛樂介紹，幫助大家在暢遊在各個景點
                  </h4>
                  <p title="Simon Ken">Simon Ken</p>
                  <p>觀看次數:21萬次 . 2年前</p>
                </div>
              </div>
            </Link>
            <Link className="yuList" to="/playVideo">
              <img
                src={require("../images/thumbnail3.png")}
                alt=""
                className="thumbnail1"
              />

              <div className="cardContent">
                <img src={require("../images/gerard.png")} alt="" />
                <div className="ytInfo">
                  <h4 title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                    旅遊娛樂介紹，幫助大家在暢遊在各個景點
                  </h4>
                  <p title="Simon Diaz">Simon Diaz</p>
                  <p>觀看次數:21萬次 . 2年前</p>
                </div>
              </div>
            </Link>
            <Link className="yuList" to="/playVideo">
              <img
                src={require("../images/thumbnail5.png")}
                alt=""
                className="thumbnail1"
              />

              <div className="cardContent">
                <img src={require("../images/cameron.png")} alt="" />
                <div className="ytInfo">
                  <h4 title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                    旅遊娛樂介紹，幫助大家在暢遊在各個景點
                  </h4>
                  <p title="Peter Wang">Peter Wang</p>
                  <p>觀看次數:21萬次 . 2年前</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
