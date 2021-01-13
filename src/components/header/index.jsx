import { Container, Mobile, Desktop, MobileList } from "./styled";

import { useHistory } from "react-router-dom";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { useState } from "react";

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
        <p onClick={() => history.push("/#")}>Sou ONG</p>
        <p onClick={() => history.push("/#")}>Sou voluntário</p>
      </Desktop>
      <Mobile onClick={handleIcon}>
        {icon ? <FaChevronDown /> : <FaChevronUp />}
        {!icon && (
          <MobileList>
            <ul>
              <li onClick={() => history.push("/#")}>Sou ONG</li>
              <li onClick={() => history.push("/#")}>Sou voluntário</li>
            </ul>
          </MobileList>
        )}
      </Mobile>
    </Container>
  );
};

export default Header;
