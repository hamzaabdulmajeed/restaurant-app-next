import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import flogo from "../../assets/flogo.png";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import fbook from "../../assets/fbook.png";
import apple from "../../assets/apple.png";
import google from "../../assets/google.png";

export default function page() {
  return (
    <Box
      sx={{
        width: "1442px",
        height: "399px",
        backgroundColor: "#3D691B",
        display: "flex",
        flexWrap: "wrap",
        textAlign: "center",
        alignItems: "baseline",
        paddingTop:"100px",
        paddingLeft:"50px"
        // '& > :not(style)': {
        //   m: 1,
        //   width: 128,
        //   height: 128,
        // },
      }}
    >
      <Box width="400px" height="200px">
        <Box
          width="400px"
          height="100px"
          display="flex"
          justifyContent="center"
        >
          <Image src={flogo} width={130} height={100} alt="Flogo Icon" />
        </Box>
        <Box width="400px" height="44px" display="flex" justifyContent="center">
          <Typography height={44} color="white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </Box>
        <Box
          width="400px"
          height="56px"
          display="flex"
          justifyContent="space-evenly"
          marginTop="15px"
        >
          <Image src={fbook} width={56} height={57} alt="Flogo Icon" />
          <Image src={apple} width={56} height={57} alt="Flogo Icon" />
          <Image src={google} width={56} height={57} alt="Flogo Icon" />
        </Box>
      </Box>
      <Box width="400px" height="200px">
        <Typography height={44} color="white">
          Our Menu
          <br />
          <br />
          <br />
          Home
          <br />
          All Restaurant
          <br />
          Contact Us
          <br />
          Favorites
        </Typography>
      </Box>
      <Box width="400px" height="200px">
        <Typography height={80} color="white">
          Newsletter
          <br />
          lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>


        <Typography height={44} color="white">
           
           
           T: 0123456789
          <br />
          E: bestlocaleats@gmail.com
         
        </Typography>
      </Box>
    </Box>
  );
}
