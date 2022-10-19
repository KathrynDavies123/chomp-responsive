import "./Menu.css";

const Menu = () => {
  return (
    <section className="menu">
      <h3>What's on the menu?</h3>
      <div className="menucontainer">
      <div className="imgdetails">
        <div className="imgContainer"></div>
        <div className="details">
          <p>Locally Sourced</p>
          <p>Delicious</p>
          <p>Organic</p>
        </div>
      </div>
      <div className="descriptioncontainer">
        <p className="descriptiontext">
          Our chefs are constantly dreaming up new recipes your pets will love!
          We only use locally sourced, organic ingredients.
        </p>
      </div>
      </div>
    </section>
  );
};

export default Menu;
