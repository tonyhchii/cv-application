import { Input } from "./Input";
export function ExperienceInfo() {
  return (
    <div className="container">
      <h1>Professional Experience</h1>
      <Input label="Company Name" />
      <Input label="Position Title" />
      <Input label="Start Date" />
      <Input label="End Date" />
      <Input label="Location" />
      <Input label="Description" />
    </div>
  );
}
