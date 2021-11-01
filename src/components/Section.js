const Section = (props) => {
  return <section className="section">{props.children}</section>;
};

export const SectionTitle = (props) => {
  return <section className="section__title">{props.children}</section>;
};

export const SectionBody = (props) => {
  return <section className="section__body">{props.children}</section>;
};

export default Section;
