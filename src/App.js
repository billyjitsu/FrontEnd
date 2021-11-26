import styled from "styled-components";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ArtistGallery from "./components/ArtistGallery";
import Minter from "./components/Minter";

const Main = styled.main`
  padding: 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    max-width: 100%;
    padding: 0.5rem;
  }
  section {
    margin-bottom: 4rem;
    :last-of-type {
      margin-bottom: 0;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      max-width: 100%;
      padding: 0.5rem;
      margin-bottom: 1rem;
    }
  }
  p {
    width: clamp(50ch, 50%, 60ch);
    max-width: 100%;
    word-break: break-word;
  }
`;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
  }
`;

const App = () => {
  return (
    <Layout>
      <Nav />
      <Main>
        <Hero>
          <h1>NFBeez</h1>
          <p>
            {" "}
            A Collection of unique animated bees by the 1hive community.
            <br />
            <strong>Mint yours now.</strong>
          </p>
          <Minter />
        </Hero>
        <ArtistGallery />
      </Main>

      <Footer />
    </Layout>
  );
};

export default App;
