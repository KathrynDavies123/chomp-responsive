import "./Steps.css";

const Steps = (props) => {
  return (
    <div className="steps">
      <h4>{props.number}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default Steps;
