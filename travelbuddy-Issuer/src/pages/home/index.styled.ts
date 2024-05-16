import styled from "styled-components";
import Box from "src/components/common/Box/Box";
import { pxToRem } from "src/utils";

export const Wrapper = styled.div`
  min-height: 100%;
  padding: 1rem ${pxToRem(80)};
`;

export const TileWrapper = styled(Box)`
  span {
    width: ${pxToRem(138)};
    margin-top: ${pxToRem(3)};
    border-top: 4px solid #ff5722;
  }
`;
export const TileContainer = styled(Box)``;

export const TileHeader = styled.div`
  font-family: "lato", "sans-serif";
  font-weight: 700;
  font-size: ${pxToRem(25)};
  margin-top: ${pxToRem(10)};
`;

export const Title = styled.div`
  font-weight: 700;
  margin-bottom: ${pxToRem(10)};
  i {
    color: #ff5722 
  }
`;

export default Title