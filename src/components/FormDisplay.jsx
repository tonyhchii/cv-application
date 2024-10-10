import "./FormDisplay.css";
export function FormDisplay({
  info,
  arrayName,
  toggleCollapsed,
  onChange,
  InfoComponent,
}) {
  return (
    <div className="form-container">
      {info.map((obj) => {
        return obj.isCollapsed ? (
          <button
            className="collapsed-form section-form"
            data-array-name={arrayName}
            id={obj.id}
            key={obj.id}
            onClick={toggleCollapsed}
          >
            <p className="collapsed-form-title">{obj.name}</p>
          </button>
        ) : (
          <InfoComponent key={obj.id} values={obj} onChange={onChange} />
        );
      })}
    </div>
  );
}
