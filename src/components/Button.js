import styled, { css } from "styled-components";

export const Button = styled.button.attrs((props) => ({
  type: props.type || "button",
}))`
  cursor: pointer;
  padding: 0.75rem 1rem;
  border-radius: 50px;
  border: none;
  background-color: ${(p) => p.theme.colors.yellowBase};
  color: ${(p) => p.theme.colors.greyDark};
  transition: all 0.3s ease;
  font-weight: bold;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 0.5rem 1rem;
  }
  :hover {
    color: ${(p) => p.theme.colors.greyDark};
    background-color: ${(p) => p.theme.colors.yellowLight};
  }
  ${(props) =>
    props.icon &&
    css`
      padding: 0.5rem 0.6rem;
      ::first-child {
        align-self: center;
      }
    `}
  ${(props) =>
    props.secondary &&
    css`
      border: solid 2px ${(p) => p.theme.colors.yellowBase};
      background: none;
      color: ${(p) => p.theme.colors.greyDark};
    `}
`;
