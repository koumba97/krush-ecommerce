import "./NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import Logo from "../Logo/Logo";

const NavBar = () => {
  return (
    <nav>
      <Logo />
      <div className="nav-content">
        <FontAwesomeIcon icon={faGlobe} size="xl" />
        <FontAwesomeIcon icon={faUserCircle} size="xl" />
        <FontAwesomeIcon icon={faCartShopping} size="xl" />
      </div>
    </nav>
  );
};

export default NavBar;
