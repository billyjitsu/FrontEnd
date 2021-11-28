import styled, { css } from "styled-components";

export const HelperText = styled.p`
  font-size: 0.8rem;
  flex-basis: 100%;
  ${(props) =>
    props.error &&
    css`
      color: #b22222;
    `}
`;
