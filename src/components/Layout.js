import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4rem;
`;

export default function Layout({ children }) {
  return <Container>{children}</Container>;
}
