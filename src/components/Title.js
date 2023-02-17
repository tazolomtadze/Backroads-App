const Title = ({ title, SubTitle }) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{SubTitle}</span>
      </h2>
    </div>
  );
};

export default Title;
