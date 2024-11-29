"use client";
import * as React from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LogoIcon from "../../assets/logo.png";
import vector from "../../assets/vector.png";
import Typography from "@mui/material/Typography";
import bookMark from "../../assets/bookmark.png";
import active from "../../assets/active.png";
import rectangle from "../../assets/rectangle.png";
import { Restaurant } from "@mui/icons-material";
// import RestaurantList from "../favourites";
import { useContext, useState } from "react";
import Link from "@mui/material/Link";

// import { FavoriteItem } from "../../context";
import { FavoriteItem } from "../../app/context";
import {  Menu, MenuItem, Divider } from "@mui/material";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ResponsiveAppBar() {
  const { favorites, setFavorites } = useContext(FavoriteItem);
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  console.log(FavoriteItem);
  // const [anchorEl, setAnchorEl] = useState(null);


  const handleLogout = async () => {
    try {
      // If using a backend API for logout
      const response = await fetch('https://restaurant-app-next-ruddy.vercel.app/users/logout', {
        method: 'POST',
        credentials: 'include', // Include cookies if using sessions
      });

      if (response.ok) {
        toast.success('Logged out successfully');

        // Clear any token from localStorage or sessionStorage
        localStorage.removeItem('userId');
        // sessionStorage.removeItem('authToken');

        // Notify the user and redirect
        router.push('/signin'); // Redirect to signin page

      } else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
      toast.error('An error occurred during logout');
    }
  };


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <AppBar
      position="static"
      sx={{
        height: "96",
        //   backgroundColor: "#FFFFFF",
        //   color: "black",
        //   display: "flex",
        //   justifyContent: "center",
      }}
    >
      

      <Box
        backgroundColor="#FFFFFF"
        color="black"
        display="flex"
        justifyContent="space-between"
        maxWidth={1440}
        // maxHeight={96}
        height={96}
        alignItems="center"
      >
        {/* Content goes here */}
        <Box
          display="flex"
          alignItems="center"
          width="400px"
          justifyContent="flex-start"
        >
          <Box width={80} height={64}>
            <Image src={LogoIcon} width={65} height={63} alt="Logo" />
          </Box>
          {/* <Box maxWidth={1189} maxHeight={47} display="flex" alignItems="center">
          <Image src={vector} width={11} height={16} alt="Location Icon" />
          <Typography ml={1}>Kalamazoo, Michigan USA</Typography>
          </Box> */}
          <Box>
            {/* <Button variant="text" sx={{ color: "black" }}>
            <Link href="/" underline="hover">
            Home
          </Link>
            </Button>
            <Button variant="text" sx={{ color: "black" }}>
              All Restaurants
            </Button> */}
            <Button onClick={handleLogout} variant="text" sx={{ color: "black" }}>
            Logout
          </Button>
          </Box>
        </Box>
        

        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          width={150}
        >
          
          <Box>
      
      <Button onClick={handleClick}>
      {favorites.length}
        <Image src={bookMark} width={24} height={24} alt="Favorites" />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "favorites-button",
        }}
      >
        {favorites.length > 0 ? (
          favorites.map((item) => (
            <MenuItem key={item.id} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Box display="flex" flexDirection="column" width="100%">
              
              <Image src={item.image} width="100%" height="100%" alt={item.name} style={{ borderRadius: 4 }} />

              <Box ml={2} flex="1">
                <Typography fontWeight="bold">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ⭐ {item.rating} · ⏱ {item.time} min · 📍 {item.distance} 
                </Typography>
              </Box>
              <Button
                variant="text"
                color="error"
                size="small"
                onClick={() => removeFromFavorites(item.id)}
                sx={{ alignSelf: "center" }}
              >
                Remove
              </Button>
            </Box>
            <Divider sx={{ width: "100%", my: 1 }} />
          </MenuItem>
          ))
        ) : (
          <MenuItem>
            <Typography>No items in favorites</Typography>
          </MenuItem>
        )}
      </Menu>
    </Box>
          <Box>
            <Image src={active} width={24} height={24} alt="Logo" />
          </Box>
        </Box>
        {/* <Box  width={220} height={47} display="flex" alignItems="center" justifyContent="center" > */}
        {/* <Box>
            <Image src={rectangle} width={34} height={34} alt="Logo" />
            </Box> */}
        {/* <Box paddingTop= {1} paddingLeft= {1} >
            <Typography  width={113}  color="#030900" lineHeight={0}>User Name</Typography>
            <Typography  width={113}  color="#030900">abc@gmail.com</Typography>

            </Box> */}
        {/* </Box> */}
      </Box>
      {/* </Box> */}
      {/* </Toolbar> */}
      {/* </Container> */}
    </AppBar>
  );
}

export default ResponsiveAppBar;
