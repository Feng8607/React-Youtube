import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LeftArrow from "..//images/profile/next.png";
import RightArrow from "..//images/profile/per.png";

const Featured = ({ active, setActive, profile, setProfile }) => {
  const data = [
    require("../images/thumbnail1.png"),
    require("../images/thumbnail2.png"),
    require("../images/thumbnail3.png"),
    require("../images/thumbnail4.png"),
    require("../images/thumbnail5.png"),
    require("../images/thumbnail6.png"),
    require("../images/thumbnail7.png"),
    require("../images/thumbnail8.png"),
  ];
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <main className="profileButtom">
      <section className={`columnBottom ${active ? "largeContainer" : null}`}>
        <div className="profiList">
          <div className="profileDemo">
            <Link to="/playVideo">
              <video autoPlay={"autoplay"} controls preload="auto" muted>
                <source src={require("../images/video.mp4")} type="video/mp4" />
              </video>
              <div>
                <img
                  alt=""
                  className="demoPic"
                  src={require("../images/Jack.png")}
                />
                <div className="demoContent">
                  <h3>帶你前往各景點，享受各地旅遊的樂趣</h3>
                  <p>觀看次數：200次 1 年前</p>
                  <p>旅遊介紹，更了解國外</p>
                  <p>各式活動</p>
                </div>
              </div>
            </Link>
          </div>
          <hr />
          <div className="profilePlay">
            <h3>上傳影片</h3>
            <div className="play">
              <p>全部播放</p>
              <img src={require("../images/video/allPlay.PNG")} alt="" />
            </div>
          </div>
          <div className="card__container">
            <Slider {...settings} className="card__container--inner">
              {data.map((img, id) => {
                return (
                  <div className="card" key={id}>
                    <img src={img} alt="hero_img" />
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="smallSwiper">
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail1.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p>
                  Best Channel to learn coding that help you to be a web
                  developer
                </p>
                <p>Easy Tutorial</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail2.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p>
                  Best Channel to learn coding that help you to be a web
                  developer
                </p>
                <p>Easy Tutorial</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail3.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p>
                  Best Channel to learn coding that help you to be a web
                  developer
                </p>
                <p>Easy Tutorial</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail4.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p>
                  Best Channel to learn coding that help you to be a web
                  developer
                </p>
                <p>Easy Tutorial</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail5.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p>
                  Best Channel to learn coding that help you to be a web
                  developer
                </p>
                <p>Easy Tutorial</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail6.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p>
                  Best Channel to learn coding that help you to be a web
                  developer
                </p>
                <p>Easy Tutorial</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail7.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p>
                  Best Channel to learn coding that help you to be a web
                  developer
                </p>
                <p>Easy Tutorial</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail8.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p>
                  Best Channel to learn coding that help you to be a web
                  developer
                </p>
                <p>Easy Tutorial</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail5.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p>
                  Best Channel to learn coding that help you to be a web
                  developer
                </p>
                <p>Easy Tutorial</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail6.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p>
                  Best Channel to learn coding that help you to be a web
                  developer
                </p>
                <p>Easy Tutorial</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail7.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p>
                  Best Channel to learn coding that help you to be a web
                  developer
                </p>
                <p>Easy Tutorial</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
            <div className="sideVidelist">
              <p className="smallThumbnail">
                <img src={require("../images/thumbnail8.png")} alt="" />
              </p>
              <div className="ytInfo">
                <p>
                  Best Channel to learn coding that help you to be a web
                  developer
                </p>
                <p>Easy Tutorial</p>
                <p>觀看次數:21萬次 . 2年前</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Featured;
