import React, { useRef } from "react";
import DialogProjects from "./DialogProjects";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { fontTokens } from "../theme";
import { BasedOnHtmlAndCss, BasedOnJs, BasedOnReactJs } from "../Constants";

const Project = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const projectRef = useRef(null);

  return (
  <section id="project">
      <Box
        position="relative"
        marginTop="5rem"
        padding="1rem 6%"
        width="100%"
        height="auto"
        display="flex"
        alignItems="center"
        flexDirection="column"
        // justifyContent="center"
    >
      <Typography
        fontWeight="bold"
        textAlign="center"
        fontFamily={fontTokens.mulish}
        fontSize="clamp(1rem, 2rem, 2.25rem)"
        // marginBottom="3rem"
      >
        Project
      </Typography>
      {isNonMobileScreens ? (
        <Box
          width="90%"
          paddingBottom="160px"
          display="flex"
          alignItems="center"
          flexDirection="column"
          ref={projectRef}
        >
          <Typography
            width="100%"
            fontWeight="medium"
            textAlign="left"
            fontFamily={fontTokens.annie}
            fontSize="clamp(1rem, 1.2rem, 2.25rem)"
            padding="1rem"
          >
            Based on only Html And Css
          </Typography>
          <Box
             width="100%"
             padding="1rem"
             display="flex"
             gap="2rem"
             justifyContent="space-evenly"
             alignItems="center"
             flexWrap="wrap"
          >
            {BasedOnHtmlAndCss.map((data) => (
              <DialogProjects
                key={data.id}
                src={data.src}
                title={data.title}
                Imgsrc={data.Imgsrc}
              />
            ))}
          </Box>
          <Typography
            width="100%"
            fontWeight="medium"
            textAlign="left"
            fontFamily={fontTokens.annie}
            fontSize="clamp(1rem, 1.2rem, 2.25rem)"
            padding="1rem"
            marginTop="1rem"
          >
            Based on only Html, Css and Javascript
          </Typography>
          <Box
            width="90%"
            padding="1rem"
            display="flex"
            gap="1rem"
            justifyContent="space-evenly"
            alignItems="center"
            flexWrap="nowrap"
          >
            {BasedOnJs.map((data) => (
              <DialogProjects
                key={data.id}
                src={data.src}
                title={data.title}
                Imgsrc={data.Imgsrc}
              />
            ))}
          </Box>
          <Typography
            width="100%"
            fontWeight="medium"
            textAlign="left"
            fontFamily={fontTokens.annie}
            fontSize="clamp(1rem, 1.2rem, 2.25rem)"
            padding="1rem"
            marginTop="1rem"

          >
            Based on Reactjs
          </Typography>
          <Box
            width="100%"
            padding="1rem"
            display="flex"
            gap="2rem"
            justifyContent="space-evenly"
            alignItems="center"
            flexWrap="wrap"
            // marginBottom="160px"
          >
            {BasedOnReactJs.map((data) => (
              <DialogProjects
                key={data.id}
                src={data.src}
                title={data.title}
                Imgsrc={data.Imgsrc}
              />
            ))}
          </Box>
        </Box>
      ) : (
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          flexDirection="column"
          position="relative"
          ref={projectRef}
        >
          <Typography
            width="100%"
            fontWeight="medium"
            textAlign="left"
            fontFamily={fontTokens.annie}
            fontSize="clamp(1rem, 1.2rem, 2.25rem)"
            padding="1rem"
          >
            Based on only Html And Css
          </Typography>
          <Box
            width="90%"
            // padding="1rem"
            display="flex"
            gap="3rem"
            flexDirection="column"
            justifyContent="space-evenly"
            alignItems="center"
          >
            {BasedOnHtmlAndCss.map((data) => (
              <DialogProjects
                key={data.id}
                src={data.src}
                title={data.title}
                Imgsrc={data.Imgsrc}
              />
            ))}
          </Box>
          <Typography
            width="100%"
            fontWeight="medium"
            textAlign="left"
            fontFamily={fontTokens.annie}
            fontSize="clamp(1rem, 1.2rem, 2.25rem)"
            padding="1rem"
            marginTop="1rem"
          >
            Based on only Html, Css and Javascript
          </Typography>
          <Box
            width="90%"
            padding="1rem"
            display="flex"
            gap="3rem"
            justifyContent="space-evenly"
            alignItems="center"
          >
            {BasedOnJs.map((data) => (
              <DialogProjects
                key={data.id}
                src={data.src}
                title={data.title}
                Imgsrc={data.Imgsrc}
              />
            ))}
          </Box>
          <Typography
            width="100%"
            fontFamily={fontTokens.annie}
            fontWeight="medium"
            textAlign="left"
            fontSize="clamp(1rem, 1.2rem, 2.25rem)"
            padding="1rem"
            marginTop="1rem"
          >
            Based on Reactjs
          </Typography>
          <Box
            width="90%"
            padding="1rem"
            display="flex"
            gap="3rem"
            justifyContent="space-evenly"
            alignItems="center"
            flexWrap="wrap"
          >
            {BasedOnReactJs.map((data) => (
              <DialogProjects
                key={data.id}
                src={data.src}
                title={data.title}
                Imgsrc={data.Imgsrc}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  </section>
  );
};

export default Project;
