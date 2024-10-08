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
  schools: [
    {
      id: 0,
      school: "Harvard University",
      degree: "Bachelor in Computer Science",
      startDate: "10/2010",
      endDate: "6/2014",
      location: "Boston, Massachusetts",
    },
    {
      id: 1,
      school: "MIT",
      degree: "Masters in Computer Science",
      startDate: "10/2018",
      endDate: "6/2020",
      location: "Boston, Massachusetts",
    },
  ],
  jobs: [
    {
      id: 0,
      name: "Meta",
      title: "Software Engineer",
      startDate: "10/2016",
      endDate: "05/2020",
      location: "New York City, New York",
      description: "Software Engineer at Meta",
    },
    {
      id: 0,
      name: "Google",
      title: "Software Engineer",
      startDate: "10/2020",
      endDate: "Present",
      location: "New York City, New York",
      description:
        "Lorem Ipsum neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    },
  ],
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

  const handleEIChange = (e) => {
    const { name, value } = e.target;
    const updatedSchool = { ...info.schools[0], [name]: value };
    setInfo({
      ...info,
      schools: [updatedSchool],
    });
  };

  const handleExpIChange = (e) => {
    const { name, value } = e.target;
    const updatedJob = { ...info.jobs[0], [name]: value };
    setInfo({
      ...info,
      jobs: [updatedJob],
    });
  };

  return (
    <div>
      <CVDisplay info={info} />

      <GeneralInfo onChange={handleGIChange} values={info} />
      <EducationInfo onChange={handleEIChange} values={info.schools[0]} />
      <ExperienceInfo onChange={handleExpIChange} values={info.jobs[0]} />
    </div>
  );
}
