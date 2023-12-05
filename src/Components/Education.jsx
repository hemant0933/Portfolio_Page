import React from "react";
import FlexBetween from "./FlexBetween";
import { Box, useMediaQuery } from "@mui/material";
import certificate1 from "../Assets/certificate_web.png";
import certificate2 from "../Assets/intership.png";
import Certificates from "./Certificates";
import Arrow from "../Assets/Arrow.svg";

let imgData = [{ label: certificate1 }, { label: certificate2 }];

const Education = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <section id="education">
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        padding="1rem 6%"
        width="100%"
        height="100vh"
        flexDirection="column"
        paddingTop={"160px"}
      >
        {isNonMobileScreens ? (
          <>
            <Box width="100%">
              <h1>Education</h1>
              {/* <p>
                An investment in knowledge pays the best interest. – Benjamin
                Franklin
              </p> */}
            </Box>
            <Box width={"100%"} 
              display="flex" 
              justifyContent={"center"} 
              padding={"1rem"} 
              alignItems={"center"}>
              <Box width={"80%"} display="flex" gap={"4rem"} justifyContent={"space-between"} alignItems={"center"} padding={"1rem"}>
                <p>Bachelor in <br/> Mechanical<br/> Engineering</p>
                <span style={{width:"100px"}}>
                 <img src={Arrow} width={200} alt="arrow" />
                </span>
                <p>2018 - 2022</p>
              </Box>
             
            </Box>
            <Box width={"100%"} height={"100vh"} marginTop={"100px"}>
              <h3>Certificates</h3>
              <Certificates imgData={imgData} />
            </Box>
          
          </>
        ) : (
          <FlexBetween flexDirection="column" gap="5rem">
              <Box width="auto">
                <h1>Education</h1>
                <p>
                  An investment in knowledge pays the best interest. – Benjamin
                  Franklin
                </p>
              </Box>
              <Box width={"100%"} height={"100vh"} marginTop={"80px"}>
                <h3 style={{textAlign:"left",paddingBottom:'40px'}}>Certificates</h3>
                 <FlexBetween flexDirection="column" gap="2rem">
                  {
                    imgData && imgData.map((item) => (
                      <img src={item.label} width={380} height={260} alt="img"  />
                    ))
                  }
                 </FlexBetween>   
              </Box>
          </FlexBetween>
        )}
      </Box>
    </section>
  );
};

export default Education;
