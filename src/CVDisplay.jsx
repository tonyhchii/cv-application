import "./CVStyle.css";
export function CVDisplay({ info }) {
  return (
    <div className="cv-container">
      <div className="header">
        <h1>{info.fullName}</h1>
        <div className="infoRow">
          <p>{info.email}</p>
          <p>{info.phone}</p>
          <p>{info.address}</p>
        </div>
      </div>
      <div className="body">
        <div>
          <h2>Education</h2>
        </div>
        <div className="school">
          <div>
            <p>
              {info.schoolStartDate} - {info.schoolEndDate}
            </p>
            <p>{info.schoolLocation}</p>
          </div>
          <div>
            <b>{info.school}</b>
            <p>{info.degree}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
