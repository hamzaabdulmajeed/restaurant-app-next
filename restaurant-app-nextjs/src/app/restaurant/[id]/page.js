// "use client";

// import React, { useState } from "react";
// import Navbar from "../../components/navbar/page"
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Image from "next/image";
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import FoodI from "../../assets/food.png";

// function DetailUI(item) {

// const {image, name , rating , description, distance, time} = item

//   return (
//     <Box height="600px">
//   <Image
//       width={500}
//       height={500}
//        src={FoodI}
//        alt="restaurant"
//       />
//     </Box>

//   );
// };

// export default DetailUI;
"use client";

import * as React from "react";
import Box from "@mui/material/Box";
// import resturantDetail from ""
import Typography from "@mui/material/Typography";

// import DropdownButton from "../../components/button/page.js";
import dog from "../../../assets/DogIcon.png";
import senior from "../../../assets/seniorsicon.png";
import medal from "../../../assets/medalicon.png";
import stroller from "../../../assets/strollericon.png";
import parking from "../../../assets/parking.png";
import pet from "../../../assets/pet.png";
import Hotle from "../../../assets/hotel.jpeg";
import DetailScard from "../../../components/detailScard/page";
import CardS from "../../../components/cards/page";
import Image from "next/image";
import FoodI from "../../../assets/food.png";
// import Link from '@mui/material/Link'
import Link from "next/link";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
// import TextField from '@mui/material/TextField';
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
// function renderRow(props) {
//   const { index, style } = props;

//   return (
//     <ListItem style={style} key={index} component="div" disablePadding>
//       <ListItemButton>
//         <ListItemText primary={`Item ${index + 1}`} />
//       </ListItemButton>
//     </ListItem>
//   );
// }
// function IndeterminateCheckbox() {
//   const [checked, setChecked] = React.useState([true, false]);

//   const handleChange1 = (event) => {
//     setChecked([event.target.checked, event.target.checked]);
//   };

//   const handleChange2 = (event) => {
//     setChecked([event.target.checked, checked[1]]);
//   };

//   const handleChange3 = (event) => {
//     setChecked([checked[0], event.target.checked]);
//   };

//   const children = (
//     <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
//       <FormControlLabel
//         label="Child 1"
//         control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
//       />
//       <FormControlLabel
//         label="Child 2"
//         control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
//       />
//     </Box>
//   );

