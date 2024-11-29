"use client";

import * as React from "react";
import { useState, useContext } from "react";


import Box from "@mui/material/Box";
// import resturantDetail from ""
import Typography from "@mui/material/Typography";
// import ResponsiveAppBar from "../navbar/page";
import DropdownButton from "../button/page";
// import DropDown from "../menuItems/page";
import wifi from "../../assets/wifi.png";
import ac from "../../assets/ac.png";
import events from "../../assets/events.png";
import outdoor from "../../assets/outdoor.png";
import parking from "../../assets/parking.png";
import pet from "../../assets/pet.png";
import Pizza from "../../assets/pizza.png";
import RestaurantCard from "../Scard/page";
import Fcard from "../Fcard/page";
import Image from "next/image";
import FoodI from "../../assets/food.png";
// import Link from '@mui/material/Link'
import Link from "next/link";
import { Label } from "@mui/icons-material";
import { FavoriteItem } from "../../app/context";

const restaurants = [
  {
    description: "Indulge in a culinary journey like no other at flavourFusion",
    image: Pizza,
    rating: 3,
    sales: "50% Off",
    discount: "upto $100",
    Category: "Crab rangoon dip",
  },
  {
    description: "Indulge in a culinary journey like no other at flavourFusion",
    image: Pizza,
    rating: "4",
    sales: "50% Off",
    discount: "upto $100",
    Category: "Crab rangoon dip",
  },
  {
    description: "Indulge in a culinary journey like no other at flavourFusion",
    image: Pizza,
    rating: "4",
    sales: "50% Off",
    discount: "upto $100",
    Category: "Crab rangoon dip",
  },
  {
    description: "Indulge in a culinary journey like no other at flavourFusion",
    image: Pizza,
    rating: "4",
    sales: "50% Off",
    discount: "upto $100",
    Category: "Gyoza",
  },
];

const food = [
  {
    id: "0",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 1",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "sharin plates",
  },
  {
    id: "1",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 2",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "sharin plates",
  },
  {
    id: "2",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 3",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "sharin plates",
  },
  {
    id: "3",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 4",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "Crab rangoon dip",
  },
  {
    id: "4",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 5",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "Crab rangoon dip",
  },
  {
    id: "6",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 6",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "Gyoza",
  },
  {
    id: "7",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 7",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "Fried tofu",
  },
  {
    id: "8",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 8",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "Fried tofu",
  },
  {
    id: "9",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 9",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "Fried tofu",
  },
  {
    id: "10",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 10",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "Fried tofu",
  },
  {
    id: "11",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 11",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "House salad",
  },
  {
    id: "12",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 12",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "House salad",
  },
  {
    id: "13",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 13",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "Edamame",
  },
  {
    id: "14",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 14",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "Honey garlic shrimp",
  },
  {
    id: "15",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 15",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "Honey garlic shrimp",
  },
  {
    id: "16",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 16",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "Honey garlic shrimp",
  },
  {
    id: "17",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 17",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "Honey garlic shrimp",
  },
  {
    id: "18",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 18",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "Maru fried rice",
  },
  {
    id: "19",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 19",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "Roasted shishito",
  },
  {
    id: "20",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 20",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "Roasted shishito",
  },
  {
    id: "21",
    description: "kids eat free",
    image: FoodI,
    name: "restaurant 21",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    Category: "Seaweed salad",
  },
];

const getUniqueData = (data, property) => {
  let newValue = data.map((curElem) => {
    return curElem[property];
  });
  return (newValue = ["All", ...new Set(newValue)]);
};
const CategoryOnlyData = getUniqueData(food, "Category");

