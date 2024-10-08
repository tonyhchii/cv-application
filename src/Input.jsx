export function Input({ label, onChange, value, name }) {
  return (
    <>
      <h2>{label}</h2>
      <input type="text" name={name} value={value} onChange={onChange} />
    </>
  );
}
