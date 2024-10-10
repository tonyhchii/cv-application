import "../styles/DropDown.css";

export function DropDown({ isOpen, sectionName, setOpen }) {
  return (
    <button
      className="dropdown"
      onClick={() => setOpen(isOpen ? "" : sectionName)}
    >
      <h2 className="dropdown-header">{sectionName}</h2>
    </button>
  );
}
