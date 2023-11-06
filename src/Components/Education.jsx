import React from "react";
import FlexBetween from "./FlexBetween";
import aboutUs from "../Assets/aboutUs-removebg-preview.png";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { fontTokens } from "../theme";

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
        height="auto"
        flexDirection="column"
        bgcolor={"yellow"}
        paddingTop={"160px"}
      >
        {isNonMobileScreens ? (
          <FlexBetween flexWrap="wrap" gap="4rem">
            <Box width="50%">
              <h1>Education Background</h1>
              <p className="">An investment in knowledge pays the best interest. – Benjamin Franklin</p>
            </Box>
            <Box width="40%" borderRadius="50px" className="imagebg">
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
        ) : (
          <FlexBetween flexDirection="column" gap="5rem">
            <Box width="90%">
              {" "}
              <Typography
                textAlign="justify"
                lineHeight="2rem"
                fontFamily={fontTokens.mulish}
                fontSize="clamp(0.7rem, 1.1rem, 1.5rem)"
              >
                Hi! 🙌 I'm Hemant, a passionate frontend engineer who has
                recently embarked on an exhilarating journey into the world of
                web development. 🚀 The magic of transforming a blank canvas
                into a vibrant, interactive website has always intrigued me, and
                I've turned this fascination into a thrilling career path. 💼
                The road to mastering web development is paved with challenges,
                but every hurdle overcome fuels my passion even more. There's an
                indescribable sense of accomplishment in crafting clean,
                efficient code that breathes life into a static webpage. 🎨💻
                When I'm not immersed in lines of code, I'm on a relentless
                quest for knowledge. 🧠 I attend enlightening web development
                workshops, devour articles and blogs that quench my thirst for
                learning, and experiment with diverse techniques and
                technologies. 📚💡 I'm thrilled about the endless possibilities
                this journey holds and eagerly look forward to each day of
                learning, growing, and coding. The world of frontend engineering
                is my playground, and I can't wait to explore every corner of
                it! 🌐🚀
              </Typography>
            </Box>
            <Box width="100%" borderRadius="50px" className="imagebg">
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
