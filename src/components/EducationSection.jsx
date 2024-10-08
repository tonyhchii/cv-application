import { DropDown } from "./DropDown";
import { EducationInfo } from "./EducationInfo";
import "./section.css";

export function EducationSection({ isOpen, setOpen, onChange, info }) {
  return (
    <div>
      <DropDown sectionName="Education" isOpen={isOpen} setOpen={setOpen} />
      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <EducationInfo onChange={onChange} values={info} />
      </div>
    </div>
  );
}