//   return (
//     <div>
//       <FormControlLabel
//         label="Parent"
//         control={
//           <Checkbox
//             checked={checked[0] && checked[1]}
//             indeterminate={checked[0] !== checked[1]}
//             onChange={handleChange1}
//           />
//         }
//       />
//       {children}
//     </div>
//   );
// }
function IndeterminateCheckbox({
  parentLabel = "Parent",
  childLabels = ["Child 1", "Child 2", "Child 3", "Child 4"],
}) {
  const [checked, setChecked] = React.useState(
    Array(childLabels.length).fill(false)
  );

  const handleParentChange = (event) => {
    const newChecked = Array(childLabels.length).fill(event.target.checked);
    setChecked(newChecked);
  };

  const handleChildChange = (index) => (event) => {
    const newChecked = [...checked];
    newChecked[index] = event.target.checked;
    setChecked(newChecked);
  };

  // Determine parent checkbox state based on child checkboxes
  const allChecked = checked.every(Boolean);
  const someChecked = checked.some(Boolean) && !allChecked;

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      {childLabels.map((label, index) => (
        <FormControlLabel
          key={index} // Use index as key for mapping
          label={label}
          control={
            <Checkbox
              checked={checked[index]}
              onChange={handleChildChange(index)}
            />
          }
        />
      ))}
    </Box>
  );

  return (
    <div>
      <FormControlLabel
        label={parentLabel}
        control={
          <Checkbox
            checked={allChecked}
            indeterminate={someChecked}
            onChange={handleParentChange}
          />
        }
      />
      {children}
    </div>
  );
}
function DropdownButton({ buttonLabel = "Options", menuItems = [] }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        sx={{
          backgroundColor: "transparent",
          color: "black",
          "&:hover": {
            backgroundColor: "transparent",
          },
          borderRadius: "4px",
          textTransform: "none",
          width: "100px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {buttonLabel}
        <ArrowDropDownIcon sx={{}} />
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

const restaurants = [
  {
    time: "10",
    image: Hotle,
    rating: "4",
    name: "Nina's cafe",
    kilometer: "3KM",
  },
  {
    time: "10",
    image: Hotle,
    rating: "4",
    name: "Nina's cafe",
    kilometer: "3KM",
  },
  {
    time: "10",
    image: Hotle,
    rating: "4",
    name: "Nina's cafe",
    kilometer: "3KM",
  },
  {
    time: "10",
    image: Hotle,
    rating: "4",
    name: "Nina's cafe",
    kilometer: "3KM",
  },
];

const food = [
  {
    description: "kids eat free",
    image: FoodI,
    name: "Bibo's",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
  },
  {
    description: "kids eat free",
    image: FoodI,
    name: "Bibo's",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
  },
  {
    description: "kids eat free",
    image: FoodI,
    name: "Bibo's",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
  },
  {
    description: "kids eat free",
    image: FoodI,
    name: "Bibo's",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
  },
  {
    description: "kids eat free",
    image: FoodI,
    name: "Bibo's",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
  },
  {
    description: "kids eat free",
    image: FoodI,
    name: "Bibo's",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
  },
  {
    description: "kids eat free",
    image: FoodI,
    name: "Bibo's",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
  },
  {
    description: "kids eat free",
    image: FoodI,
    name: "Bibo's",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
  },
  {
    description: "kids eat free",
    image: FoodI,
    name: "Bibo's",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
  },
];

console.log(food);
// ../../assets/phone.png
export default function DetailUI() {
  const [value, setValue] = React.useState(null);
  return (
    <Box
      component="section"
      sx={{
        // p: 2,
        height: "1723px",
        width: "1440px",
        backgroundColor: "#F4F4ED",
        display: "flex",
      }}
    >
      <Box
        width="264px"
        height="1723px"
        backgroundColor="#F4F4ED"
        position="relative"
      >
        {/* <Box
          width="316px"
          height="1400px"
          backgroundColor="blue"
          top="42px"
          left="51px"
          position="absolute"
        ></Box> */}
        <Box
          width="184px"
          height="564px"
          backgroundColor="#F4F4ED"
          top="42px"
          left="48px"
          position="absolute"
        >
          <Box>Featured Special</Box>
          <Box
            // width={184}
            // height={106}
            display="flex"
            flexDirection="column"
            gap={4}
          >
            {restaurants.map((restaurant, index) => (
              <DetailScard
                key={index}
                name={restaurant.name}
                image={restaurant.image}
                rating={restaurant.rating}
                time={restaurant.time}
                kilometer={restaurant.kilometer}
              />
            ))}
          </Box>
        </Box>
        <Box
          width="196px"
          height="1078px"
          backgroundColor="#F4F4ED"
          top="596px"
          left="48px"
          position="absolute"
        >
          <Box display="flex" justifyContent="space-between" borderBottom={1}>
            <Typography width={113} color="#030900">
              Filter
            </Typography>
          </Box>
          <Box width="196px" height="1026px" backgroundColor="white">
            <IndeterminateCheckbox
              parentLabel=" Establishment Type"
              childLabels={[
                "Restaurants",
                "Quick bites",
                "Dessert",
                "Coffee & Tea",
              ]}
            />
            <br />

            <IndeterminateCheckbox
              parentLabel="Special offers"
              childLabels={["Restaurant with special deal or promotion"]}
            />
            <IndeterminateCheckbox
              parentLabel="Meals"
              childLabels={["Breakfast", "Lunch", "Dinner"]}
            />
            <IndeterminateCheckbox
              parentLabel="Cuisines"
              childLabels={["Ameracan", "Asian", "Bar", "Mexican"]}
            />
            <IndeterminateCheckbox
              parentLabel="Dietary Restrictions"
              childLabels={[
                "Vegetarian Friendly",
                "Vegan Options",
                "Gluten Free options",
                "Hala",
              ]}
            />
          </Box>
        </Box>
      </Box>

      <Box
        width="744px"
        height="1723px"
        backgroundColor="white"
        position="relative"
      >
        <Box
          width="650px"
          height="56px"
          position="absolute"
          top="20px"
          left="20px"
          borderRadius="20px"
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Button variant="text" sx={{ color: "black" }}>
            <Link href="/" underline="hover">
            Home
          </Link>
          </Button>
          <TextField
            variant="outlined"
            placeholder="Search..."
            width="300px"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box
          // width={882}
          // height={648}
          // key={index}
          position="absolute"
          top="120px"
          left="20px"
          display="flex"
          flexWrap="wrap"
          // flexDirection="column"

          gap={2}
        >
          {food.map((food, index) => (
            <Link href={`/restaurant/${index}`} key={index}>
              <CardS
                key={index}
                description={food.description}
                image={food.image}
                rating={food.rating}
                name={food.name}
                distance={food.distance}
                time={food.time}
              />
            </Link>
          ))}
        </Box>
        {/* <Box
  position="absolute"
  top="120px"
  left="20px"
  display="flex"
  flexWrap="wrap"
  gap={4}
>
  {food.map((foodItem, index) => (
    <Link
      key={index}
      href={{
        pathname: `/restaurant/${index}`, // The dynamic route
        query: {
          description: foodItem.description,
          image: foodItem.image.src,
          rating: foodItem.rating,
          name: foodItem.name,
          distance: foodItem.distance,
          time: foodItem.time,
        },
      }}
      passHref
    >
      
        <Fcard
          description={foodItem.description}
          image={foodItem.image}
          rating={foodItem.rating}
          name={foodItem.name}
          distance={foodItem.distance}
          time={foodItem.time}
        />
      
    </Link>
  ))}
</Box> */}

        {/* <Box
            // width={882}
            // height={648}
            position="absolute"
            top="120px"
            left="20px"
            display="flex"
            flexWrap="wrap"
            // flexDirection="column"
            
            gap={4}
          >
            {food.map((food, index) => (
              <Fcard
                key={index}
                description={food.description}
                image={food.image}
                rating={food.rating}
                name={food.name}
                distance={food.distance}
                time={food.time}
              />
            ))}
          </Box> */}
      </Box>
      <Box
        width="168px"
        height="608px"
        backgroundColor="#DAE7C9"
        top="140px"
        left="1064px"
        position="absolute"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box width="128px" height="500px" backgroundColor="#DAE7C9" py="30px" my="50px" >
          <Box
    
            display="flex"
            flexDirection="column"
            alignItems="center"
            backgroundColor="white"
            my="12px"
            border="1px solid"
            gap={2}
          >
            <Image src={dog} width={48} height={48} alt="Wifi Icon" />
            
              <Typography> Pet Friendly </Typography>
            
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            backgroundColor="white"
            my="12px"
            border="1px solid"
            gap={2}
          >
            <Image src={stroller} width={48} height={48} alt="Wifi Icon" />
           
              <Typography> Kids </Typography>
            
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            backgroundColor="white"
            my="12px"
            border="1px solid"
            gap={2}
          >
            <Image src={senior} width={48} height={48} alt="Wifi Icon" />
            <Typography> Seniors </Typography>

          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            backgroundColor="white"
            my="12px"
            border="1px solid"
            gap={2}
          >
            <Image src={medal} width={48} height={48} alt="Wifi Icon" />
            <Typography> Veterans </Typography>

          </Box>

          </Box>
      </Box>
    </Box>
  );
}
