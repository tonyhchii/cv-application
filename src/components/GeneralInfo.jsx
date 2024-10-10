import { Input } from "./Input";
import "../styles/section.css";

export function GeneralInfo({ onChange, values }) {
  return (
    <>
      <button className="dropdown">
        <h2 className="info-header">Personal Info</h2>
      </button>
      <div className="section-content open">
        <div className="section-form">
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
      </div>
    </>
  );
}
