
import React, { useState } from 'react';
import {
    Container,
    ScrollableTilesContainer,
    ScrollableTiles,
    TileLink,
    Tile,
    TileImage,
    TileContent,
    TileTitle,
    TileDescription,
    Arrow,
    NavigationButton
} from './index.styled' // Assuming the 'styled' file is located in the parent directory

// If the 'styled' file is located in a different directory, adjust the relative path accordingly

const tiles = [
    {
        title: "Member-only discounts & offers",
        description: "Discounts on products, both in-store and online.",
        imgSrc: "https://www.ikea.com/images/e8/c7/e8c7b87ec277d0899bd6d3f797544b85.jpg",
    },
    {
        title: "Early access to Smart Sale",
        description: "Access the Smart Living Sale before everyone else.",
        imgSrc: "https://www.ikea.com/images/e8/c7/e8c7b87ec277d0899bd6d3f797544b85.jpg",
    },
    {
        title: "Birthday offers",
        description: "Special prices on your birthday.",
        imgSrc: "https://www.ikea.com/images/e8/c7/e8c7b87ec277d0899bd6d3f797544b85.jpg",
    },
    {
        title: "Free workshops & events",
        description: "Launch preview, home automation tips and much more.",
        imgSrc: "https://www.ikea.com/images/e8/c7/e8c7b87ec277d0899bd6d3f797544b85.jpg",
    },
    {
        title: "Purchase History",
        description: "Instant access to past invoices anytine, anywhere.",
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
    arrowSrc: string;
}

const TileComponent = ({ title, description, imgSrc, arrowSrc }: TileProps) => (
    <TileLink href='/sign-in' target="_blank" rel="noopener noreferrer">
        <Tile>
            <TileImage src={imgSrc} alt={title} />
            <TileContent>
                <TileTitle>{title}</TileTitle>
                <TileDescription>{description}</TileDescription>
                <Arrow style={{ backgroundImage: `url(${arrowSrc})` }} />
            </TileContent>
        </Tile>
    </TileLink>
);


const BenefitTiles = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 3 >= 0 ? prevIndex - 3 : 0));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3 < tiles.length ? prevIndex + 3 : prevIndex));
    };

    return (
        <Container>
            <ScrollableTilesContainer>
                <NavigationButton onClick={handlePrevClick} disabled={currentIndex === 0}>
                    &lt;
                </NavigationButton>
                <ScrollableTiles>
                    {tiles.slice(currentIndex, currentIndex + 3).map((tile, index) => (
                        <TileComponent key={index} {...tile} />
                    ))}
                </ScrollableTiles>
                <NavigationButton onClick={handleNextClick} disabled={currentIndex + 3 >= tiles.length}>
                    &gt;
                </NavigationButton>
            </ScrollableTilesContainer>
        </Container>
    );
};

export default BenefitTiles;
