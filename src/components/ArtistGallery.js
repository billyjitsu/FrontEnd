import styled from "styled-components";
import { artists } from "../data/artists";
import { Button } from "./Button";
import Bee from "./../assets/bees/artist1.png";

const Gallery = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  grid-gap: 32 px;
  margin-bottom: 32 px;
`;

const Card = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 32px;
  border-radius: 16px;
  max-width: 800px;
  background: ${(p) => p.theme.colors.creamLightest};
  margin: 1rem;
  img {
    width: 15rem;
  }
`;

const ArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h3 {
    margin: 0;
  }
`;

const ArtistLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  button {
    :first-of-type {
      margin-right: 1rem;
    }
  }
`;

const ArtistGallery = () => {
  console.log(artists[1].artist);
  return (
    <Gallery>
      <h2>Artists</h2>
      {artists.length !== 0 &&
        artists.map((data) => (
          <Card key={data.name + data.community}>
            <ArtistInfo>
              <h3>{data.name}</h3>
              <p>{data.bio}</p>
              <ArtistLinks>
                <a
                  href={data.marketplaceUrl}
                  rel={"noreferrer"}
                  target="_blank"
                >
                  <Button secondary>Marketplace</Button>
                </a>
                <a href={data.portfolioUrl} rel={"noreferrer"} target="_blank">
                  <Button secondary>Portfolio</Button>
                </a>
              </ArtistLinks>
            </ArtistInfo>
            <img src={Bee} alt={`${data.name}'s best bee`} />
          </Card>
        ))}
      {artists.length !== 0 &&
        artists.map((data) => (
          <Card key={data.name + data.community}>
            <ArtistInfo>
              <h3>{data.name}</h3>
              <p>{data.bio}</p>
              <ArtistLinks>
                <a
                  href={data.marketplaceUrl}
                  rel={"noreferrer"}
                  target="_blank"
                >
                  <Button>Marketplace</Button>
                </a>
                <a href={data.portfolioUrl} rel={"noreferrer"} target="_blank">
                  <Button>Portfolio</Button>
                </a>
              </ArtistLinks>
            </ArtistInfo>
            <img src={Bee} alt={`${data.name}'s best bee`} />
          </Card>
        ))}
    </Gallery>
  );
};

export default ArtistGallery;
