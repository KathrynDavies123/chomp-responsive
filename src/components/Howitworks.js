import "./Howitworks.css";
import Steps from "./Steps";

const Howitworks = () => {
  return (
    <section className="howitworks">
      <h3>How it works</h3>
      <div className="container">
        <Steps number="1." text="Place your order through our App" />
        <Steps number="2." text="Our kitchen prepares your pet's meal" />
        <Steps
          number="3."
          text="One of our drivers delivers your pet's meal in under 30 minutes"
        />
      </div>
    </section>
  );
};

export default Howitworks;
