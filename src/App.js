import styled from "styled-components";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ArtistGallery from "./components/ArtistGallery";
import Minter from "./components/Minter";

const Main = styled.main`
  padding: 4rem;

  section {
    margin-bottom: 4rem;
    :last-of-type {
      margin-bottom: 0;
    }
  }
  p {
    width: clamp(50ch, 50%, 60ch);
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
            A Collection of Bees. Each one unique. Mint yours now. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nunc vestibulum
            dictumst vel vitae cras morbi cursus in. Et sapien, eget fringilla
            quis gravida ligula.
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
