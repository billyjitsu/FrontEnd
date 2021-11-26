import styled from "styled-components";
import { artists } from "../data/artists";
import { Button } from "./Button";
import Bee from "../assets/bees/artist1.png";

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
  padding: 2rem;
  border-radius: 16px;
  max-width: 800px;
  background: ${(p) => p.theme.colors.white};
  margin: 1rem;
  box-shadow: ${(p) => p.theme.boxShadow.low};
  :hover {
    box-shadow: ${(p) => p.theme.boxShadow.medium};
  }
  img {
    width: 24rem;
  }
  a {
    color: ${(p) => p.theme.colors.greyMedium};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    align-items: center;
    padding: 0.5rem;
    margin: 0 0 1rem 0;
    flex-direction: column-reverse;
    max-width: 100%;
    img {
      width: 10rem;
    }
  }
`;

const ArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h3 {
    margin: 0;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    align-items: center;
    padding: 1rem;
    h3 {
      margin-top: 1rem;
    }
    p {
      width: 100%;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    align-items: center;
    justify-content: center;
    padding: 1rem;
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
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    flex-direction: column;
    button {
      width: 100%;
      margin-right: 0;
      :first-of-type {
        margin-bottom: 0.5rem;
      }
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
              <a href={data.communityUrl} rel={"noreferrer"} target="_blank">
                {data.community}
              </a>
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
    </Gallery>
  );
};

export default ArtistGallery;
