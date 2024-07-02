import styled from 'styled-components';
import { pxToRem } from 'src/utils';
import Box from '../common/Box/Box';

export const Container = styled(Box)`
  padding: ${pxToRem(28)} ${pxToRem(16)};
  height: ${pxToRem(32)};

  @media (min-width: 1024px) {
    padding: ${pxToRem(28)} ${pxToRem(80)};
    height: ${pxToRem(72)};
  }
`;

export const NavigationContainer = styled(Box)``;

export const Title = styled.div`
  color: #10375c; /* Changed color to white */
  font-size: ${pxToRem(24)};
  font-family: 'playfair-display', 'sans-serif';
  font-weight: 700;
  user-select: none;
  cursor: pointer;
`;

export const SearchBar = styled.input.attrs({
  placeholder: "What are you looking for?", // Adding placeholder text
})`
  padding: ${pxToRem(8)} ${pxToRem(32)}; // Adjust right padding to make space for the icon
  border-radius: ${pxToRem(20)}; // Increased border-radius for rounded corners
  border: 1px solid #ccc; /* Adjust color as needed */
  font-family: 'lato', 'sans-serif';
  font-size: ${pxToRem(16)};
  margin-left: ${pxToRem(16)};
  width: ${pxToRem(300)};
  height: ${pxToRem(50)};
  outline: none;
  transition: 0.3s;
  background-image: url('images/searching-magnifying-glass.png'); // Path to your icon
  background-repeat: no-repeat;
  background-position: right 10px center; // Position the icon inside the input on the right
  background-size: ${pxToRem(16)}; // Adjust size of the icon as needed

  &:focus {
    border: 1px solid #10375c; /* Adjusted focus border color */
  }

  @media (min-width: 1024px) {
    width: ${pxToRem(400)};
  }
`;

export const NavTabs = styled.div`
  color: #10375c; /* Changed color to white */
  margin-right: ${pxToRem(40)};
  font-family: 'lato', 'sans-serif';
  width: max-content;
  font-weight: 700;
  cursor: pointer;
  font-size: 16px;
`;

export const Button = styled.button<{ variant: 'primary' | 'secondary' }>`
  background: #fff;
  padding: 12px 24px;
  color: #ff5722;
  font-family: 'lato', 'sans-serif';
  cursor: pointer;
  border: 0px;

  button:nth-of-type(1) {
    margin-right: ${pxToRem(12)};
  }

  ${({ variant }) =>
    variant === 'primary'
      ? `
      background: #fff;
      color:#ff5722;
      font-weight: bold;
    `
      : `
      background: #ff5722;
      color: #fff;
    `}
`;

export const Account = styled(Box)`
  cursor: pointer;
`;

export const Avatar = styled.div`
  width: ${pxToRem(32)};
  height: ${pxToRem(32)};
  background-color: #10375c;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${pxToRem(16)};
  
  img {
    object-fit: cover;
    object-position: center center;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`;

export const Email = styled.div`
  color: #222831; /* Changed color to white */
  font-size: ${pxToRem(16)};
  font-family: 'lato', 'sans-serif';
  font-weight: 700;
`;

export const Loading = styled.div`
  color: #222831; /* Changed color to white */
  font-size: ${pxToRem(16)};
  font-family: 'lato', 'sans-serif';
  font-weight: 700;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc; /* Adjust color as needed */
`;
