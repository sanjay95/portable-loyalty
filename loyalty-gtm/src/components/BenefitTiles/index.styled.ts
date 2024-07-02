import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ScrollableTilesContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ScrollableTiles = styled.div`
  display: flex;
  overflow: hidden;
  padding: 20px 0;
  width: 960px; /* 3 tiles * 320px each */
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
  background-color: #f9f9f9; /* different color than white */
  position: relative;
`;

export const TileTitle = styled.h3`
  margin: 0;
  font-size: 1.2em;
  color: #0078d7;
  &:hover {
    text-decoration: underline;
  }
`;

export const TileDescription = styled.p`
  margin: 10px 0 0;
  color: #555;
`;

export const Arrow = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  width: 20px;
  height: 20px;
  background-image: url('your-arrow-icon-url'); /* replace with your arrow icon URL */
  background-size: contain;
  background-repeat: no-repeat;
`;

export const NavigationButton = styled.button`
  background-color: #0078d7;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 10px;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
