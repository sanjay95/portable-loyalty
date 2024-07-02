import styled from "styled-components";
import Box from "src/components/common/Box/Box";
import { pxToRem } from "src/utils";

export const Wrapper = styled.div`
  min-height: 100%;
  padding: 1rem ${pxToRem(80)};
`;

export const TileWrapper = styled(Box)`
  span {
    width: ${pxToRem(900)};
    margin-top: ${pxToRem(3)};
  }
`;
export const TileContainer = styled(Box)``;

export const TileHeader = styled.div`
  font-family: "lato", "sans-serif";
  font-weight: 700;
  font-size: ${pxToRem(32)};
  margin-top: ${pxToRem(65)};
`;


export const ButtonContainer = styled(Box)`
  margin-top: ${pxToRem(48)};
`

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
export const SubscribeLink = styled.div`
  margin-top: ${pxToRem(32)};
  font-size: ${pxToRem(16)};
  font-family: 'lato', sans-serif;
  font-weight: 400;
  text-decoration: underline;
  color: #10375c;
  cursor: pointer;
`

export default Button