import { EducationInfo } from "./EducationInfo";
import "./FormDisplay.css";
export function FormDisplay({ info, arrayName, toggleCollapsed, onChange }) {
  return (
    <div className="form-container">
      {info.map((school) => {
        return school.isCollapsed ? (
          <button
            className="collapsed-form section-form"
            data-array-name={arrayName}
            id={school.id}
            key={school.id}
            onClick={toggleCollapsed}
          >
            <p className="collapsed-form-title">{school.school}</p>
          </button>
        ) : (
          <EducationInfo key={school.id} values={school} onChange={onChange} />
        );
      })}
    </div>
  );
}
