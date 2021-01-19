import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("/assets/banner-min.jpg");
  background-position: 20% 30%;
  background-size: 120%;
  background-repeat: no-repeat;
  /* object-fit: cover; */
  display: flex;
  background-attachment: fixed;

  @media (max-width: 1200px) {
    background-size: 250%;
    background-position: 42% 30%;
  }
  @media (min-width: 768px) and (max-width: 979px) {
    background-size: 220%;
    background-position: 40% 30%;
  }
  @media (min-width: 701px) and (max-width: 767px) {
    background-size: 145%;
    background-position: 42% 30%;
  }
  @media only screen and (max-width: 700px) {
    background-size: 210%;
    background-position: 40% 30%;
  }
  @media (max-width: 480px) {
    background-size: 360%;
    background-position: 67% 50%;
  }
  @media (max-width: 280px) {
    background-size: 380%;
  }
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 470px;
  height: auto;
  padding: 90px 0 20px 120px;

  h1 {
    font-size: 4rem;
    padding: 20px 0;
    line-height: 1.1;
  }

  p {
    font-size: 20px;
  }

  @media (max-width: 1200px) {
    width: 430px;
    padding: 110px 0 10vh 7vw;
  }

  @media (min-width: 768px) and (max-width: 979px) {
    width: 40vw;
    padding: 0 0 10vh 6vw;
    h1 {
      font-size: 1.7rem;
    }
    p {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 767px) {
    width: 52vw;
    padding: 0 0 10vh 6vw;

    h1 {
      font-size: 1.8rem;
      padding: 5px 0;
    }

    p {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 5vw;
    background-color: rgba(202, 202, 202, 0.582);
    background: blur(4px);
    border-radius: 0 60px 0 0;
    margin-top: 35vh;
    width: 90vw;

    h1 {
      font-size: 2rem;
      padding: 0 0 15px 0;
    }
    p {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 280px) {
    h1 {
      font-size: 1.6rem;
    }
  }
`;

export const FindLocal = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  select {
    width: 350px;
    height: 45px;
    padding-left: 15px;
    border-radius: 15px;
    margin-right: 10px;
    border: none;
    box-shadow: 1px 1px 4px #5e5e5e;
    font-size: 18px;
  }

  button {
    width: 45px;
    height: 45px;
    border-radius: 25%;
    background: #ffbe0b;
    border: none;
    box-shadow: 1px 1px 4px #5e5e5e;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:hover {
    background: #00bbf9;
  }

  button:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
  @media (min-width: 768px) and (max-width: 979px) {
    margin-top: 20px;
    select {
      width: 30vw;
    }
  }
  @media only screen and (max-width: 767px) {
    margin-top: 15px;
    select {
      width: 28vw;
    }
  }
  @media (max-width: 480px) {
    margin-top: 20px;
    margin-bottom: 40px;
    select {
      width: 72vw;
    }
  }
  @media (max-width: 280px) {
    h1 {
      font-size: 1.6rem;
    }
  }
`;
