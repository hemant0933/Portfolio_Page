import React, { useState,useRef, useEffect  } from "react";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { DarkMode, LightMode, Menu, Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setTheme } from "../state/themeSlice";
import { NavLink, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import { fontTokens } from "../theme";

const menuArray = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Project", url: "/project" },
  { label: "Skills", url: "/skill" },
  { label: "Contact", url: "/contact" },
];

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const boxRef = useRef(null);

  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const dark = theme.palette.neutral.dark;
  const primaryLight = theme.palette.neutral.headMain;
  const bglight = theme.palette.background.light;
  const light = theme.palette.neutral.main;

  useEffect(() => {
    if (isMobileMenuToggled) {
      const handleClickOutside = (event) => {
        if (boxRef.current && !boxRef.current.contains(event.target)) {
          setIsMobileMenuToggled(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isMobileMenuToggled]);
 

  return (
    <FlexBetween padding="1rem 6%" borderBottom="1px solid #e5dddf">
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontFamily={fontTokens.italiana}
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color={primaryLight}
          onClick={() => navigate("/")}
          sx={{
            "&:hover": {
              color: light,
              cursor: "pointer",
            },
          }}
        >
          Portfolio <span style={{ color: "#E384FF" }}>.</span>
        </Typography>
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? 
      (
        <FlexBetween gap="2rem">
          {menuArray.map((item, i) => (
            <NavLink key={`${i}+${item.label}`} to={item.url}>
              <Typography
                fontWeight="bold"
                fontFamily={fontTokens.mulish}
                fontSize="clamp(1rem, 1.2rem, 2.25rem)"
                color={primaryLight}
                sx={{
                  padding: "10px",
                  borderRadius: "10px",

                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "#E5B8F4",
                  },
                }}
              >
                {item.label}
              </Typography>
            </NavLink>
          ))}

          <IconButton onClick={() => dispatch(setTheme())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
        </FlexBetween>
      ) : 
      (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="400px"
          minWidth="200px"
          backgroundColor={bglight}
          ref={boxRef}
          
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            {menuArray.map((item, i) => (
              <NavLink key={`${i}+${item.label}`} to={item.url}>
                <Typography
                  fontWeight="bold"
                  fontFamily={fontTokens.mulish}
                  fontSize="clamp(1rem, 1.2rem, 2.25rem)"
                  sx={{
                    padding: "10px", // Add padding so the background doesn't touch the text
                    borderRadius: "10px", // Add border radius
                    transition: "background-color 0.3s ease", // Add transition for a smooth hover effect
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#E5B8F4", // Change background color on hover
                    },
                  }}
                >
                  {item.label}
                </Typography>
              </NavLink>
            ))}
            <IconButton
              onClick={() => dispatch(setTheme())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
          </Box>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
