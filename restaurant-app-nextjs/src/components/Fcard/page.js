import React from "react";
import bookMark from '../../assets/bookmark.png'
import { useRouter } from 'next/router';

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Rating,
  Box,
  Link,
} from "@mui/material";
import Image from "next/image";

const Fcard = ({ id, image, index, name, rating, description, distance, time, addToFavorites, isFavorite }) => {
  
  // const router = useRouter()
  return (
    <Card sx={{ width: "278px", height: "200px", borderRadius: "20px", overflow:"visible", display:"flex", justifyContent:"center"}} >
      <Box sx={{ width: "278px", height: "200px", borderRadius:"20px" }}>
     


        <Box width="278px" height="112px" borderRadius="20px"
       
        >
          <Link href={`/restaurant/${id}`} >
            <Image
              width="100%"
              height={112}
              src={image}
              alt="food"
              style={{ cursor: "pointer", }}
            />
          </Link>
        </Box>
        <Box width="278px" height="88px" margin="4px">
          

          <Box
            width="261px"
            height="16px"
            marginTop="7px"
            marginBottom="7px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            
            {name}
            <Rating value={rating} readOnly />
           
          </Box>
          <Box display="flex" justifyContent="space-between" width="250px">
          <Box width="114px" height="30px" 
        //   marginTop="7px" 
        //   marginBottom="7px"
          >
            <Typography 
            // height="45px" 
            // lineHeight="1"
            >
              {description}
            </Typography>
          </Box>
          <Box>
          {/* <Button
           onClick={onAddToFavorites}
          //  style={{
          //    backgroundColor: "white",
          //    color: "white",
          //    border: "none",
          //   //  padding: "10px",
          //   //  borderRadius: "4px",
          //    cursor: "pointer",
          //   //  marginTop: "10px",
          //  }}
         >
          <Image
        //   borderRadius={20}
            width="10%"
            height={30}
            src={bookMark}
            alt="Favourite"
          />
          </Button> */}
           <Button
          onClick={addToFavorites}
          sx={{
            cursor: "pointer",
            padding: "5px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
          style={{background: isFavorite ? "red" : "transparent"}}
          
          objectFit="cover"
          width={24}
          height={24}
            src={bookMark}
      
            alt={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        
          />
        </Button>
          </Box>
          </Box>
          <Box>
          {/* <Link key={index} href={`/restaurant/${index}`} height="200px"> */}

          <Box 
            width="110px"
            height="16px"
            
            // marginTop="7px"
            // marginBottom="7px"
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            
              <p>{distance}</p> 
              <p>{time}</p>
              </Box>
              {/* </Link> */}

         
          </Box>
          
        </Box>
      </Box>
    </Card>
  );
};

export default Fcard;
