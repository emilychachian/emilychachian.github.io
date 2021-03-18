import logo from "../../assets/logo.svg"

const Header = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="header-wrapper">
          <h1>Github Search</h1>
          <img src={logo} />
        </div>
      </div>
    </div>
  );
};

export default Header;
