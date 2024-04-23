import Link from "next/link";
import Panel from "@/components/Panel";

const ExperiencePanel = () => {
  return (
    <Panel className="bg-forest">
      <div className="flex flex-col md:flex-row outline1">
        <div className="flex-1 flex-col p-6 md:p-12 text-eggshell outline2">
          [Experience cards]
        </div>
      </div>
    </Panel>
  );
};

export default ExperiencePanel;
