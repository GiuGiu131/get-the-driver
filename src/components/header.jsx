import "../styles/header.css";
import logo from "../assets/logistic-uk-logo.svg";
import MenuMobile from "../ui/menu-mobile";

function Header({ children }) {
  return (
    <div className="header">
      <img className="header-logo" src={logo} />
      {children}
      {/* <MenuMobile /> */}
    </div>
  );
}

export default Header;
