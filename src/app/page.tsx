"use client";
import { useState } from "react";
import s from "./page.module.css";
import clsx from "clsx";
import Skills from "./skills";
import Contact from "./contact";
import MyInfo from "./myInfo";
import DarkMode from "./darkMode";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={clsx("p-4", s.font, darkMode ? "bg-gray-900" : "bg-white")}>
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      <MyInfo darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Skills darkMode={darkMode} />
    </div>
  );
}
