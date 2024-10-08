import { useState } from "react";
import { GeneralInfo } from "./components/GeneralInfo";
import { CVDisplay } from "./components/CVComponents/CVDisplay";
import { EducationInfo } from "./components/EducationInfo";
import { ExperienceInfo } from "./components/ExperienceInfo";
import { EducationSection } from "./components/EducationSection";

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
      id: 1,
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
  const [sectionOpen, setSectionOpen] = useState(null);

  const handleGIChange = (e) => {
    const { name, value } = e.target;

    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleEIChange = (e) => {
    const index = e.target.id;
    const { name, value } = e.target;
    const updatedSchool = { ...info.schools[index], [name]: value };
    const newSchools = [
      ...info.schools.slice(0, index),
      updatedSchool,
      ...info.schools.slice(index + 1),
    ];
    setInfo({
      ...info,
      schools: newSchools,
    });
  };

  const setOpen = (sectionName) => setSectionOpen(sectionName);

  return (
    <div>
      <CVDisplay info={info} />

      <GeneralInfo onChange={handleGIChange} values={info} />
      <EducationSection
        isOpen={sectionOpen === "Education"}
        setOpen={setOpen}
        onChange={handleEIChange}
        info={info.schools[0]}
      />
    </div>
  );
}
