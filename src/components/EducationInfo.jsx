import { Input } from "../Input";
export function EducationInfo({ onChange, values }) {
  return (
    <div
      className="container section-form"
      id={values.id}
      data-array-name="schools"
      data-set-id={values.id}
    >
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
        name="startDate"
        onChange={onChange}
        value={values.startDate}
      />
      <Input
        label="End Date"
        name="endDate"
        onChange={onChange}
        value={values.endDate}
      />
      <Input
        label="Location"
        name="location"
        onChange={onChange}
        value={values.location}
      />
    </div>
  );
}
