import React from "react";
import FlexBetween from "./FlexBetween";
import aboutUs from "../Assets/aboutUs-removebg-preview.png";
import { Box, useMediaQuery } from "@mui/material";
import certificate1 from "../Assets/certificate_web.png";
import certificate2 from "../Assets/intership.png";
import Certificates from "./Certificates";

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
              <p>
                An investment in knowledge pays the best interest. – Benjamin
                Franklin
              </p>
            </Box>
            <Box width={"100%"} height={"100vh"} marginTop={"100px"}>
              <h3>Certificates</h3>
              <Certificates imgData={imgData} />
            </Box>
          </>
        ) : (
          <FlexBetween flexDirection="column" gap="5rem">
            <Box width="90%" borderRadius="50px" className="imagebg">
              <img
                src={aboutUs}
                width="100%"
                style={{ borderRadius: "50px", objectFit: "cover" }}
                height="100%"
                alt="aboutUs"
                className="slideAnimation"
              />
            </Box>
          </FlexBetween>
        )}
      </Box>
    </section>
  );
};

export default Education;
