import { Input } from "./Input";
export function EducationInfo({
  onChange,
  values,
  toggleCollapsed,
  deleteForm,
}) {
  return (
    <div
      className="container section-form"
      id={values.id}
      data-array-name="schools"
      data-set-id={values.id}
    >
      <Input
        label="School"
        name="name"
        onChange={onChange}
        value={values.name}
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
      <div className="btn-container">
        <button
          className="btn"
          onClick={(e) => {
            toggleCollapsed(e);
            deleteForm(e);
          }}
        >
          Delete
        </button>
        <button className="btn" onClick={toggleCollapsed}>
          Close
        </button>
      </div>
    </div>
  );
}
