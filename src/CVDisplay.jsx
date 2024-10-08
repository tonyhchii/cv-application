import { CVHeader } from "./CVHeader";
import { CVSchools } from "./CVSchools";
import { CVJobs } from "./CVJobs";
import "./CVStyle.css";
export function CVDisplay({ info }) {
  return (
    <div className="cv-container">
      <CVHeader info={info} />
      <div className="body">
        <CVSchools info={info.schools} />
        <CVJobs info={info.jobs} />
      </div>
    </div>
  );
}
