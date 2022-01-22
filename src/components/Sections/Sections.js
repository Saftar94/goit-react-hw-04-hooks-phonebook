import style from "./Sections.module.scss";

const Section = ({ children, title }) => {
  return (
    <section className={style.SECTION}>
      <div className={style.Container}>
        <h1 className={style.header}>{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default Section;
