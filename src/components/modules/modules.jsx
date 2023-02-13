import "./style.scss";
export function Modules({ active, setActive, child }) {
  return (
    <div
      onClick={() => setActive(false)}
      className={active ? "wrapper_modal active" : "wrapper_modal"}
    >
      <div className="container-enter">
        <div onClick={(e) => e.stopPropagation()} className="modal__block">
          {child}
        </div>
      </div>
    </div>
  );
}
