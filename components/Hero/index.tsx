import Link from "next/link";
import Image from "next/image";
import Panel from "@/components/Panel";
import ButtonLink from "@/components/ButtonLink";
import heroIcon from "../../public/press.png";
import { Literata, Inconsolata } from "next/font/google";

const fontLiterata = Literata({ subsets: ["latin"] });
const fontInconsolata = Inconsolata({ subsets: ["latin"] });

const Hero = () => {
  return (
    <Panel className="bg-eggshell">
      <div
        className="
        flex flex-col
        pb-6 
        md:pb-16 
        lg:flex-row
        outline1"
      >
        <div className="flex-1 flex-col p-6 md:p-12 outline2">
          <div className="">
            <Image
              className="mb-4"
              src={heroIcon}
              alt="powered by coffee"
              width={60}
              height={60}
            ></Image>
          </div>
          <h1
            className={`${fontLiterata.className} text-6xl text-black font-extrabold tracking-tight`}
          >
            Octavio Fuentes
          </h1>
          <h2
            className={`${fontInconsolata.className} text-5xl font-light tracking-tight pt-4`}
          >
            Software Engineer
          </h2>
          <p
            className={`${fontInconsolata.className} text-xl pt-8 lg:pt-12 pr-6 lg:pr-8`}
          >
            👋 Hi there! I'm a full-stack software engineer with over 10 years
            of{" "}
            <Link className="underline text-brick" href={"/cv"}>
              experience
            </Link>{" "}
            delivering solutions primarily for the e-commerce and finance
            industries. Being product-minded, I'm passionate about building
            software that solves real problems. Currently, I am open to working
            on independent projects or full-time roles.
          </p>
          <ButtonLink
            className="mt-6 inline-block"
            buttonStyle="outline-light"
            targetUrl="/cv"
          >
            Read full experience
          </ButtonLink>
        </div>
        <div className="flex-1 p-6 md:p-12 outline1"></div>
      </div>
    </Panel>
  );
};

export default Hero;
