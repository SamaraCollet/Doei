import styled from "styled-components";
import Modal from "@material-ui/core/Modal";

export const NewModal = styled(Modal)``;

export const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GifTab = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media (min-width: 768px) and (max-width: 979px) {
    h1 {
      font-size: 1.6rem;
    }
  }
  @media only screen and (max-width: 767px) {
    h1 {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 1.6rem;
      text-align: center;
      padding: 0 10px;
    }
  }
`;

export const ContactTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 40px;
`;

export const TitleDetailContact = styled.div`
  align-self: left;
  background-color: #00bbf9;
  width: 80px;
  height: 3px;
  margin: 15px 0;
  border-radius: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: auto;
  margin: 50px 0 90px;

  img {
    border-radius: 20px;
    width: 260px;
    height: 260px;
    padding: 10px;
    border: 1px solid #e0e0e0;
  }

  p {
    font-size: 20px;
  }

  .data {
    margin-left: 60px;
  }
  @media (min-width: 768px) and (max-width: 979px) {
    width: 700px;
    img {
      width: 220px;
      height: 220px;
    }
    .data {
      margin-left: 30px;
    }
  }
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    width: 90vw;
    img {
      width: 220px;
      height: 220px;
      margin-bottom: 30px;
    }
    .data {
      width: 70vw;
      margin-left: 0;
    }
  }
  @media (max-width: 480px) {
    img {
      width: 200px;
      height: 200px;
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 60px 0;

  .contact-data {
    width: 380px;
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    padding: 20px;
  }

  .contact-map {
    width: 400px;
  }
  h2 {
    font-size: 2rem;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 2rem;
    font-size: 20px;
  }

  @media (min-width: 768px) and (max-width: 979px) {
    h2 {
      font-size: 1.6rem;
    }

    .contact-data {
      margin-right: 0;
      padding: 0 10px 0 80px;
    }
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    h2 {
      font-size: 1.6rem;
    }
    .contact-data {
      margin-right: 0;
      padding: 0 10px 0 80px;
    }
    .contact-map {
      width: 300px;
    }
  }
  @media (max-width: 480px) {
    .contact-data {
      width: 80vw;
    }
  }
`;

export const ContainerStyle = {
  width: `300px`,
  height: `300px`,
  borderRadius: "20px",
};

// @media (max-width: 1200px) {}
// @media (min-width:768px) and (max-width:979px) {}
// @media only screen and (max-width: 767px) {}
// @media (max-width: 480px) {}
