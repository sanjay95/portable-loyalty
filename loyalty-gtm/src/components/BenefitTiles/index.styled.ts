import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  margin: 30px -20px;
`;

export const ScrollableTiles = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 20px 0;
`;

export const Tile = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  min-width: 300px;
  max-width: 300px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const TileImage = styled.img`
  width: 100%;
  height: auto;
`;

export const TileContent = styled.div`
  padding: 16px;
`;

export const TileTitle = styled.h3`
  margin: 0;
  font-size: 1.2em;
  color: #0078d7;
`;

export const TileDescription = styled.p`
  margin: 10px 0 0;
  color: #555;
`;
