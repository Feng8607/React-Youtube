import React from "react";
import { Link } from "react-router-dom";

const PlayVideo = ({ siderBar, setSiderbar }) => {
  const sideBarHandler = () => {
    setSiderbar("");
  };
  return (
    <div>
      <div
        className={`hiderSideBar ${
          siderBar ? "background displaySidebar" : null
        }`}
      >
        <div className="hiderBox">
          <nav className="shortcutLinks">
            <div className="linkLogo">
              <img
                src={require("../images/navBar/more.PNG")}
                alt=""
                className="Icon"
                onClick={sideBarHandler}
              />
              <img
                src={require("../images/navBar/logo.PNG")}
                alt=""
                className="logo"
              />
            </div>
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
              <img
                src={require("../images/sideBar/YouTube music.PNG")}
                alt=""
              />
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
        <div className="background" onClick={sideBarHandler}></div>
      </div>
      <main className="playContainer">
        <section className="row">
          <div className="playVideo">
            <video autoPlay={"autoplay"} controls preload="auto" muted>
              <source src={require("../images/video.mp4")} type="video/mp4" />
            </video>
            <div className="tags">
              <p>#旅遊</p>
              <p>#戶外</p>
              <p>#海外</p>
            </div>
            <h3>帶你前往各景點，享受各地旅遊的樂趣</h3>
            <div className="playVideoinfo">
              <p>觀看次數:21萬次 . 2年前</p>
              <div>
                <p>
                  <img src={require("../images/like.png")} alt="" />
                  125
                </p>
                <p>
                  <img src={require("../images/dislike.png")} alt="" />
                  不喜歡
                </p>
                <p>
                  <img src={require("../images/video/share.PNG")} alt="" />
                  分享
                </p>
                <p>
                  <img src={require("../images/video/download.PNG")} alt="" />
                  下載
                </p>
                <p>
                  <img src={require("../images/video/cut.PNG")} alt="" />
                  剪輯片段
                </p>
                <p>
                  <img src={require("../images/video/storage.PNG")} alt="" />
                  儲存
                </p>
                <p>
                  <img src={require("../images/video/more.PNG")} alt="" />{" "}
                </p>
              </div>
            </div>
            <hr />
            <div className="plubLisher">
              <Link to="/personal">
                <img src={require("../images/Jack.png")} alt="" />
              </Link>
              <div>
                <p>謝昇峰</p>
                <span>500k訂閱</span>
              </div>
              <button type="button" className="button1">
                加入
              </button>
              <button type="button" className="button2">
                訂閱
              </button>
            </div>
            <div className="ytDescription">
              <p>了解各地風情</p>
              <p>訂閱並了解更多相關資訊</p>
            </div>
            <div className="comment">
              <hr />
              <h4>256則留言</h4>
            </div>
            <div className="addComment">
              <img src={require("../images/Jack.png")} alt="" />
              <input type="text" name="" id="" placeholder="發表留言" />
            </div>
            <div className="oldComment">
              <img
                className="CommentPic"
                src={require("../images/simon.png")}
                alt=""
              />
              <div>
                <h4>
                  Kevin hid <span>2天前</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Mollitia id ipsum quod sequi consequatur accusamus excepturi
                  provident pariatur ullam reiciendis deserunt repellat, illo
                  fugiat deleniti, quaerat fugit, animi sit! Illum!
                </p>
                <div className="likComment">
                  <img src={require("../images/like.png")} alt="" />
                  <span className="commentLike">44</span>
                  <img src={require("../images/dislike.png")} alt="" />
                  <span className="commentLike">22</span>
                  <span className="commentLike">回覆</span>
                </div>
              </div>
            </div>
            <div className="oldComment">
              <img
                className="CommentPic"
                src={require("../images/gerard.png")}
                alt=""
              />
              <div>
                <h4>
                  Jack Nelson <span>2天前</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Mollitia id ipsum quod sequi consequatur accusamus excepturi
                  provident pariatur ullam reiciendis deserunt repellat, illo
                  fugiat deleniti, quaerat fugit, animi sit! Illum!
                </p>
                <div className="likComment">
                  <img src={require("../images/like.png")} alt="" />
                  <span className="commentLike">44</span>
                  <img src={require("../images/dislike.png")} alt="" />
                  <span className="commentLike">22</span>
                  <span className="commentLike">回覆</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rightSiderbar">
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail1.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                  旅遊娛樂介紹，幫助大家在暢遊在各個景點
                </p>
                <p title="Jack Nicholson">Jack Nicholson</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail2.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                  旅遊娛樂介紹，幫助大家在暢遊在各個景點
                </p>
                <p title="megan">megan</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail3.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                  旅遊娛樂介紹，幫助大家在暢遊在各個景點
                </p>
                <p title="tom Hardy">tom Hardy</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail4.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                  旅遊娛樂介紹，幫助大家在暢遊在各個景點
                </p>
                <p title="Easy Tutorial">Easy Tutorial</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail5.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                  旅遊娛樂介紹，幫助大家在暢遊在各個景點
                </p>
                <p title="Jack Nelson">Jack Nelson</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail6.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                  旅遊娛樂介紹，幫助大家在暢遊在各個景點
                </p>
                <p title="tom Hardy">tom Hardy</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail7.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                  旅遊娛樂介紹，幫助大家在暢遊在各個景點
                </p>
                <p title="Cameron Tutorial">Cameron Tutorial</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail8.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                  旅遊娛樂介紹，幫助大家在暢遊在各個景點
                </p>
                <p title="Simon Ken">Simon Ken</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail5.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                  旅遊娛樂介紹，幫助大家在暢遊在各個景點
                </p>
                <p title="Easy Tutorial">Easy Tutorial</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail6.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                  旅遊娛樂介紹，幫助大家在暢遊在各個景點
                </p>
                <p title="Simon Diaz">Simon Diaz</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail7.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                  旅遊娛樂介紹，幫助大家在暢遊在各個景點
                </p>
                <p title="Easy Tutorial">Easy Tutorial</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail8.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p title="旅遊娛樂介紹，幫助大家在暢遊在各個景點">
                  旅遊娛樂介紹，幫助大家在暢遊在各個景點
                </p>
                <p title="Peter Wang">Peter Wang</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PlayVideo;
