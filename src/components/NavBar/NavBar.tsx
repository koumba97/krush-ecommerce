import "./NavBar.scss";
import Logo from "../Logo/Logo";

const NavBar = () => {
  return (
    <nav>
      <Logo />
      <div className="nav-content">
        <a className="nav-link">
          <i className="lar la-user-circle"></i>
        </a>

        <a className="nav-link">
          <i className="lar la-heart"></i>
        </a>

        <a className="nav-link">
          <i className="las la-shopping-bag"></i>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
