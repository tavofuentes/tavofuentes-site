import Panel from "@/components/Panel";
import ButtonLink from "@/components/ButtonLink";

const Footer = () => {
  return (
    <Panel className="bg-night">
      <div className="font-inconsolata text-base font-bold text-eggshell flex flex-col items-center p-6 md:p-12 outline1">
        <a className="" href="">
          See full experience
        </a>
        <div className="flex space-x-10 mt-6">
          <ButtonLink buttonStyle="outline-dark" targetUrl="/work-experience">
            Read full
          </ButtonLink>

          <ButtonLink
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
