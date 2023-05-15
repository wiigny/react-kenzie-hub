import styled from "styled-components";

export const NotFoundStyled = styled.div`
  background-color: var(--gray400);
  color: var(--gray000);

  font-size: 150%;

  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation: redirect 2s ease forwards;

  @keyframes redirect {
    from {
      background-color: var(--gray400);
      color: var(--gray000);
    }
    to {
      background-color: black;
      color: black;
    }
  }
`;
