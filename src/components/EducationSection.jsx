import { DropDown } from "./DropDown";
import { EducationInfo } from "./EducationInfo";
import { FormDisplay } from "./FormDisplay";
import "../styles/section.css";

export function EducationSection({
  isOpen,
  setOpen,
  onChange,
  info,
  toggleCollapsed,
}) {
  return (
    <div>
      <DropDown sectionName="Education" isOpen={isOpen} setOpen={setOpen} />
      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <FormDisplay
          info={info}
          onChange={onChange}
          arrayName="schools"
          toggleCollapsed={toggleCollapsed}
          InfoComponent={EducationInfo}
        />
      </div>
    </div>
  );
}
