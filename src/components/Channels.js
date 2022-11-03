import React from "react";
const Channels = ({ active, setActive, profile, setProfile }) => {
  return (
    <div>
      <main className="profile">
        <section className={`columnBottom ${active ? "largeContainer" : ""}`}>
          <div className="profiList">
            <div className="profileDemo">
              <div className="chanel">
                <p>這個頻道未推薦任何其他影片</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Channels;
