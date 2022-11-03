import React, { useState } from "react";
import Nav from "./page/Nav";
import Home from "./page/Home";
import Profile from "./page/Profile";
import PlayVideo from "./page/PlayVideo";
import Video from "./components/Video";
import Playlist from "./components/PlayList";
import Channels from "./components/Channels";
import About from "./components/About";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import "./style/index.css";
const App = () => {
  const [active, setActive] = useState(false);
  const [profile, setProfile] = useState(false);
  const [siderBar, setSiderbar] = useState("");
  return (
    <div>
      <Nav
        active={active}
        setActive={setActive}
        profile={profile}
        setProfile={setProfile}
        siderBar={siderBar}
        setSiderbar={setSiderbar}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              active={active}
              setActive={setActive}
              profile={profile}
              setProfile={setProfile}
            />
          }
        />
        <Route
          path="/playvideo"
          element={
            <PlayVideo
              active={active}
              setActive={setActive}
              profile={profile}
              setProfile={setProfile}
              siderBar={siderBar}
              setSiderbar={setSiderbar}
            />
          }
        />
        <Route
          path="/personal"
          exact
          element={
            <Profile
              active={active}
              setActive={setActive}
              profile={profile}
              setProfile={setProfile}
            />
          }
        >
          <Route
            path="/personal"
            element={
              <Featured
                active={active}
                setActive={setActive}
                profile={profile}
                setProfile={setProfile}
              />
            }
          />
          <Route
            path="/personal/video"
            element={
              <Video
                active={active}
                setActive={setActive}
                profile={profile}
                setProfile={setProfile}
              />
            }
          />
          <Route
            path="/personal/playlist"
            element={
              <Playlist
                active={active}
                setActive={setActive}
                profile={profile}
                setProfile={setProfile}
              />
            }
          />
          <Route
            path="/personal/channels"
            element={
              <Channels
                active={active}
                setActive={setActive}
                profile={profile}
                setProfile={setProfile}
              />
            }
          />
          <Route
            path="/personal/about"
            element={
              <About
                active={active}
                setActive={setActive}
                profile={profile}
                setProfile={setProfile}
              />
            }
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
