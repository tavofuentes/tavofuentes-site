import Link from "next/link";
import { Inconsolata, Literata } from "next/font/google";
import Panel from "@/components/Panel";
import Image from "next/image";
import heroIcon from "../../public/press.png";

const fontInconsolata = Inconsolata({ subsets: ["latin"] });
const fontLiterata = Literata({ subsets: ["latin"] });

const Header = ({ homeLink = true }) => {
  return (
    <Panel className="bg-eggshell">
      <header
        className={`
          ${fontInconsolata.className} 
          font-inconsolata text-base font-bold text-black
          flex flex-col md:flex-row flex-grow flex-wrap
          ${homeLink ? "md:justify-between" : "md:justify-end"}
          align-middle p-6 md:p-12 outline1
        `}
      >
        {homeLink && (
          <div className="outline2 home-link mb-2 md:mb-0">
            <Link
              className="flex flex-col md:flex-row items-baseline"
              href={"/"}
            >
              <div>
                <Image
                  className="mr-2"
                  src={heroIcon}
                  alt="powered by coffee"
                  width={24}
                  height={24}
                ></Image>
              </div>
              <span
                className={`${fontLiterata.className} text-nowrap font-extrabold text-xl mr-2`}
              >
                Octavio Fuentes
              </span>
              <span
                className={`${fontInconsolata.className} text-nowrap font-light text-xl`}
              >
                Software Engineer
              </span>
            </Link>
          </div>
        )}
        <nav className="flex flex-row flex-wrap items-end outline2">
          <Link className="mr-5" href={"/cv"}>
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
