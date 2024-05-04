import Link from "next/link";
import { Inconsolata } from "next/font/google";
import Panel from "@/components/Panel";

const Header = () => {
  return (
    <Panel className="bg-eggshell">
      <header className="font-inconsolata text-base font-bold flex flex-grow lg:justify-end p-6 md:p-12 text-black outline1">
        <nav className="flex flex-row flex-wrap items-end outline2">
          <Link className="mr-5" href={"/work-experience"}>
            Work
          </Link>
          <a
            className="mr-5"
            target="_blank"
            href="https://www.linkedin.com/in/octavio-fuentes-arce/"
          >
            Linkedin
          </a>
          <a
            className="mr-5"
            target="_blank"
            href="https://github.com/tavofuentes"
          >
            Github
          </a>
          <a href="mailto:test@test.com">Email</a>
        </nav>
      </header>
    </Panel>
  );
};

export default Header;