export default function Main() {
  const { favorites, setFavorites } = useContext(FavoriteItem);

  console.log("favorites", favorites);
 
  const onAddToFavorites = (foodItem) => {
 
    if (!favorites.some((fav) => fav.id === foodItem.id)) {
      setFavorites([...favorites, foodItem]);
    }
  };

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFood =
    selectedCategory === "All"
      ? food
      : food.filter((item) => item.Category === selectedCategory);

  return (
    <Box
      component="section"
      sx={{
        // p: 2,
        height: "1484px",
        width: "1440px",
        backgroundColor: "yellow",
        display: "flex",
      }}
    >
      {/* <ResponsiveAppBar favorites={favorites} /> */}
      <Box
        width="413px"
        height="1484px"
        backgroundColor="#F4F4ED"
        position="relative"
      >
        <Box
          width="316px"
          height="507px"
          backgroundColor="#F4F4ED"
          top="42px"
          left="51px"
          position="absolute"
        >
          <Box display="flex" justifyContent="space-between" borderBottom={1}>
            <Typography width={113} color="#030900">
              Menu
            </Typography>
            All Items
          </Box>

          <Box width="316px" height="308px">
            {CategoryOnlyData.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                style={{
                  backgroundColor:
                    selectedCategory === category ? "#ccc" : "#fff",
                  border: "none",
                  cursor: "pointer",
                  margin: "5px 0",
                  padding: "10px",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                {category}
              </button>
            ))}
          </Box>
          {/* <Box>
            <Typography height={30} color="#030900">
              Daily Special
            </Typography>
            <DropdownButton
              buttonLabel="Desserts"
              menuItems={["Option 1", "Option 2", "Option 3"]}
            />{" "}
            <br />
            <DropdownButton
              buttonLabel="Signature"
              menuItems={["Option 1", "Option 2", "Option 3"]}
            />
            <br />
            <DropdownButton
              buttonLabel="White Wine"
              menuItems={["Option 1", "Option 2", "Option 3"]}
            />
            <br />
            <DropdownButton
              buttonLabel="Makkuli"
              menuItems={["Option 1", "Option 2", "Option 3"]}
            />
          </Box> */}
        </Box>

        <Box
          width="316px"
          height="564px"
          backgroundColor="#F4F4ED"
          top="559px"
          left="51px"
          position="absolute"
        >
          <Box>
            <DropdownButton buttonLabel="Daily Special" />
          </Box>
          <Box
            // width={316}
            // height={114}
            display="flex"
            flexDirection="column"
            gap={4}
          >
            {restaurants.map((restaurant, index) => (
              <RestaurantCard
                key={index}
                description={restaurant.description}
                image={restaurant.image}
                rating={restaurant.rating}
                sales={restaurant.sales}
                discount={restaurant.discount}
              />
            ))}
          </Box>
        </Box>
        <Box
          width="316px"
          height="24px"
          backgroundColor=""
          top="1180px"
          left="51px"
          position="absolute"
        >
          <Typography height={24} color="#030900">
            Amenities
          </Typography>
        </Box>
        <Box
          width="316px"
          height="172px"
          backgroundColor="#ffffff"
          top="1236px"
          left="51px"
          position="absolute"
        >
          <Box paddingLeft="30px" paddingRight="30px">
            <Image src={wifi} width={80} height={80} alt="Wifi Icon" />
            <Image src={outdoor} width={80} height={80} alt="Wifi Icon" />
            <Image src={pet} width={80} height={80} alt="Wifi Icon" />
          </Box>

          <Box paddingLeft="30px" paddingRight="30px">
            <Image src={parking} width={80} height={80} alt="Wifi Icon" />
            <Image src={ac} width={80} height={80} alt="Wifi Icon" />
            <Image src={events} width={80} height={80} alt="Wifi Icon" />
          </Box>
        </Box>
      </Box>
      <Box
        width="1027px"
        height="1484px"
        backgroundColor="white"
        position="relative"
      >
        <Box
          width="190px"
          height="56px"
          position="absolute"
          top="20px"
          left="20px"
          borderRadius="20px"
        >
          <Typography variant="h5" height={30} color="#030900">
            {selectedCategory} <br />
            {filteredFood.length} Items
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            //  scrollSnapType: "x mandatory",
            gap: 4,
            width: "920px",
            height: "1300px",
            position: "absolute",
            top: "120px",
            left: "20px",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              // overflowX: "auto",
              //  scrollSnapType: "x mandatory",
              gap: 4,
              // maxWidth: "920px",
              height: "200px",
              // width:"278px",
              // position: "absolute",
              // top:"120px",
              // left:"20px",
              flexWrap: "wrap",
            }}
          >
            {filteredFood.map((foodItem, index) => (
              // <Link key={index} href={`/restaurant/${index}`} height="200px">
              <Fcard
               
                key={index}
                description={foodItem.description}
                image={foodItem.image}
                // onClick={() => setRating(rating)}
                rating={foodItem.rating}
                name={foodItem.name}
                distance={foodItem.distance}
                time={foodItem.time}
               {...foodItem}
                isFavorite={favorites.some((fav) => fav.id === foodItem.id)}
                addToFavorites={() => onAddToFavorites(foodItem)}
              />
                //  </Link> 
                 
                 ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
