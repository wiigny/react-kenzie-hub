import styled from "styled-components";

export const RegisterStyled = styled.div`
  background-color: var(--gray400);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  padding: 40px 0px;

  header {
    width: 100%;
    max-width: 369px;

    display: flex;
    justify-content: space-between;
  }

  header a {
    padding: 0.75rem 1rem;

    text-decoration: none;
    text-align: center;

    color: var(--gray000);
    background-color: var(--gray300);

    border-radius: 4px;

    cursor: var(--pointer);

    transition: 0.3s ease-in-out;
  }
  header a:hover {
    background-color: var(--gray200);
  }

  main {
    width: 90vw;
    margin: 0 auto;

    display: flex;
    justify-content: center;

    animation: insertContent 1s ease forwards;
  }
  main form {
    border-radius: 4px;

    background-color: var(--gray300);
    color: var(--gray000);

    padding: 42px 22px;

    display: flex;
    flex-direction: column;
    gap: 25px;

    width: 100%;
    max-width: 369px;
  }
  main form h2 {
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-700);
    text-align: center;
  }
  main form p {
    font-size: var(--font-size-4);
    font-weight: var(--font-weight-600);

    color: var(--gray100);

    text-align: center;
  }
  main form span {
    font-size: var(--font-size-5);
    font-weight: var(--font-weight-400);

    color: var(--negative100);
  }
  main form label {
    font-size: var(--font-size-4);
    font-weight: var(--font-weight-400);
  }

  main form input,
  main form select {
    border-radius: 4px;
    border: 2px solid var(--gray100);
    background-color: var(--gray200);
    color: var(--gray000);

    padding: 0.675rem 1rem;
  }
  main form input:focus {
    border-color: var(--gray000);
  }

  main form button {
    border: none;

    color: var(--gray000);
    background-color: var(--brand100);
    border-radius: 4px;

    padding: 0.75rem 0px;

    cursor: var(--pointer);

    transition: 0.3s ease-in-out;
  }
  main form button:hover {
    background-color: var(--brand200);
  }
`;
