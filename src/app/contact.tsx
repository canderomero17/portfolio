import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import clsx from "clsx";

export default function Contact({ darkMode }: { darkMode: boolean }) {
  return (
    
    <div
      className={clsx(
        "text-center mt-4 flex justify-center gap-x-3 py-3 px-2",
        darkMode ? "bg-gray-900" : "bg-white"
      )}
    >
      <div className="hover:scale-110 duration-500 text-blue-700">
        <Link href="https://www.linkedin.com/in/candelabromero/">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            width={35}
            className="h-[35px]"
          />
        </Link>
      </div>
      <div className="hover:scale-110 duration-500">
        <Link href="https://github.com/canderomero17">
          <FontAwesomeIcon icon={faGithub} width={35} className="h-[35px]" />
        </Link>
      </div>
      <div className="hover:scale-110 duration-500 text-sky-400">
        <Link href="mailto:caande.romero@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} width={35} className="h-[35px]" />
        </Link>
      </div>
    </div>
  );
}
