import Link from "next/link";
import Panel from "@/components/Panel";
import ButtonLink from "@/components/ButtonLink";

const Hero = () => {
  return (
    <Panel className="bg-eggshell">
      <div className="flex flex-col md:flex-row outline1">
        <div className="flex-1 flex-col p-6 md:p-12  outline2">
          <h1
            className={`font-literata text-6xl text-black font-extrabold tracking-tight`}
          >
            Octavio Fuentes
          </h1>
          <h2 className="font-inconsolata text-5xl font-light tracking-tight pt-4">
            Software Engineer
          </h2>
          <p className="font-inconsolata pt-8 lg:pt-12 pr-6 lg:pr-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud{" "}
            <a className="underline text-brick" href="">
              exercitation
            </a>
            .
          </p>
          <ButtonLink
            className="mt-6 inline-block"
            buttonStyle="outline-light"
            targetUrl="/work-experience"
          >
            Read full experience
          </ButtonLink>
        </div>
        <div className="flex-1 p-6 md:p-12 outline1">[tech list]</div>
      </div>
    </Panel>
  );
};

export default Hero;
