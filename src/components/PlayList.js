import React from "react";
const PlayList = ({ active, setActive, profile, setProfile }) => {
  return (
    <main className="profile">
      <section className={`columnBottom ${active ? "largeContainer" : null}`}>
        <div className="profiList">
          <div className="profileDemo">
            <div className="playcolumn">
              <div className="allList">
                <p>所有播放清單</p>
              </div>
              <div className="playList">
                <div>
                  <p>已建立的播放清單</p>
                </div>
                <div className="finshList">
                  <div className="finshBox">
                    <img alt="" src={require("../images/playList/1.PNG")} />
                    <img alt="" src={require("../images/playList/2.PNG")} />
                    <div className="listContent">
                      <p>喜歡的影片</p>
                      <p className="fontActve">查看完整播放清單</p>
                    </div>
                  </div>
                  <div className="finshBox">
                    <img alt="" src={require("../images/playList/5.PNG")} />
                    <img alt="" src={require("../images/playList/6.PNG")} />
                    <div className="listContent">
                      <p>我的收藏</p>
                      <p className="fontActve">查看完整播放清單</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="storageList">
                <div>
                  <p>儲存的播放清單</p>
                </div>
                <div className="finshList">
                  <div className="finshBox">
                    <img alt="" src={require("../images/playList/3.PNG")} />
                    <img alt="" src={require("../images/playList/4.PNG")} />
                    <div className="listContent">
                      <p>山水旅遊</p>
                      <p className="fontActve">查看完整播放清單</p>
                    </div>
                  </div>
                  <div className="finshBox">
                    <img alt="" src={require("../images/playList/7.PNG")} />
                    <img alt="" src={require("../images/playList/8.PNG")} />
                    <div className="listContent">
                      <p>旅遊網站</p>
                      <p className="fontActve">查看完整播放清單</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PlayList;
