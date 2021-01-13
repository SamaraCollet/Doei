import { Container, Mobile, Desktop, MobileList } from "./styled";

import { useHistory } from "react-router-dom";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { useState } from "react";

const AuthHeader = () => {
  const history = useHistory();
  const [icon, setIcon] = useState(true);

  const handleIcon = () => {
    setIcon(!icon);
  };

  return (
    <Container>
      <p>Logo</p>
      <Desktop>
        <p onClick={() => history.push("/#")}>Conta</p>
      </Desktop>
      <Mobile onClick={handleIcon}>
        {icon ? <FaChevronDown /> : <FaChevronUp />}
        {!icon && (
          <MobileList>
            <ul>
              <li onClick={() => history.push("/#")}>Conta</li>
            </ul>
          </MobileList>
        )}
      </Mobile>
    </Container>
  );
};

export default AuthHeader;
