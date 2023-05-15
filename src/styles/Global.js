import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root{
        --brand100:         #FF577F;
        --brand200:         #FF427F;
        --brand-negative:    #59323F;

        --gray000:          #F8F9FA;
        --gray100:          #868E96;
        --gray200:          #343B41;
        --gray300:          #212529;
        --gray400:          #121214;

        --sucess100:        #3FE864;
        --negative100:      #E83F5B;

        --font-size-1: 1.125rem; /* 18px */
        --font-size-2:     1rem; /* 16px */
        --font-size-3:  .875rem; /* 14px */
        --font-size-4:   .75rem; /* 12px */
        --font-size-5:  .625rem; /* 10px */

        --font-weight-100: 100 ;
        --font-weight-200: 200 ;
        --font-weight-300: 300 ;
        --font-weight-400: 400 ;
        --font-weight-500: 500 ;
        --font-weight-600: 600 ;
        --font-weight-700: 700 ;
        --font-weight-800: 800 ;
        --font-weight-900: 900 ;

        --pointer: pointer;
    }

    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ::-webkit-scrollbar{
      background-color: var(--gray400);
      width: 0.8rem;

      
    }
    ::-webkit-scrollbar-thumb{
      background-color: var(--gray300);
      border-radius: 50px;
    }

    @media (max-width: 800px){
        *{
            font-size: 98%;
        }
    }

    @keyframes insertContent {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
