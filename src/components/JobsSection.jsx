import { DropDown } from "./DropDown";
import { ExperienceInfo } from "./ExperienceInfo";
import { FormDisplay } from "./FormDisplay";
import "./section.css";
export function JobsSection({
  isOpen,
  setOpen,
  onChange,
  info,
  toggleCollapsed,
}) {
  return (
    <div>
      <DropDown
        sectionName="Professional Experience"
        isOpen={isOpen}
        setOpen={setOpen}
      />
      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <FormDisplay
          info={info}
          onChange={onChange}
          arrayName="jobs"
          toggleCollapsed={toggleCollapsed}
          InfoComponent={ExperienceInfo}
        />
      </div>
    </div>
  );
}
