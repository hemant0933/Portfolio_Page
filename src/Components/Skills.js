import React from "react";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import js from "../Assets/js.png";
import reactIcon from "../Assets/react.png";
import redux from "../Assets/redux.png";
import github from "../Assets/github.png";
import git from "../Assets/git.png";
import bootstrape from "../Assets/bootstrap.png";
import npm from "../Assets/npm.png";
import java from "../Assets/java.png";
import firebase from "../Assets/firebase.png";
import mongodb from "../Assets/mongodb.png";
import tailwindcss from "../Assets/tailwindcss.png";
import Nodejs from "../Assets/nodejs.png";
import MUi from "../Assets/mui.png";

// import { motion } from "framer-motion";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { fontTokens } from "../theme";
import Slider from "./Slider";

const IconArray = [
  { label: "Html", url: html },
  { label: "Css", url: css },
  { label: "Javascript", url: js },
  { label: "ReactJs", url: reactIcon },

  { label: "Redux", url: redux },
  { label: "Java", url: java },
  { label: "Tailwindcss", url: tailwindcss },
  { label: "Bootstrape", url: bootstrape },

  { label: "MUi", url: MUi },
  { label: "Nodejs", url: Nodejs },
  { label: "MongoDb", url: mongodb },
  { label: "Firebase", url: firebase },
  { label: "Git", url: git },
  { label: "Github", url: github },
  { label: "NPM", url: npm },
];

const Skills = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const primaryLight = theme.palette.neutral.headMain;

  return (
    <section>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        flexDirection="column"
        padding="1rem 6%"
        textAlign="center"
        id="skill"
      >
        {isNonMobileScreens ? (
          <Box
            width="90%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
            paddingTop={"100px"}
          >
            <Typography
              fontWeight="bold"
              textAlign="center"
              fontFamily={fontTokens.mulish}
              fontSize="clamp(1rem, 2rem, 2.25rem)"
            >
              Skills
            </Typography>
            <Typography
              textAlign="left"
              fontFamily={fontTokens.mulish}
              fontSize="clamp(0.8rem, 1.2rem, 2.25rem)"
              color={primaryLight}
            >
              Development Skills and Tools
            </Typography>

            <Box>
              <Slider IconArray={IconArray} />
            </Box>
          </Box>
        ) : (
          <Box
            width="100%"
            height="auto"
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
            flexDirection="column"
            marginTop="6rem"
          >
            <Typography
              fontWeight="bold"
              textAlign="left"
              fontFamily={fontTokens.mulish}
              fontSize="clamp(1rem, 2rem, 2.25rem)"
            >
              Skills
            </Typography>
            <Typography
              textAlign="left"
              fontFamily={fontTokens.mulish}
              fontSize="clamp(0.5rem, 1.2rem, 2.25rem)"
              color={primaryLight}
              marginTop="20px"
            >
              Development Skills and Tools
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              flexWrap="wrap"
              alignItems="center"
              marginTop="3rem"
              gap={"35px"}
            >
              {IconArray.map((icon, index) => (
                <Box 
                  className="skillcard" 
                  padding="1rem" 
                  width="80px" 
                  height="80px"
                  sx={{
                    transition:'transform 0.2s',
                    '&:hover':{
                      transform:'scale(1.2)'
                    }
                  }}
                  >
                  <img
                    key={index}
                    width="100%"
                    src={icon.url}
                    alt={icon.label}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </section>
  );
};

export default Skills;
