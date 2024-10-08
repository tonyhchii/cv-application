import { Input } from "./Input";
export function EducationInfo({ onChange, values }) {
  return (
    <div className="container">
      <h1>Education</h1>
      <Input
        label="School"
        name="school"
        onChange={onChange}
        value={values.school}
      />
      <Input
        label="Degree"
        name="degree"
        onChange={onChange}
        value={values.degree}
      />
      <Input
        label="Start Date"
        name="schoolStartDate"
        onChange={onChange}
        value={values.schoolStartDate}
      />
      <Input
        label="End Date"
        name="schoolEndDate"
        onChange={onChange}
        value={values.schoolEndDate}
      />
      <Input
        label="Location"
        name="schoolLocation"
        onChange={onChange}
        value={values.schoolLocation}
      />
    </div>
  );
}
