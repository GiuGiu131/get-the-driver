import "../styles/header.css";
import logo from "../assets/logistic-uk-logo.svg";

function Header({ children }) {
  return (
    <div className="header">
      <img className="header-logo" src={logo} />
      {children}
    </div>
  );
}

export default Header;
