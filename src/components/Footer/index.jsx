"use client";
import React, { useEffect, useState } from "react";
import DesktopFooter from "./DesktopFooter";
import TabletFooter from "./TabletFooter";
import MobileFooter from "./MobileComponets";

export default function Index() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {windowWidth > 1024 && <DesktopFooter />}
      {windowWidth <= 1024 && windowWidth > 640 && <TabletFooter />}
      {windowWidth <= 640 && <MobileFooter />}
    </div>
  );
}

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Solutions",
    link: "/solutions",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Resources",
    link: "/blogs",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
const links2 = [
  {
    name: "LEGAL",
    link: "/",
  },
  {
    name: "TERMS & CONDITIONS",
    link: "/",
  },
  {
    name: "PRIVACY POLICY",
    link: "/",
  },
  {
    name: "INVESTOR PRIVACY NOTICE",
    link: "/",
  },
  {
    name: "COOKIES POLICY",
    link: "/",
  },
];
const socials = [
  {
    icon: <FacebookIcon />,
    link: "/#",
  },
  {
    icon: <LinkedinIcon />,
    link: "/#",
  },
  {
    icon: <TwitterIcon />,
    link: "//#",
  },
  {
    icon: <InstagramIcon />,
    link: "/#",
  },
];
