import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  position: absolute;
  width: 100%;
  /* bottom: 0; */
  height: 50px;
  background-color: #474747;

  p {
    color: #b6b6b6;
    flex-direction: row;

    font-size: 1rem;
  }

  @media (max-width: 480px) {
    p {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 280px) {
    p {
      font-size: 0.7rem;
    }
  }
`;
