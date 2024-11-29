import * as React from "react";
import Box from "@mui/material/Box";
// import CardCover from '@mui/joy/CardCover';
import Button from "@mui/material/Button";
import active from "../../assets/active.png";
import wbback from "../../assets/wbback.jpg";
import wb from "../../assets/wb.png";
import wb1 from "../../assets/wb1.png";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import star from "../../assets/staricon.png";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import location from "../../assets/location.png";

export default function BoxBasic() {
  return (
    <Box
      component="section"
      sx={{
        // p: 2,
        maxWidth: "1440px",
        height: "400px",
        backgroundColor: "black",
      }}
    >
      <Box
        backgroundColor="green"
        width={1440}
        height={400}
        position="relative"
        display="flex"
        justifyContent="flex-start"
      >
        <Image src={wbback} height={400} width={1440} alt="empty" />
        <Box
          display="flex"
          position="absolute"
          top="20%"
          width="863px"
          height="255px"
          justifyContent="start"
          paddingLeft="100px"
        >
          <Box
            backgroundColor="blue"
            width="350px"
            height="255px"
            marginRight="50px"
            position="relative"
          >
            <Image src={wb} height={255} width={350} alt="empty" />
            <Box position="absolute" top="70%" left="30%">
              <Image src={wb1} height={67} width={240} alt="empty" />
            </Box>
          </Box>
          <Box width="280px" height="240px" position="relative">
            <Image src={wb} height={255} width={280} alt="empty" />
            <Box position="absolute" top="5%">
              <Box display="flex" alignItems="center">
                <Typography variant="h5" color="white">
                  Maru Sushi & Grill
                </Typography>
                <Typography color="white" paddingLeft="20px">
                  4.5 ★
                </Typography>
              </Box>
              <Box>
                <Box display="flex" marginTop="40px">
                  <Image src={phone} height={40} width={40} alt="empty" />
                  <Typography color="white" paddingLeft="10px">
                    Home <br /> 021 *** ****
                  </Typography>
                </Box>
                <Box display="flex" marginTop="1px">
                  <Image src={email} height={40} width={40} alt="empty" />
                  <Typography color="white" paddingLeft="10px">
                    Email <br /> abc@gmail.com
                  </Typography>
                </Box>
                <Box display="flex" marginTop="1px">
                  <Image src={location} height={40} width={40} alt="empty" />
                  <Typography color="white" paddingLeft="10px">
                    Location <br /> Kalamazoo, Michigan, USA
                  </Typography>
                  <Button
                    sx={{
                      height: "30px",
                      backgroundColor: "orange",
                      color: "white",
                      "&:hover": { backgroundColor: "#ff8c00" }, 
                    }}
                  >
                    Map
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
