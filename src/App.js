import styled from "styled-components";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ArtistGallery from "./components/ArtistGallery";
import Minter from "./components/web3/Minter";

const Main = styled.main`
  padding: clamp(0.5rem, 2rem, 4rem);
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
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 0.5rem;
  }
`;

const App = () => {
  return (
    <Layout>
      <Nav focusMinter />
      <Main>
        <Hero>
          <h1>NFBeez</h1>
          <p>
            {" "}
            A Collection of unique animated bees by the 1hive community.
            <br />
            <strong>Mint yours now.</strong>
          </p>
          <Minter id="minter" />
        </Hero>
        <ArtistGallery />
      </Main>

      <Footer />
    </Layout>
  );
};

export default App;
