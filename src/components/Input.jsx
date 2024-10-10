export function Input({ label, onChange, value, name, type }) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      {type === "textarea" ? (
        <textarea
          type="text"
          name={name}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input type="text" name={name} value={value} onChange={onChange} />
      )}
    </div>
  );
}
