export function CVHeader({ info }) {
  return (
    <div className="header">
      <h1>{info.fullName}</h1>
      <div className="infoRow">
        <p>{info.email}</p>
        <p>{info.phone}</p>
        <p>{info.address}</p>
      </div>
    </div>
  );
}
