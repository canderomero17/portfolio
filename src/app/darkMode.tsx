import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

export default function DarkMode({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={clsx(
        "p-2 w-full inline-flex justify-end items-center cursor-pointer",
        darkMode ? "text-white" : ""
      )}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <p>Light mode</p> : <p>Dark mode</p>}
      <FontAwesomeIcon icon={faMoon} height={30} width={30} />
    </div>
  );
}
