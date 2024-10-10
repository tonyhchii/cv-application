import { Input } from "./Input";
export function ExperienceInfo({
  onChange,
  values,
  toggleCollapsed,
  deleteForm,
}) {
  return (
    <div
      className="container section-form"
      id={values.id}
      data-array-name="jobs"
    >
      <Input
        label="Company Name"
        name="name"
        onChange={onChange}
        value={values.name}
      />
      <Input
        label="Position Title"
        name="title"
        onChange={onChange}
        value={values.title}
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
      <Input
        label="Description"
        name="description"
        onChange={onChange}
        value={values.description}
        type="textarea"
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
