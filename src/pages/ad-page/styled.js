import styled from "styled-components";
import Modal from "@material-ui/core/Modal";

export const NewModal = styled(Modal)``;

export const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

export const GifTab = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TitleCss = styled.div`
  div {
    width: 40%;
    height: 3px;
    background-color: #00bbf9;
    margin: 0 auto 2rem auto;
    border-radius: 10px;
  }
`;

export const Title = styled.div`
  font-size: 13px;
  text-align: center;
  margin: 1rem 0;

  @media (min-width: 768px) {
    font-size: inherit;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  text-align: center;
  margin-bottom: 6rem;

  img {
    width: 80%;
    border-radius: 15px;
  }

  h2 {
    font-weight: normal;
  }

  @media (min-width: 768px) {
    text-align: inherit;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin-top: 4rem;

    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1rem;
    }

    img {
      width: 27%;
    }

    img,
    div {
      margin: 0 4rem;
    }
  }
`;

export const Contact = styled.div`
  background-color: rgba(0, 187, 249, 0.35);

  h1 {
    text-align: center;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;

    h1 {
      font-size: 1.5rem;
    }

    ul > li {
      font-size: 1.2rem;
      line-height: 1.8rem;
    }
  }
`;
