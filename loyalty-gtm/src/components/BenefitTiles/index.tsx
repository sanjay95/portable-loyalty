import React from 'react';
import {
  Container,
  ScrollableTiles,
  Tile,
  TileImage,
  TileContent,
  TileTitle,
  TileDescription
} from './index.styled' // Assuming the 'styled' file is located in the parent directory

// If the 'styled' file is located in a different directory, adjust the relative path accordingly

const tiles = [
  {
    title: "Member-only discounts & offers",
    description: "Discounts on products, both in-store and online.",
    imgSrc: "https://www.ikea.com/images/e8/c7/e8c7b87ec277d0899bd6d3f797544b85.jpg",
  },
  {
    title: "Early access to IKEA Sale",
    description: "Access the IKEA Sale before everyone else.",
    imgSrc: "https://www.ikea.com/images/e8/c7/e8c7b87ec277d0899bd6d3f797544b85.jpg",
  },
  {
    title: "Delicious food offers",
    description: "Special prices on yummy meals.",
    imgSrc: "https://www.ikea.com/images/e8/c7/e8c7b87ec277d0899bd6d3f797544b85.jpg",
  },
  {
    title: "Member-only discounts & offers",
    description: "Discounts on products, both in-store and online.",
    imgSrc: "https://www.ikea.com/images/e8/c7/e8c7b87ec277d0899bd6d3f797544b85.jpg",
  },
  {
    title: "Early access to IKEA Sale",
    description: "Access the IKEA Sale before everyone else.",
    imgSrc: "https://www.ikea.com/images/e8/c7/e8c7b87ec277d0899bd6d3f797544b85.jpg",
  },
  {
    title: "Delicious food offers",
    description: "Special prices on yummy meals.",
    imgSrc: "https://www.ikea.com/images/e8/c7/e8c7b87ec277d0899bd6d3f797544b85.jpg",
  },
  {
    title: "Member-only discounts & offers",
    description: "Discounts on products, both in-store and online.",
    imgSrc: "https://www.ikea.com/images/e8/c7/e8c7b87ec277d0899bd6d3f797544b85.jpg",
  },
  {
    title: "Early access to IKEA Sale",
    description: "Access the IKEA Sale before everyone else.",
    imgSrc: "https://www.ikea.com/images/e8/c7/e8c7b87ec277d0899bd6d3f797544b85.jpg",
  },
  {
    title: "Delicious food offers",
    description: "Special prices on yummy meals.",
    imgSrc: "https://www.ikea.com/images/e8/c7/e8c7b87ec277d0899bd6d3f797544b85.jpg",
  },
];

interface TileProps {
  title: string;
  description: string;
  imgSrc: string;
}

const TileComponent: React.FC<TileProps> = ({ title, description, imgSrc }) => (
  <Tile>
    <TileImage src={imgSrc} alt={title} />
    <TileContent>
      <TileTitle>{title}</TileTitle>
      <TileDescription>{description}</TileDescription>
    </TileContent>
  </Tile>
);

const BenefitTiles = () => {
  return (
    <Container>
      <ScrollableTiles>
        {tiles.map((tile, index) => (
          <TileComponent key={index} {...tile} />
        ))}
      </ScrollableTiles>
    </Container>
  );
};

export default BenefitTiles;
