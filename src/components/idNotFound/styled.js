import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);

  button {
    margin-top: 1rem;
    border: 1px solid;
    border-radius: 5px;
    background-color: rgba(0, 187, 250, 0.35);
    padding: 0.5rem 1rem;
    font-weight: bold;
    cursor: pointer;
  }
`;
