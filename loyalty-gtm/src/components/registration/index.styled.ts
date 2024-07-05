import styled from 'styled-components';
import { pxToRem } from "src/utils";

export const PageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 100px;
`;

export const LeftContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ImageMosaic = styled.div`
  width: inherit;
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-template-rows: repeat(1, 250px); /* Adjust height as needed */
  grid-gap: 10px 20px;
`;

export const ImageTile = styled.div<{ backgroundImage: string }>`
  background-color: #ccc; /* Placeholder color */
  background-size: cover;
  height: 250px; /* Adjust height as needed */
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  // content: "";  
  width: 180px;
  background-position: center;
  border-radius: 4px;
  margin-bottom: 0.4rem;
`;

export const RightContainer = styled.div`
 width: 30%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2em;
  color: #0058a3;
`;

export const Subtitle = styled.p`
  margin: 15px 0;
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
  margin-bottom: 20px;
`;
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MasterCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const SlaveCheckboxLabel = styled(MasterCheckboxLabel)`
  margin-left: 20px;
`;

export const CheckboxInput = styled.input`
  margin-right: 10px;
  width: 24px;
  height: 24px;
  accent-color: #0058a3;
`;

export const CheckboxText = styled.span`
  font-size: 1em;
  color: #333;
`;

export const Button = styled.button<{ variant: 'primary' | 'secondary' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #10375c;
  height: 43px;
  width: 240px; /* Added width property to make it round */
  padding: 12px 24px;
  font-family: 'lato', 'sans-serif';
  font-size: ${pxToRem(16)};
  font-weight: 700;
  cursor: pointer;
  margin-right: ${pxToRem(24)};
  border-radius: ${pxToRem(20)};

  ${({ variant }) =>
    variant === 'primary'
      ? `
      background: #10375c;
      color:#fff;
      box-shadow: 0 4px 16px 0 rgba(16, 55, 92, 0.32);

    `
      : `
      background: #ffff;
      color: ##10375c;
      border: 1px solid #10375c;
    `}
`