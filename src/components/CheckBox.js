import { useRef } from "react";

const CheckBox = ({ label, checked, onchange }) => {
  const inputRef = useRef(null);
  const onChange = () => {
    if (onchange) {
      onchange(inputRef.current);
    }
  };
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        ref={inputRef}
        onChange={onChange}
        checked={checked}
      />
      <span className="custom-checkbox__checkmark">
        <i className="bx bx-check"></i>
      </span>
      {label}
    </label>
  );
};

export default CheckBox;
