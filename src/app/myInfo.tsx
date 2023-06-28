import clsx from "clsx";
import Image from "next/image";
import profilePicture from "../../public/profilePicture.png";

export default function MyInfo({ darkMode }: { darkMode: boolean }) {
  return (
    <>
      <div className="text-center pb-4 px-10 sm:pt-6">
        <h1
          className={clsx(
            "text-3xl py-2 font-medium  md:text-4xl",
            darkMode ? "text-teal-400" : "text-teal-600"
          )}
        >
          Candela Romero
        </h1>
        <h2
          className={clsx(
            "text-xl py-2 md:text-2xl",
            darkMode ? "text-white" : ""
          )}
        >
          Systems engineering student
        </h2>
        <p
          className={clsx(
            "text-md pt-5 leading-8 max-w-xl mx-auto md:text-xl",
            darkMode ? "text-gray-200" : "text-gray-800"
          )}
        >
          Im a responsible and organized woman. What I enjoy most about
          programming is having to learn new things constantly and to be up to
          date with latest technologies. I thrive on taking on new challenges.
        </p>
      </div>
      <div
        className={clsx(
          "relative mx-auto border-2 rounded-full w-60 md:w-64",
          darkMode ? "border-teal-400" : "border-teal-600"
        )}
      >
        <Image
          src={profilePicture}
          alt="profilePicture"
          className="overflow-clip rounded-full"
        />
      </div>
    </>
  );
}
