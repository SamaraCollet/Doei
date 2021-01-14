import styled from "styled-components";

export const Container = styled.div`
  background-color: #90be6d;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 14px;

  p:first-child {
    padding-left: 2rem;
  }
`;

export const Desktop = styled.div`
  display: none;

  @media (min-width: 480px) {
    display: flex;
    font-size: 17px;

    p {
      margin-right: 2rem;
      cursor: pointer;
    }
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
  background-color: rgba(144, 190, 109, 0.5);

  position: absolute;
  top: 50px;
  right: 20px;

  border-radius: 10px;

  ul {
    list-style: none;
    padding: 0 1rem;

    li {
      margin: 0.5rem 0;
    }
  }
`;
