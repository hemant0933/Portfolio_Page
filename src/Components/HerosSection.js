import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { fontTokens } from "../theme";
import FOG from 'vanta/dist/vanta.fog.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag


const HerosSection = () => {
  // const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const theme = useTheme();
  const [vantaEffect, setVantaEffect] = useState(null)
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const primaryLight = theme.palette.neutral.headMain;
  const light = theme.palette.primary.dark;


  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        highlightColor: 0xe3ff,
        midtoneColor: 0xfb07fc,
        speed: 1.50
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <section ref={myRef} id="/">
      <Box
        position="relative"
        width="100%"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
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
              color={"black"}
              fontSize="clamp(5rem, 2rem, 2.25rem)"
              
            >
              <span className="Lora">
                Hi. I'm Hemant.<br/>
                I am into Web Development.
              </span>
            </Typography>

            <Box>
              <Typography
                textAlign="center"
                fontFamily={fontTokens.mulish}
                fontSize="clamp(0.5rem, 1rem, 1.5rem)"
                color={"white"}
                className="stroke"
                marginTop={"30px"}
              >
                Bridging design and technology for seamless user-centric
                experiences.
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box
            zIndex="1"
            width="90%"
            display="flex"
            flexDirection="column"
            marginLeft="auto"
            marginRight="auto"
          >
             <Typography
              fontWeight="bold"
              textAlign="center"
              fontFamily={fontTokens.mulish}
              color={"white"}
              fontSize="clamp(1rem, 3.2rem, 3.25rem)"
              >
              <span className="Lora">
                Hi. I'm Hemant.<br/>
                I am into Web Development.
              </span>
            </Typography>
            <Box className="smallText" marginTop={"30px"}>
              <Typography
                fontFamily={fontTokens.mulish}
                textAlign="center"
                fontSize="clamp(0.5rem, 1rem, 2.25rem)"
                color={"white"}
                className="stroke"
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
