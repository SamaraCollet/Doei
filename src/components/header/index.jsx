import { Container, Mobile, Desktop, MobileList } from "./styled";

import { useHistory } from "react-router-dom";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const [icon, setIcon] = useState(true);

  const handleIcon = () => {
    setIcon(!icon);
  };

  return (
    <Container>
      <img
        className="logo"
        src="/assets/logo2.png"
        alt="logo"
        onClick={() => history.push("/")}
      />
      <Desktop>
        <div className="item-menu">
          <p onClick={() => history.push("/login-ong")}>Sou ONG</p>
        </div>
        <div className="item-menu item-menu-2">
          <p onClick={() => history.push("/login-voluntario")}>
            Sou voluntário
          </p>
        </div>
      </Desktop>
      <Mobile onClick={handleIcon}>
        {icon ? <FaChevronDown /> : <FaChevronUp />}
        {!icon && (
          <MobileList>
            <ul>
              <li onClick={() => history.push("/login-ong")}>Sou ONG</li>
              <li onClick={() => history.push("/login-voluntario")}>
                Sou voluntário
              </li>
            </ul>
          </MobileList>
        )}
      </Mobile>
    </Container>
  );
};

export default Header;
