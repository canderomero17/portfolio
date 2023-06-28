import clsx from "clsx";
import html from "../../public/techs/html.png";
import css from "../../public/techs/css.png";
import javascript from "../../public/techs/javascript.png";
import typescript from "../../public/techs/typescript.png";
import react from "../../public/techs/react.png";
import nextjs from "../../public/techs/nextJS.png";
import github from "../../public/techs/github.png";
import tailwind from "../../public/techs/tailwind.png";
import Image from "next/image";

export default function Skills({ darkMode }: { darkMode: boolean }) {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-sky-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: typescript,
      title: "Typescript",
      style: "shadow-sky-600",
    },
    {
      id: 5,
      src: react,
      title: "React",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div className="pt-12 px-7">
      <div>
        <p
          className={clsx(
            "text-xl border-b-2 p-2 inline",
            darkMode ? "border-teal-400 text-white" : "border-teal-600"
          )}
        >
          {" "}
          Skills{" "}
        </p>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center pb-8 py-10 px-12 sm:px-0">
        {techs.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={clsx(
              "shadow-md hover:scale-105 duration-500 py-2 rounded-lg",
              style
            )}
          >
            <div className="w-20 h-20 text-center mx-auto relative">
              <Image src={src} alt="" className="absolute mx-auto" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <p className={clsx("mt-4", darkMode ? "text-gray-400" : "")}>
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
