const PolicyCard = ({ name, desc, icon }) => {
  return (
    <article className="policy-card">
      <div className="policy-card__icon">
        <i className={icon}></i>
      </div>
      <div className="policy-card__info">
        <div className="policy-card__info__name">{name}</div>
        <div className="policy-card__info__desc">{desc}</div>
      </div>
    </article>
  );
};

export default PolicyCard;
