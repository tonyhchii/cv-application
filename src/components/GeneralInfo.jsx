import { Input } from "../Input";

export function GeneralInfo({ onChange, values }) {
  return (
    <div className="container">
      <h1>Personal Details</h1>
      <Input
        label="Full Name"
        name="fullName"
        value={values.fullName}
        onChange={onChange}
      />
      <Input
        label="Email"
        name="email"
        value={values.email}
        onChange={onChange}
      />
      <Input
        label="Phone"
        name="phone"
        value={values.phone}
        onChange={onChange}
      />
      <Input
        label="Address"
        name="address"
        value={values.address}
        onChange={onChange}
      />
    </div>
  );
}
