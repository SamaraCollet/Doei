import { Container, Mobile, Desktop, MobileList } from "./styled";

import { useHistory } from "react-router-dom";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { useState } from "react";

import {Link} from "react-router-dom"

const Header = () => {
  const history = useHistory();
  const [icon, setIcon] = useState(true);

  const handleIcon = () => {
    setIcon(!icon);
  };

  return (
    <Container>
      <p>Logo</p>
      <Desktop>
        <p onClick={() => history.push("/login")}>Login</p>
        <p onClick={() => history.push("/cadastro-ong")}>Sou ONG</p>
        <p onClick={() => history.push("/cadastro-voluntario")}>Sou voluntário</p>
      </Desktop>
      <Mobile onClick={handleIcon}>
        {icon ? <FaChevronDown /> : <FaChevronUp />}
        {!icon && (
          <MobileList>
            <ul>
              <li onClick={() => history.push("/cadastro-ong")}>Sou ONG</li>
              <li onClick={() => history.push("/cadastro-voluntario")}>Sou voluntário</li>
            </ul>
          </MobileList>
        )}
      </Mobile>
    </Container>
  );
};

export default Header;
