import { useState } from "react";
import { GeneralInfo } from "./components/GeneralInfo";
import { CVDisplay } from "./components/CVComponents/CVDisplay";
import { EducationSection } from "./components/EducationSection";

import "./App.css";
import { JobsSection } from "./components/JobsSection";

const initialInfo = {
  fullName: "Tony Huang",
  email: "tonari@email.com",
  phone: "111-111-1111",
  address: "NY,NY",
  schools: [
    {
      id: "0",
      name: "Harvard University",
      degree: "Bachelor in Computer Science",
      startDate: "10/2010",
      endDate: "6/2014",
      location: "Boston, Massachusetts",
      isCollapsed: true,
    },
    {
      id: "1",
      name: "MIT",
      degree: "Masters in Computer Science",
      startDate: "10/2018",
      endDate: "6/2020",
      location: "Boston, Massachusetts",
      isCollapsed: true,
    },
  ],
  jobs: [
    {
      id: "5",
      name: "Meta",
      title: "Software Engineer",
      startDate: "10/2016",
      endDate: "05/2020",
      location: "New York City, New York",
      description: "Software Engineer at Meta",
      isCollapsed: true,
    },
    {
      id: "10",
      name: "Google",
      title: "Software Engineer",
      startDate: "10/2020",
      endDate: "Present",
      location: "New York City, New York",
      description:
        "Lorem Ipsum neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      isCollapsed: true,
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

  const handleChange = (e) => {
    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = info[arrayName];
    const { name, value } = e.target;
    setInfo({
      ...info,
      [arrayName]: section.map((obj) => {
        if (obj.id === id) {
          obj = {
            ...obj,
            [name]: value,
          };
        }
        return obj;
      }),
    });
  };

  function toggleValue(e, key) {
    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = info[arrayName];
    setInfo({
      ...info,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          form[key] = !form[key];
        }
        console.log(form.id, id);

        return form;
      }),
    });
  }

  const setOpen = (sectionName) => setSectionOpen(sectionName);
  const toggleCollapsed = (e) => toggleValue(e, "isCollapsed");

  return (
    <div className="app">
      <div className="sidebar">
        <GeneralInfo onChange={handleGIChange} values={info} />
        <EducationSection
          isOpen={sectionOpen === "Education"}
          setOpen={setOpen}
          info={info.schools}
          toggleCollapsed={toggleCollapsed}
          onChange={handleChange}
        />
        <JobsSection
          isOpen={sectionOpen === "Professional Experience"}
          setOpen={setOpen}
          info={info.jobs}
          toggleCollapsed={toggleCollapsed}
          onChange={handleChange}
        />
      </div>
      <div className="display">
        <CVDisplay info={info} />
      </div>
    </div>
  );
}
