import React from "react";
const About = ({ active, setActive, profile, setProfile }) => {
  return (
    <div>
      <main className="profile">
        <section className={`columnBottom ${active ? "largeContainer" : null}`}>
          <div className="profiList">
            <div className="profileDemo">
              <div className="aboutList">
                <div className="aboutLeft">
                  <h4>詳細資料</h4>
                  <h4>
                    業務諮詢: <button>查詢電子郵件地址</button>
                  </h4>
                  <h4 className="local">
                    位置:<p>台灣</p>
                  </h4>
                </div>
                <div className="aboutRight">
                  <p>統計資料</p>
                  <p>加入日期:2012年5月20</p>
                  <p>觀看次數:86724</p>
                </div>
              </div>
              <div className="smallaboutList">
                <h4>更多資訊</h4>
                <p>
                  <img alt="" src={require("../images/about/country.png")} />
                  台灣
                </p>
                <p>
                  <img alt="" src={require("../images/about/add.png")} />
                  加入時間:2012年5月20日
                </p>
                <p>
                  <img alt="" src={require("../images/about/look.png")} />
                  觀看次數:2586次
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
