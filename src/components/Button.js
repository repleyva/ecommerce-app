const Button = (props) => {
  const bgColor = props.bgColor ? `bg-${props.bgColor}` : `bg-main`;
  const size = props.size && `btn-${props.size}`;
  const animate = props.animate && `btn-animate`;

  return (
    <button
      className={`btn ${bgColor} ${size} ${animate}`}
      onClick={props.onClick && props.onClick}
    >
      <span className="btn__txt">{props.children}</span>
      {props.icon && (
        <span className="btn__icon">
          <i className={`${props.icon} bx tada`}></i>
        </span>
      )}
    </button>
  );
};

export default Button;
