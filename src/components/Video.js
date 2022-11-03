import React from "react";
const Video = ({ active, setActive, profile, setProfile }) => {
  return (
    <main className="profile">
      <section className={`columnBottom ${active ? "largeContainer" : ""}`}>
        <div className="profiList">
          <div className="profileDemo">
            <div className="videoTitle">
              <h4>上傳</h4>
              <h4>排列依序</h4>
            </div>
            <div className="videoCards">
              <div className="videoCard">
                <img alt="" src={require("../images/thumbnail1.png")} />
                <div>
                  <p>旅遊租車介紹</p>
                  <p className="annotation">觀看次數：200次.1年前</p>
                </div>
              </div>
              <div className="videoCard">
                <img alt="" src={require("../images/thumbnail2.png")} />
                <div>
                  <p>旅遊介紹</p>
                  <p className="annotation">觀看次數：200次.1年前</p>
                </div>
              </div>
              <div className="videoCard">
                <img alt="" src={require("../images/thumbnail3.png")} />
                <div>
                  <p>在地旅遊介紹</p>
                  <p className="annotation">觀看次數：200次.1年前</p>
                </div>
              </div>
              <div className="videoCard">
                <img alt="" src={require("../images/thumbnail4.png")} />
                <div>
                  <p>景點介紹</p>
                  <p className="annotation">觀看次數：200次.1年前</p>
                </div>
              </div>
              <div className="videoCard">
                <img alt="" src={require("../images/thumbnail5.png")} />
                <div>
                  <p>各式活動導覽</p>
                  <p className="annotation">觀看次數：200次.1年前</p>
                </div>
              </div>{" "}
              <div className="videoCard">
                <img alt="" src={require("../images/thumbnail6.png")} />
                <div>
                  <p>娛樂場所</p>
                  <p className="annotation">觀看次數：200次.1年前</p>
                </div>
              </div>
              <div className="videoCard">
                <img alt="" src={require("../images/thumbnail7.png")} />
                <div>
                  <p>國外的大眾交通</p>
                  <p className="annotation">觀看次數：200次.1年前</p>
                </div>
              </div>
              <div className="videoCard">
                <img alt="" src={require("../images/thumbnail8.png")} />
                <div>
                  <p>旅遊租車介紹</p>
                  <p className="annotation">觀看次數：200次.1年前</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Video;
