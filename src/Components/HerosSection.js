import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { fontTokens } from "../theme";

const HerosSection = () => {
  // const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const primaryLight = theme.palette.neutral.headMain;
  const light = theme.palette.primary.dark;

  return (
    <section id="/">
      <Box
        position="relative"
        width="100%"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        // sx={{ background: background }}
      >
        {isNonMobileScreens ? (
          <Box
            zIndex="1"
            width="90%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              fontWeight="bold"
              textAlign="center"
              fontFamily={fontTokens.mulish}
              fontSize="clamp(5rem, 2rem, 2.25rem)"
            >
              <span>
                Hi. I'm Hemant.
                <br />
                A WebApp <br /> Developer.
              </span>
            </Typography>

            <Box>
              <Typography
                textAlign="center"
                fontFamily={fontTokens.mulish}
                fontSize="clamp(0.5rem, 1rem, 1.5rem)"
                color={light}
              >
                Bridging design and technology for seamless user-centric
                experiences.
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box
            zIndex="1"
            width="80%"
            display="flex"
            flexDirection="column"
            marginLeft="auto"
            marginRight="auto"
          >
            <Typography
              fontWeight="bold"
              fontFamily={fontTokens.mulish}
              textAlign="center"
              fontSize="clamp(3rem, 2rem, 2.25rem)"
              color={primaryLight}
            >
              <span className="title">
                Hi. I'm Hemant.
                <br />
                A WebApp <br /> Developer.
              </span>
            </Typography>
            <Box className="smallText">
              <Typography
                fontFamily={fontTokens.mulish}
                textAlign="center"
                fontSize="clamp(0.5rem, 1rem, 2.25rem)"
              >
                Bridging design and technology for seamless user-centric
                experiences.
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </section>
  );
};

export default HerosSection;
