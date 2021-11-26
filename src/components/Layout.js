import styled from "styled-components";

const Container = styled.body`
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export default function Layout({ children }) {
  return <Container>{children}</Container>;
}
