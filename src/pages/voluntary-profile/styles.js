import styled from "styled-components";

export const ProfileTitle = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  padding-top: 3.5rem;

  .bottom-line {
    margin-top: 0.5rem;
    width: 3rem;
    border-top: 3px solid #00bbf9;
  }
`;

export const Container = styled.div``;

export const Info = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin-top: 3rem;

    img,
    div {
      margin: 0 3rem;
    }

    img {
      width: 25%;
      max-width: 30%;
      max-height: 30%;
      border-radius: 100%;
      object-fit: cover;
    }

    div {
      width: 80%;
      max-width: 35%;
    }
  }
`;
