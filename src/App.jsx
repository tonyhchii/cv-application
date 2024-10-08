import { useState } from "react";
import { GeneralInfo } from "./GeneralInfo";
import { CVDisplay } from "./CVDisplay";
import { EducationInfo } from "./EducationInfo";
import { ExperienceInfo } from "./ExperienceInfo";

const initialInfo = {
  fullName: "Tony Huang",
  email: "tonari@email.com",
  phone: "111-111-1111",
  address: "NY,NY",
  school: "Harvard University",
  degree: "Bachelor in Computer Science",
  schoolStartDate: "10/2010",
  schoolEndDate: "6/2014",
  schoolLocation: "Boston, Massachusetts",
};

export function App() {
  const [info, setInfo] = useState(initialInfo);

  const handleGIChange = (e) => {
    const { name, value } = e.target;

    setInfo({
      ...info,
      [name]: value,
    });
  };

  return (
    <div>
      <CVDisplay info={info} />

      <GeneralInfo onChange={handleGIChange} values={info} />
      <EducationInfo onChange={handleGIChange} values={info} />
      <ExperienceInfo />
    </div>
  );
}
