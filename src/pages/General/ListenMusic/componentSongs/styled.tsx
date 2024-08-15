import styled from "styled-components";

//SongCards
export const BoxPlay = styled.div<{ song?: string }>`
  position: absolute;
  inset: 0;
  justify-content: center;
  align-items: center;
  :hover {
    display: ${({ song }) => song ?? "flex"};
    background-color: ${({ song }) => song ?? "white"};
    opacity: ${({ song }) => song ?? "0.5"};
  }
`;

export const BoxCard = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

//Top play
export const CardsTopCharts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  :hover {
    background-color: #3f58c5;
  }
`;

export const ContainerGeneralTopChart = styled.div`
  margin-left: 0;
  margin-bottom: 6px;
  flex: 1;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const DivParagraphTopPlay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const H2DivTopPlay = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 1.75rem;
  font-family: sans-serif;
`;

export const ParagraphSeeMore = styled.p`
  color: #d1d5db;
  font-size: 1rem;
  cursor: pointer;
  font-family: sans-serif;
`;

export const DivDataPlays = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const H3DivTopPlays = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5rem;
  color: white;
  text-decoration: none;
  margin-right: 16px;
`;
export const DivTopSongs = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
`;

export const DivDetailTopSongs = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3px;
  margin-right: 3px;
`;

export const ParagraphSongMore = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

export const ParagraphSongArtistName = styled.p`
  font-size: 1rem;
  color: #d1d5db;
  margin-top: 0.25rem;
  text-decoration: none;
  font-family: sans-serif;
`;
