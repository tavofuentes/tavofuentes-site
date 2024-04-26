import Panel from "@/components/Panel";
import ButtonLink from "@/components/ButtonLink";

const Footer = () => {
  return (
    <Panel className="bg-night grow">
      <div className="font-inconsolata text-base font-bold text-eggshell flex flex-col items-center p-6 md:p-12 outline1">
        <a className="" href="">
          See full experience
        </a>
        <div className="flex flex-wrap mt-6 justify-between">
          <ButtonLink
            className="mr-5 mb-5"
            buttonStyle="outline-dark"
            targetUrl="/work-experience"
          >
            Read full
          </ButtonLink>

          <ButtonLink
            className="mb-5"
            buttonStyle="outline-dark"
            targetUrl="https://www.linkedin.com/in/octavio-fuentes-arce/"
          >
            Download CV
          </ButtonLink>
        </div>
      </div>
    </Panel>
  );
};

export default Footer;
