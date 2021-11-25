import styled, { css } from "styled-components";

export const Button = styled.button.attrs((props) => ({
  type: props.type || "button",
}))`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  border: none;
  background-color: ${(p) => p.theme.colors.salmonBase};
  color: ${(p) => p.theme.colors.greyDark};
  transition: all 0.3s ease;
  font-weight: bold;
  :hover {
    color: ${(p) => p.theme.colors.greyDark};
    background-color: ${(p) => p.theme.colors.salmonLight};
  }
`;
