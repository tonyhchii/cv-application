export function CVSchools({ info }) {
  const schools = info.map((school) => (
    <School key={school.id} info={school} />
  ));
  return (
    <div className="cv-section">
      <h2>Education</h2>
      {schools}
    </div>
  );
}

function School({ info }) {
  return (
    <div className="school">
      <div className="school-col-1">
        <p>
          {info.startDate} - {info.endDate}
        </p>
        <p>{info.location}</p>
      </div>
      <div className="school-col-2">
        <b>{info.name}</b>
        <p>{info.degree}</p>
      </div>
    </div>
  );
}
