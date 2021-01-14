import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("banner-min.jpg");
  background-position: 0% 40%;
  background-size: 130%;
  background-repeat: no-repeat;
  /* object-fit: cover; */
  display: flex;
  background-attachment: fixed;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 470px;
  height: auto;
  padding: 120px 0 20px 120px;

  h1 {
    font-size: 300%;
    padding: 20px 0;
  }

  p {
    font-size: 120%;
  }
`;

export const FindLocal = styled.div`
  margin-top: 60px;
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
`;
