import { Container, Mobile, Desktop, MobileList } from "./styled";

import { useHistory } from "react-router-dom";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { useState, useEffect } from "react";

import jwt_decode from "jwt-decode";

import axios from "axios";

const AuthHeader = () => {
  const history = useHistory();
  const [icon, setIcon] = useState(true);
  const [isOng, setIsOng] = useState(false);

  let token = localStorage.getItem("authToken");

  useEffect(() => {
    if (token !== null) {
      const decoded = jwt_decode(token);
      axios
        .get(`https://capstone4-kenzie.herokuapp.com/users/${decoded.sub}`)
        .then((res) => setIsOng(res.data.ngo));
    }
  }, []);

  const handleIcon = () => {
    setIcon(!icon);
  };

  const handleLogout = () => {
    localStorage.clear();
  };
  console.log(isOng);
  return (
    <Container
      style={{ backgroundColor: isOng === true ? "#90be6d" : "#00bbf9" }}
    >
      <img
        className="logo"
        src="/assets/logo2.png"
        alt="logo"
        onClick={() => history.push("/campaigns-feed")}
      />
      <Desktop>
        <p
          onClick={() =>
            isOng === true
              ? history.push("/dashboard-ong")
              : history.push("/dashboard-voluntario")
          }
        >
          Conta
        </p>
        <p onClick={handleLogout}>Deslogar</p>
      </Desktop>
      <Mobile onClick={handleIcon}>
        {icon ? <FaChevronDown /> : <FaChevronUp />}
        {!icon && (
          <MobileList>
            <ul>
              <li
                onClick={() =>
                  isOng === true
                    ? history.push("/dashboard-ong")
                    : history.push("/dashboard-voluntario")
                }
              >
                Conta
              </li>
            </ul>
          </MobileList>
        )}
      </Mobile>
    </Container>
  );
};

export default AuthHeader;
