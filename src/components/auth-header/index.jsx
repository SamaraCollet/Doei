import { Container, Mobile, Desktop, MobileList } from "./styled";

import { useHistory } from "react-router-dom";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/thunks";

import jwt_decode from "jwt-decode";
import axios from "axios";

const AuthHeader = () => {
  const [icon, setIcon] = useState(true);
  const [isOng, setIsOng] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const isOngTrue = useSelector((state) => state.users.data.ngo);

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
    dispatch(getCurrentUser(""));
    localStorage.clear();
    history.push("/");
  };

  return (
    <Container style={{ backgroundColor: !!isOngTrue ? "#90be6d" : "#00bbf9" }}>
      <img
        className="logo"
        src="/assets/logo2.png"
        alt="logo"
        onClick={() => history.push("/campaigns-feed")}
      />
      <Desktop>
        {!!isOngTrue && <p>Criar campanha</p>}
        <div className="item-menu">
          <p
            onClick={() =>
              !!isOngTrue
                ? history.push("/perfil-ong")
                : history.push("/perfil-voluntario")
            }
          >
            Conta
          </p>
        </div>
        <div className="item-menu item-menu-2">
          <p onClick={handleLogout}>Deslogar</p>
        </div>
      </Desktop>
      <Mobile onClick={handleIcon}>
        {icon ? <FaChevronDown /> : <FaChevronUp />}
        {!icon && (
          <MobileList
            style={{ backgroundColor: !!isOngTrue ? "#90be6d" : "#00bbf9" }}
          >
            <ul>
              {!!isOngTrue && <li>Criar campanha</li>}
              <li
                onClick={() =>
                  !!isOngTrue
                    ? history.push("/perfil-ong")
                    : history.push("/perfil-voluntario")
                }
              >
                Conta
              </li>
              <li onClick={handleLogout}>Deslogar</li>
            </ul>
          </MobileList>
        )}
      </Mobile>
    </Container>
  );
};

export default AuthHeader;
