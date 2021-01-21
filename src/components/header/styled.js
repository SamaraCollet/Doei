import styled from "styled-components";

export const Container = styled.div`
  background-color: #00bbf9;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 14px;
  z-index: 9999;

  img {
    width: 85px;
    margin-left: 30px;
    margin-top: 2px;
    cursor: pointer;
  }
`;

export const Desktop = styled.div`
  display: none;

  .item-menu {
    margin: 0 15px;
  }

  .item-menu-2 {
    margin-right: 30px;
  }

  p {
    margin-bottom: 4px;
  }

  .item-menu:hover {
    border-bottom: 2px solid #ffbe0b;
    box-sizing: border-box;
    height: 25px;
    cursor: pointer;
  }

  @media (min-width: 480px) {
    display: flex;
    font-size: 17px;
  }
`;

export const Mobile = styled.div`
  margin-right: 2rem;

  @media (min-width: 480px) {
    display: none !important;
    visibility: hidden !important;
  }
`;

export const MobileList = styled.div`
  color: white;
  background-color: rgba(0, 187, 250, 0.95);
  font-size: 1.3rem;
  font-weight: bold;
  position: absolute;
  z-index: 99;
  top: 50px;
  right: 20px;
  z-index: 9999;

  border-radius: 10px;

  ul {
    list-style: none;
    padding: 0 1rem;
    z-index: 9999;

    li {
      margin: 0.5rem 0;
      z-index: 9999;
    }
  }
`;
