import "../styles/header.css";
import logo from "../assets/logistic-uk-logo.svg";

function Header() {
  return (
    <div className="header">
      <img className="header-logo" src={logo} />
    </div>
  );
}

export default Header;
