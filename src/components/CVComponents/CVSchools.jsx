export function CVSchools({ info }) {
  const schools = info.map((school) => (
    <School key={school.id} info={school} />
  ));
  return (
    <div>
      <h2>Education</h2>
      {schools}
    </div>
  );
}

function School({ info }) {
  return (
    <div className="school">
      <div>
        <p>
          {info.startDate} - {info.endDate}
        </p>
        <p>{info.location}</p>
      </div>
      <div>
        <b>{info.name}</b>
        <p>{info.degree}</p>
      </div>
    </div>
  );
}
