export function DropDown({ isOpen, sectionName, setOpen }) {
  return (
    <button
      className="expand-section"
      onClick={() => setOpen(isOpen ? "" : sectionName)}
    >
      <h2 className="expand-section-header">{sectionName}</h2>
    </button>
  );
}
