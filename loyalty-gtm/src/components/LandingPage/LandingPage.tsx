import React, { useState } from "react";
import { Button, Container, createTheme, FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup, TextField, ThemeProvider } from "@mui/material";
import FlightBookingForm from "../BookingForm/BookingForm";
import FlightDeals from "../BookingForm/deals";
import BenefitCard from "../BenefitCard/BenefitCard"
import { BenefitList, Benefits, Header } from "../BenefitCard/BenefitCard.styled";
import HeroBanner from "../HeroBanner";
import Product from "../Product";
interface Benefit {
  imageUrl: string | undefined;
  title: string;
  description: string;
}
const theme = createTheme({
  typography: {
    fontSize: 25,
  },
});
const LandingPage = () => {
  // const benefits: Benefit[] = [
  //   { title: 'Earn Cashback', description: 'Get cashback on every booking.', imageUrl: 'https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg' },
  //   { title: 'Exclusive Discounts', description: 'Enjoy exclusive discounts on hotels and flights.', imageUrl: 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg' },
  //   { title: 'Network Partners Benefits', description: 'Feel valued at other stores @airports', imageUrl: 'https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg' },
  //   { title: 'Free Room Upgrades', description: 'Subject to availability, enjoy complimentary room upgrades.', imageUrl: 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg' },
  //   { title: 'Special Offers', description: 'Be the first to access exclusive deals and promotions.', imageUrl: 'https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg' },
  // ];
  const aa = [
    {
      "product": "Headphone Legendary Edition",
      "_rev": "oP7Am8Gpqebc06oyUCLrnY",
      "smallText": "MORE ABOUT",
      "_type": "banner",
      "discount": "25% OFF",
      "midText": "Summer Sale",
      "_createdAt": "2022-10-04T15:36:54Z",
      "_id": "2693dbcf-684d-4df4-a925-7e53fc5c12ae",
      "slug": {
        "current": "headphone-legendary-edition",
        "_type": "slug"
      },
      "desc": "Active noise cancellation",
      "buttonText": "BUY NOW",
      "image": {
        "_type": "image",
        "asset": {
          "_type": "reference",
          "_ref": "image-058225fc820fe15a1c63697367a905959a5f32a6-555x555-webp"
        }
      },
      "largeText1": "HOT",
      "_updatedAt": "2022-10-05T04:46:53Z",
      "largeText2": "FINE",
      "saleTime": "29 Sep to 29 Oct"
    }
  ]
  const products = [
    {
        "_updatedAt": "2022-10-04T17:04:50Z",
        "slug": {
            "current": "earphones",
            "_type": "slug"
        },
        "_rev": "ugdQkaA2eUQFekJMRvnWr4",
        "name": "Earphones",
        "details": "High Quality Sound Full Bazz Control More immersive experience with multidirectional sound",
        "_id": "13c5f11f-81b5-46dc-bcc4-b668b92a44ea",
        "image": [
            {
                "_type": "image",
                "_key": "16f4b49404ed",
                "asset": {
                    "_ref": "https://cdn.sanity.io/images/kfqkqbpu/production/image-9945618cb6150813c237942a285c0af8597c7718-600x600-webp",
                    "_type": "reference"
                }
            },
            {
                "_type": "image",
                "_key": "dd5bbde1422a",
                "asset": {
                    "_ref": "image-c46b11a10e78628ed54e2c31eb58162f8a568050-800x800-webp",
                    "_type": "reference"
                }
            },
            {
                "_type": "image",
                "_key": "2fadf0adeb98",
                "asset": {
                    "_ref": "image-1711120c6aae6a8edd5d35bff5193b1502480d79-900x820-webp",
                    "_type": "reference"
                }
            },
            {
                "_type": "image",
                "_key": "a9d0c181220e",
                "asset": {
                    "_ref": "image-d94ff929298f01a3054f89844df3e1a67489b0e8-900x900-webp",
                    "_type": "reference"
                }
            }
        ],
        "price": 30,
        "_createdAt": "2022-10-04T17:04:50Z",
        "_type": "product"
    },
    {
        "_createdAt": "2022-10-03T22:27:11Z",
        "name": "Headphone Legendary Edition",
        "details": "Active noise cancelling\\n stereo speakers \\n low latency",
        "_id": "258eef45-7a35-4592-a996-e694b630a4f7",
        "slug": {
            "current": "headphone-legendary-edition",
            "_type": "slug"
        },
        "reviews": 24,
        "rate": 5,
        "price": 99,
        "_type": "product",
        "_updatedAt": "2022-10-05T04:56:01Z",
        "discounted": 75,
        "image": [
            {
                "_key": "4fd73d847598",
                "asset": {
                    "_ref": "image-058225fc820fe15a1c63697367a905959a5f32a6-555x555-webp",
                    "_type": "reference"
                },
                "_type": "image"
            },
            {
                "_type": "image",
                "_key": "aefbef2e780a",
                "asset": {
                    "_ref": "image-a099db30fab841ce69c573f7409251824748e490-600x600-webp",
                    "_type": "reference"
                }
            },
            {
                "_key": "decb89cc4941",
                "asset": {
                    "_ref": "image-797f8df56017feb72288e218fd6957ef068d7b44-700x700-webp",
                    "_type": "reference"
                },
                "_type": "image"
            }
        ],
        "_rev": "oP7Am8Gpqebc06oyUCMfc6"
    },
    {
        "image": [
            {
                "_type": "image",
                "_key": "0280f111a1e2",
                "asset": {
                    "_ref": "image-8aa3c4242c30718c8add3cd373c2945908356f4a-600x600-webp",
                    "_type": "reference"
                }
            },
            {
                "_type": "image",
                "_key": "3f9f4c6e9f7b",
                "asset": {
                    "_type": "reference",
                    "_ref": "image-5e577feda12dac0688658c0129498d058121e0f9-800x800-webp"
                }
            },
            {
                "_key": "3589ffb2a04f",
                "asset": {
                    "_ref": "image-f4a469d5d0964a219d851f10cf5a58d95533a0f0-600x600-webp",
                    "_type": "reference"
                },
                "_type": "image"
            },
            {
                "_type": "image",
                "_key": "895a40752a4b",
                "asset": {
                    "_ref": "image-432153409f86ef269df797d0ef3091c99f447490-2000x2331-webp",
                    "_type": "reference"
                }
            }
        ],
        "_createdAt": "2022-10-04T17:00:08Z",
        "_rev": "ugdQkaA2eUQFekJMRvminS",
        "details": "Workout tracker Geolocation detection Heart rate tracking",
        "_updatedAt": "2022-10-04T17:00:08Z",
        "slug": {
            "current": "watch",
            "_type": "slug"
        },
        "price": 35,
        "_type": "product",
        "name": "Watch",
        "_id": "3a64aea6-eb0e-4db0-a630-1354f3b50c0c"
    },
    {
        "reviews": 7,
        "_createdAt": "2022-10-04T17:10:47Z",
        "_rev": "ugdQkaA2eUQFekJMRyitYo",
        "name": "Slim Headphones",
        "details": "Neat looking Fully mobile and easy to carry around High Sound Quality",
        "_id": "8aa7eebf-b776-4f50-9bac-4f292fc88fa9",
        "_updatedAt": "2022-10-05T04:56:32Z",
        "image": [
            {
                "_type": "image",
                "_key": "74483e837d2f",
                "asset": {
                    "_type": "reference",
                    "_ref": "image-7779cbf27cbc8125c28234fde710cb4b2bf34ec0-600x600-webp"
                }
            },
            {
                "_key": "90abdde0a5ee",
                "asset": {
                    "_ref": "image-47b31e41aa6cd8bdbf2c0f3a6f03ac90c81d5746-900x900-webp",
                    "_type": "reference"
                },
                "_type": "image"
            },
            {
                "_key": "9234c9e8d390",
                "asset": {
                    "_ref": "image-a526b96131f4da2799071600492f8afbe4de62a3-900x900-webp",
                    "_type": "reference"
                },
                "_type": "image"
            },
            {
                "_type": "image",
                "_key": "fa26a1f5ca8f",
                "asset": {
                    "_ref": "image-c6f278aa0550e1c5617d26e67944086f8a21a4c8-800x800-webp",
                    "_type": "reference"
                }
            }
        ],
        "rate": 3.5,
        "price": 99,
        "_type": "product",
        "slug": {
            "current": "slim-headphones",
            "_type": "slug"
        }
    },
    {
        "name": "Wireless Earphones",
        "_id": "90657e43-3869-4bb3-87fe-fe929bf16d83",
        "_updatedAt": "2022-10-04T17:02:54Z",
        "_rev": "ugdQkaA2eUQFekJMRvnA7u",
        "price": 88,
        "_createdAt": "2022-10-04T17:02:54Z",
        "_type": "product",
        "details": "Passive Noise cancellation Fast Charging 5 mins for 2 hours work time Low latency with gaming mode",
        "slug": {
            "current": "wireless-earphones",
            "_type": "slug"
        },
        "image": [
            {
                "_key": "e5104e86ec75",
                "asset": {
                    "_ref": "image-802165b134fd5c2751b3bf69fa83c67e0b262944-600x600-webp",
                    "_type": "reference"
                },
                "_type": "image"
            },
            {
                "_type": "image",
                "_key": "e510b2d66076",
                "asset": {
                    "_ref": "image-17dc1e78143cf6430140d63b3e2544c1b639577a-800x800-webp",
                    "_type": "reference"
                }
            },
            {
                "_key": "8fccf4f8f7a5",
                "asset": {
                    "_ref": "image-9ca9ca6bec7ad7d470791fc847f283baf0cd3530-800x800-webp",
                    "_type": "reference"
                },
                "_type": "image"
            },
            {
                "asset": {
                    "_ref": "image-0e4c9a275895c4035e56555ccd0652208fb2cda8-800x800-webp",
                    "_type": "reference"
                },
                "_type": "image",
                "_key": "0e12a5069564"
            }
        ]
    },
    {
        "_createdAt": "2022-10-04T17:06:58Z",
        "_type": "product",
        "name": "Sporty Earphones",
        "details": "Water Resistance High Durability Good Materials Full Comfort while doing workouts",
        "_updatedAt": "2022-10-05T04:57:25Z",
        "image": [
            {
                "asset": {
                    "_ref": "image-07fd4b12012f56f93ee9c5090a09754b4d8ee9dd-600x600-webp",
                    "_type": "reference"
                },
                "_type": "image",
                "_key": "0ff763a6dff0"
            },
            {
                "_type": "image",
                "_key": "25ea3bb5a30d",
                "asset": {
                    "_ref": "image-18cffd876ecb5abec2d26637bea5dd549928029c-800x800-webp",
                    "_type": "reference"
                }
            },
            {
                "_type": "image",
                "_key": "11a6391e57a5",
                "asset": {
                    "_ref": "image-e080e19ff807ee022d04d04db072d9376d94da36-600x600-webp",
                    "_type": "reference"
                }
            },
            {
                "asset": {
                    "_ref": "image-2dcd6804ac04c28574e5bf088348e9459121166e-800x800-webp",
                    "_type": "reference"
                },
                "_type": "image",
                "_key": "b81801e93761"
            }
        ],
        "rate": 4.5,
        "_rev": "ugdQkaA2eUQFekJMRyiyRO",
        "_id": "e158c4f0-2431-4a9f-ab9b-1e281cf74d2e",
        "slug": {
            "current": "sporty-earphones",
            "_type": "slug"
        },
        "reviews": 10,
        "price": 78
    },
    {
        "_rev": "7YFibvF3xjZ4JMfEQJ7rBz",
        "_type": "product",
        "details": "Nice Earcups with perfect size fitting for any head size High Sound Quality",
        "_id": "e53e975c-604b-4e3b-a0e7-e9a37fddba3d",
        "image": [
            {
                "_type": "image",
                "_key": "1a8ff510a189",
                "asset": {
                    "_ref": "image-f024f1fb4c4048936932a8a391d7d6adc415b288-600x600-webp",
                    "_type": "reference"
                }
            },
            {
                "_key": "dc3b64fd5f85",
                "asset": {
                    "_ref": "image-a205aaa5ac2c75342801e683c3b78ea2fff8913b-600x600-webp",
                    "_type": "reference"
                },
                "_type": "image"
            },
            {
                "asset": {
                    "_ref": "image-82ad0a754a506295f243c53e205a5a47bfd81355-800x800-webp",
                    "_type": "reference"
                },
                "_type": "image",
                "_key": "4b14ced5bf45"
            },
            {
                "_type": "image",
                "_key": "236bf2d46e0c",
                "asset": {
                    "_ref": "image-0ef032c9302fa60035ca21b3763b907c45b64c73-800x800-webp",
                    "_type": "reference"
                }
            }
        ],
        "rate": 4,
        "_createdAt": "2022-10-04T17:09:07Z",
        "_updatedAt": "2022-10-05T04:56:47Z",
        "slug": {
            "current": "gaming-headphones",
            "_type": "slug"
        },
        "reviews": 12,
        "price": 125,
        "name": "Gaming Headphones"
    },
    {
        "image": [
            {
                "asset": {
                    "_ref": "image-9fbb62343426e1f157144f26d9b59be1629ef7c1-600x600-webp",
                    "_type": "reference"
                },
                "_type": "image",
                "_key": "50bfbed09ebf"
            },
            {
                "_type": "image",
                "_key": "b66c66c5b684",
                "asset": {
                    "_ref": "image-7d8e11aa468c951095577c0ecada75ad7d66313e-800x800-webp",
                    "_type": "reference"
                }
            },
            {
                "asset": {
                    "_ref": "image-157be1e12db1dab55141ee5935f7fe8b8887ced3-800x800-webp",
                    "_type": "reference"
                },
                "_type": "image",
                "_key": "be1ee24dff92"
            },
            {
                "_type": "image",
                "_key": "f843ebdc57aa",
                "asset": {
                    "_ref": "image-9c6162564225f2fd12c9abd439ce80e5df0986d4-800x800-webp",
                    "_type": "reference"
                }
            }
        ],
        "_createdAt": "2022-10-04T16:57:28Z",
        "_rev": "ugdQkaA2eUQFekJMRvmKKE",
        "_type": "product",
        "name": "Speaker",
        "details": "Immersive Experience with stereo surrounded sound system ",
        "slug": {
            "current": "speaker",
            "_type": "slug"
        },
        "price": 56,
        "_id": "f9267bcf-0b7e-4dbf-b777-3207f6d8b58c",
        "_updatedAt": "2022-10-04T16:57:28Z"
    }
]

  const [showForm, setShowForm] = useState(false)
  function handleclick(): void {
    setShowForm(true);
  }

  return (
    <ThemeProvider theme={theme}>
      <HeroBanner bannerData={1 && aa[0]} />

      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>speaker there are many variations passages</p>
      </div>
      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>
    </ThemeProvider>
  );
};


export default LandingPage;
