import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 180px 200px 180px;
  height: auto;
  background-color: #cbf3ac;

  .rec-arrow-left:hover,
  .rec-arrow-right:hover {
    background: #cbf3ac;
  }

  .rec-dot {
    box-shadow: 0 0 1px 2px #bbbbbb;
  }

  .rec-dot_active {
    box-shadow: 0 0 1px 3px #bbbbbb;
  }

  .rec:hover:enabled,
  .rec:focus:enabled {
    background: #a9eb77;
  }

  .rec-dot:hover:enabled,
  .rec-dot:focus:enabled {
    background: #8b8b8b;
    box-shadow: 0 0 1px 3px #bbbbbb;
  }

  @media (max-width: 1200px) {
    padding: 90px 7vw 200px 7vw;
  }

  @media (min-width: 768px) and (max-width: 979px) {
    padding: 90px 7vw 170px 7vw;
  }

  @media (max-width: 480px) {
    padding: 90px 0;
  }
`;
