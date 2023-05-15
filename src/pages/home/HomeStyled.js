import styled from "styled-components";

export const HomeStyled = styled.div`
  background-color: var(--gray400);

  body {
    position: relative;
  }

  .container {
    width: 80vw;
    max-width: 1200px;

    margin: 0 auto;
  }

  header {
    padding: 100px 0 0 0;
    color: var(--gray000);

    border-bottom: 2px solid var(--gray200);

    animation: insertContent 0.5s ease forwards;
  }

  header > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-bottom: 30px;
  }

  header > div h1 {
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-700);
  }

  header > div p {
    font-size: var(--font-size-4);
    color: var(--gray100);
  }

  header nav button {
    padding: 0.75rem 1rem;

    text-decoration: none;
    text-align: center;

    color: var(--gray000);
    background-color: var(--gray300);

    border: none;
    border-radius: 4px;

    cursor: var(--pointer);

    transition: 0.3s ease-in-out;
  }

  header nav button:hover {
    background-color: var(--gray200);
  }

  header nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;

    height: 70px;

    border-bottom: 2px solid var(--gray200);
    background-color: var(--gray400);
  }
  header nav div {
    display: flex;
    justify-content: space-between;
  }

  main {
    padding: 50px 0;

    color: var(--gray000);
    height: 1000px;

    animation: insertContent 0.5s ease forwards;
  }
  main > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  main > div h2 {
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-600);
  }

  main #listTechs > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-bottom: 1.7rem;
  }
  main #listTechs > div button {
    border: none;
    border-radius: 4px;

    background-color: var(--gray300);

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.875rem 1rem;

    cursor: var(--pointer);

    transition: 0.4s ease;
  }
  main #listTechs > div button:hover {
    background-color: var(--gray200);
  }

  main #listTechs ul {
    background-color: var(--gray300);

    display: flex;
    flex-direction: column;
    gap: 1rem;

    border-radius: 4px;

    padding: 1.4rem;
  }
  main #listTechs li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 4px;

    background-color: var(--gray400);

    padding: 0.875rem 1.25rem;

    transition: 0.4s ease;

    h3 {
      font-size: var(--font-size-3);
      font-weight: var(--font-weight-700);
    }
    p {
      color: var(--gray100);
      font-size: var(--font-size-4);
      font-weight: var(--font-weight-400);
    }

    div {
      display: flex;
      gap: 1.5rem;

      button {
        border: 1px solid transparent;
        border-radius: 4px;

        background-color: transparent;
        color: white;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 0.2rem;

        cursor: var(--pointer);

        transition: 0.4s ease;
      }

      button:hover {
        border-color: var(--brand100);
      }
    }
  }
  main #listTechs li:hover {
    background-color: var(--gray200);
  }

  @media (max-width: 800px) {
    header > div {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }

  @media (max-width: 500px) {
    .container {
      width: 90vw;
    }
  }
`;
