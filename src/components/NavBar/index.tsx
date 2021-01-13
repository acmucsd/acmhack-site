import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';
import Logo from '../../assets/logotext.svg';
import MenuButtonIcon from '../../assets/menubutton.svg';
import CloseMenuButton from '../../assets/closemenubutton.svg';
import './style.less';

const NavBar: React.FC = () => {
  const [menuState, setMenuState] = React.useState(false);
  const location = useLocation();

  const toggleMenu = (): void => {
    const menuIcon = document.getElementsByClassName('menuicon')[0] as HTMLImageElement;
    const mobileLinks = document.getElementsByClassName('mobile-links')[0] as HTMLImageElement;
    if (menuState) {
      menuIcon.src = MenuButtonIcon;
      mobileLinks.style.display = 'none';
      setMenuState(false);
    } else {
      menuIcon.src = CloseMenuButton;
      mobileLinks.style.display = 'block';
      setMenuState(true);
    }
  }; 

  React.useEffect(() => {
    const elementId = location.hash ? location.hash.slice(1) : 'top';
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
  }, [location]);

  return (
    <div className="fixed-nav">
      <div className="navbar-div">
        <ul className="navbar">
          <li>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </li>
          <li>
            <Link to="/#contact">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/workshops">Workshops</Link>
          </li>
          <li>
            <Link to="/#team">
              Team
            </Link>
          </li>
          <li>
            <Link to="/#description">
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-mobile-div">
        <div className="navbar-mobile">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <button className="icon" onClick={toggleMenu} type="button">
            <img className="menuicon" src={MenuButtonIcon} alt="Menu Icon" />
          </button>
        </div>
      </div>
      <div className="wainbow" />
      <div className="mobile-links">
        <Link
          to="/#description"
          onClick={(): void => {
            toggleMenu();
          }}>
          About Us
        </Link>
        <Link
          to="/#team"
          onClick={(): void => {
            toggleMenu();
          }}>
          Team
        </Link>
        <Link
          to="/workshops"
          onClick={(): void => {
            toggleMenu();
          }}>
          Workshops
        </Link>
        <Link
          to="/#contact"
          onClick={(): void => {
            toggleMenu();
          }}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
