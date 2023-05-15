import styled from "styled-components";

export const ModalStyled = styled.section`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 2rem;

  top: 0;
  left: 0;
  right: 0;

  > div {
    background-color: var(--gray200);
    color: var(--gray000);

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.75rem 1.125rem;

    border-radius: 4px 4px 0 0;

    max-width: 369px;
    width: 100%;

    h3 {
      font-size: var(--font-size-2);
    }

    #closeModal {
      border: none;
      background-color: transparent;

      color: var(--gray100);

      cursor: var(--pointer);

      transition: 0.4s ease;
    }
    #closeModal:hover {
      transform: scale(1.3);
      color: var(--negative100);
    }
  }
  form {
    max-width: 369px;
    width: 100%;

    background-color: var(--gray300);
    color: var(--gray000);

    padding: 2rem 1.25rem;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    border-radius: 0px 0px 4px 4px;

    #titleUpdate {
      opacity: 0.5;
    }

    input,
    select {
      padding: 0.625rem 1rem;

      border: 1px solid var(--gray100);
      border-radius: 4px;

      background-color: var(--gray300);
      color: var(--gray000);

      margin-bottom: 1rem;
    }

    select {
      cursor: var(--pointer);
    }
    button {
      border: none;
      border-radius: 4px;

      background-color: var(--brand100);
      color: var(--gray000);

      padding: 0.625rem;

      cursor: var(--pointer);

      transition: 0.4s ease;
    }
    button:hover {
      background-color: var(--brand200);
    }
  }

  section {
    max-width: 369px;
    width: 100%;

    background-color: var(--gray300);
    color: var(--gray000);

    padding: 2rem 1.25rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    border-radius: 0px 0px 4px 4px;

    h3 {
      font-size: var(--font-size-3);
    }

    div {
      background-color: transparent;

      display: flex;
      justify-content: space-between;

      width: 100%;
    }

    button {
      border: none;
      border-radius: 4px;

      color: var(--gray000);

      padding: 1rem;

      width: 45%;

      cursor: var(--pointer);

      transition: 0.4s ease;
    }
    button:nth-child(1) {
      background-color: var(--gray400);
    }
    button:nth-child(1):hover {
      background-color: var(--gray200);
      color: var(--negative100);
    }
    button:nth-child(2) {
      background-color: var(--brand100);
    }
    button:nth-child(2):hover {
      background-color: var(--brand200);
    }
  }
`;
