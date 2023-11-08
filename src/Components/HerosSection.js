import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { fontTokens } from "../theme";
import FOG from 'vanta/dist/vanta.fog.min';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const HerosSection = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const myRef = useRef(null);
  const textAnimation = useRef(null);
  const smalltextAnimation = useRef(null);


  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        highlightColor: 0x8aaff,
        midtoneColor: 0xff1f00,
        lowlightColor:0x2d00ff,
        baseColor:0xffebeb,
        blurFactor:0.6,
        speed: 1
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])


  useEffect(() => {
    textAnimation.current = AOS.init({
      duration:1000,
      easing:"ease-in-out",
      // offset:200,
      once:false,
    })

    smalltextAnimation.current = AOS.init({
      duration:500,
      easing:"ease-in-out",
      // offset:200,
      once:false,
    })
  },[])


  return (
    <section ref={myRef} style={{position:"relative",width:'100%',height:'100vh'}} id="/">
      <Box
        position="relative"
        width="100%"
        height="100%"
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
              data-aos="fade-up" ref={textAnimation}
            >
              <span className="Lora">
                Hi. I'm Hemant.
                I am into Web Development.
              </span>
            </Typography>

            <Box>
              <Typography
                textAlign="center"
                fontFamily={fontTokens.mulish}
                fontSize="clamp(0.5rem, 1rem, 1.5rem)"
                marginTop={"30px"}
                ref={smalltextAnimation}
                data-aos="fade-up"
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
              <span data-aos="fade-up" ref={textAnimation} className="Lora">
                Hi. I'm Hemant.
                I am into Web Development.
              </span>
            </Typography>
            <Box className="smallText" marginTop={"30px"}>
              <Typography
                fontFamily={fontTokens.mulish}
                textAlign="center"
                fontSize="clamp(0.5rem, 1rem, 2.25rem)"
                data-aos="fade-up"
                ref={textAnimation}
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
