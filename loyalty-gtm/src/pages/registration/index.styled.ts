import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const LeftContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
`;

export const ImageTile = styled.div`
  width: 100%;
  height: 200px; /* Adjust height as needed */
  background-color: #ccc; /* Placeholder color */
  margin-bottom: 20px; /* Space between images */
  background-size: cover;
  background-position: center;
`;

export const RightContainer = styled.div`
  width: 45%;
`;

export const Title = styled.h1`
  font-size: 2em;
  color: #0058a3;
`;

export const Subtitle = styled.p`
  margin: 10px 0;
`;

export const Link = styled.a`
  color: #0058a3;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Select = styled.select`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const InfoIcon = styled.span`
  margin-left: 10px;
  cursor: pointer;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const HelperText = styled.p`
  font-size: 0.9em;
  color: #555;
`;

export const ArrowBack = styled.div`
  width: 24px;
  height: 24px;
  background-image: url('/path-to-your-back-arrow-image.png'); /* Adjust as needed */
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;
