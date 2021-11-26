import { createGlobalStyle } from "styled-components";
import Background from "../assets/bg.svg";

const turquoiseBase = "#7ce0d6";
const turquoiseLight = "#B0ECE6";
const turquoiseLightest = "#B0ECE6";
const greenBase = "#71EEB8";
const greenLight = "#AAF5D4";
const greenLightest = "#C6F8E3";
const yellowBase = "#FFDD0F";
const yellowLight = "#FFEB6F";
const yellowLightest = "#FFF19F";
const salmonBase = "#FF9B73";
const salmonLight = "#FFC3AB";
const salmonLightest = "#FFD7C7";
const creamBase = "#F7F7CE";
const creamLight = "#FAFAE2";
const creamLightest = "#FCFCEB";
const greyDark = "#2C3437";
const greyMedium = "#818181";
const grey = "#979797";
const greyLight = "#C8C8C9";
const greyLightest = "#E9E9E9";
const greyBasic = "#F1F1F1";
const rainbow =
  "linear-gradient(112.02deg, #B0ECE6 -52.44%, #C6F8E3 3.69%, #FFD7C7 60.24%, #FFF19F 97.59%)";

export const theme = {
  colors: {
    turquoiseBase,
    turquoiseLight,
    turquoiseLightest,
    greenBase,
    greenLight,
    greenLightest,
    yellowBase,
    yellowLight,
    yellowLightest,
    salmonBase,
    salmonLight,
    salmonLightest,
    creamBase,
    creamLight,
    creamLightest,
    greyDark,
    greyMedium,
    grey,
    greyLight,
    greyLightest,
    greyBasic,
    rainbow,
  },
  fontSizes: {
    // based on typical browser default font size of 16px
    xs: "0.75rem", // 12px
    s: "0.875rem", // 14px
    m: "1rem", // 16px
    r: "1.125rem", // 18px
    l: "1.5rem", // 24px
    xl: "2rem", // 32px
  },
  breakpoints: {
    xs: "320px",
    s: "414px",
    m: "768px",
    l: "1024px",
    xl: "1440px", // Used as the max-width
  },
};

export const GlobalStyle = createGlobalStyle`
*{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: ${(p) => p.theme.fontSizes.m};
  overflow-x: hidden;
}
body{
    background-color: ${(p) => p.theme.colors.turquoiseLightest};
    background: url(${Background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    font-family: 'Ubuntu',sans-serif;
    color: ${(p) => p.theme.colors.greyDark};
    ::-webkit-scrollbar {
    width: 1em;
    background-color: ${(p) => p.theme.colors.creamLightest};
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${(p) => p.theme.colors.greenBase};
        border-radius: 10px;
    }
    
}

a{
  text-decoration: none;
  font-family: Ubuntu;
  font-style: normal;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.06em;
}

/* unvisited link */
a:link {
  color: ${(p) => p.theme.colors.greyDark};
}

/* visited link */
a:visited {
  color: ${(p) => p.theme.colors.greyDark + 80};
}

/* mouse over link */
a:hover {
  color: ${(p) => p.theme.colors.greyMedium};
}

/* selected link */
a:active {
  color: ${(p) => p.theme.colors.greyMedium};
  font-weight: bold;
}

h1 {
    font-size: 3rem;
    line-height: 1.4;
    margin: 2rem 0;
    font-weight: 700;
    @media (max-width: ${theme.breakpoints.m}) {
      font-size: 2.5rem;
    }
  }
  
  h2 {
    font-size: 2rem;
    line-height: 1.4;
    margin: 2rem 0;
    margin-top: 3rem;
    font-weight: 600;
    @media (max-width: ${theme.breakpoints.m}) {
      font-size: 1.5rem;
    }
  }
  
  h3 {
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 2rem 0;
    margin-top: 2.5rem;
    font-weight: 600;
    @media (max-width: ${theme.breakpoints.m}) {
      font-size: 1.25rem;
    }
  }
  
  h4 {
    font-size: 1.25rem;
    line-height: 1.4;
    font-weight: 500;
    margin: 2rem 0;
    @media (max-width: ${theme.breakpoints.m}) {
      font-size: 1rem;
    }
  }
  
  h5 {
    font-size: 1rem;
    line-height: 1.4;
    font-weight: 450;
    margin: 2rem 0;
  }
  h6 {
    font-size: 0.9rem;
    line-height: 1.4;
    font-weight: 400;
    text-transform: uppercase;
    margin: 2rem 0;
  }

  button{
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.05rem;
    text-transform: capitalize;
  }
`;
