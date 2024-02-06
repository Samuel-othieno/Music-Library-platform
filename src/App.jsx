import React from "react";
import { useState } from "react";
import { UnstyledButton, Tooltip, Title, rem } from "@mantine/core";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import {
  IconHome,
  IconPlaylist,
  IconHeadphones,
  IconMusic,
  IconVideo,
  IconSettings,
  IconAlbum,
  IconDownload,
  IconHeart,
  IconTelescope,
  IconCamera,
  IconPhotoVideo,
} from "@tabler/icons-react";
import { HomePage } from "./Components/Home Page/Home";
import Trending from "./Components/Trending/Trending";

const mainLinks = [
  { icon: IconHome, label: "Home" },
  { icon: IconTelescope, label: "Discover" },
  { icon: IconPlaylist, label: "PlayLists" },
  { icon: IconHeadphones, label: "Artists" },
  { icon: IconMusic, label: "Composers" },
  { icon: IconAlbum, label: "Albums" },
  { icon: IconAlbum, label: "Songs" },
  { icon: IconPhotoVideo, label: "Music Videos" },
  { icon: IconSettings, label: "Settings" },
  { icon: IconHeart, label: "Likes" },
  { icon: IconDownload, label: "Downloads" },
  
];
const subLinks = ["dashboard", "Singles", "Recently added", "New Releases"];

function App() {
  const [active, setActive] = useState("Releases");
  const [activeLink, setActiveLink] = useState("Settings");

  const mainLinkset = mainLinks.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 10 }}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className="w-[44px] h-[44px] justify-center rounded-md flex justify-items-center text-slate-100"
        data-active={link.label === active || undefined}
      >
        <link.icon style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const subLinksets = subLinks.map((link) => (
    <a
      className="flex flex-col leading-[2px] h-[5px] mr-12 p-8 text-gray-950 rounded-br-3xl rounded-tr-3xl text-sm font-medium hover:bg-gray-300 hover:text-gray-700"
      data-active={activeLink === link || undefined}
      href="#"
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));

  return (
    <MantineProvider>
      <div className="h-[100vh] flex flex-row">
        <nav
          id="navbar"
          className="bg-gradient-to-r from-cyan-950  hover:bg-gradient-to-l to-blue-500 h-5/6 w-[25%] flex flex-col"
        >
          <div id="wrapper" className="flex flex-1">
            <div
              id="aside"
              className="bg-gradient-to-r from-black to-blue-600 flex flex-[60px] flex-col items-center "
            >
              <div id="logo" className="w-[100%] flex justify-center h-[60px] pt-5 border-b-[2px] border-gray-400 mb-10">
                <h1 id="musiclogo" className="text-sm text-white font-bold">MUSIC LIBRARY</h1>
              </div>
              {mainLinkset}
            </div>
            <div id="main">
              <Title id="navtitle" className="text-xl mb-5 border-b-[1px] border-gray-100 h-[60px] pt-[18px] p-5 ">
                {active}
              </Title>
              {subLinksets}
            </div>
          </div>
        </nav>
        <main className="h-5/6 w-[50%] flex flex-col bg-blue-950">
          <HomePage/>
          
        </main>
        <footer className="w-[25%] bg-emerald-600 items-center h-5/6">
        <Trending/>
        </footer>
      </div>
    </MantineProvider>
  );
}

export default App;
