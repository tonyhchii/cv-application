import { Input } from "../Input";
export function ExperienceInfo({ onChange, values }) {
  return (
    <div className="container">
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
      />
    </div>
  );
}
