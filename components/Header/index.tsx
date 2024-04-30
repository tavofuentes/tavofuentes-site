import Link from "next/link";
import { Inconsolata } from "next/font/google";
import Panel from "@/components/Panel";

const Header = () => {
  return (
    <Panel className="bg-eggshell">
      <header className="font-inconsolata text-base font-bold flex flex-grow justify-end p-6 md:p-12 text-black outline1">
        <nav className="flex flex-col lg:flex-row space-x-10 items-end outline2">
          <Link href={"/work-experience"}>Work experience</Link>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/octavio-fuentes-arce/"
          >
            Linkedin
          </a>
          <a target="_blank" href="https://github.com/tavofuentes">
            Github
          </a>
          <a target="_blank" href="">
            tavofuentes@gmail.com
          </a>
        </nav>
      </header>
    </Panel>
  );
};

export default Header;
