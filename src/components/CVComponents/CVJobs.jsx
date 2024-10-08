export function CVJobs({ info }) {
  const jobs = info.map((job) => <Job key={job.id} info={job} />);
  return (
    <div>
      <h2>Professional Experience</h2>
      {jobs}
    </div>
  );
}

function Job({ info }) {
  return (
    <div className="job">
      <div>
        <p>
          {info.startDate} - {info.endDate}
        </p>
        <p>{info.location}</p>
      </div>
      <div>
        <b>{info.name}</b>
        <p>{info.title}</p>
        <p>{info.description}</p>
      </div>
    </div>
  );
}
