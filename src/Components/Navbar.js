import React, { useState,useRef, useEffect  } from "react";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { DarkMode, LightMode, Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setTheme } from "../state/themeSlice";
import { NavLink, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import { fontTokens } from "../theme";
import 'remixicon/fonts/remixicon.css'


const menuArray = [
  { label: "Home", url: "/" },
  { label: "Education", url: "/education" },
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
  // const logo1 = theme.palette.primary.dark.logo;
  const logo = theme.palette.primary.logo;
  const bgColor = theme.palette.background.bgColor;

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
    <FlexBetween padding="1rem 2%" bgcolor={bgColor} width="100%" zIndex="1000" position="fixed" borderBottom="1px solid #e5dddf">
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontFamily={fontTokens.mulish}
          fontSize="clamp(1rem, 2rem, 2.5rem)"
          onClick={() => navigate("/")}
          color={logo}
          sx={{
            "&:hover": {
              color:{bgColor},
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
                // fontWeight="bold"
                fontFamily={fontTokens.mulish}
                fontSize="clamp(1rem, 1.1rem, 1.5rem)"
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
         <i className="ri-menu-line"></i>
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          top="0"
          right="0"
          bottom="0"
          height="80%"
          zIndex="10"
          maxWidth="400px"
          minWidth="200px"
          backgroundColor={bgColor}
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
            gap="2rem"
          >
            {menuArray.map((item, i) => (
              <NavLink key={`${i}+${item.label}`} to={item.url}>
                <Typography
                  // fontWeight="bold"
                  fontFamily={fontTokens.mulish}
                  fontSize="clamp(1rem, 1.1rem, 1.5rem)"
                  sx={{
                    padding: "10px", // Add padding so the background doesn't touch the text
                    borderRadius: "10px", // Add border radius
                    transition: "background-color 0.3s ease", // Add transition for a smooth hover effect
                    "&:hover": {
                      cursor: "pointer",
                      textDecoration: "#E5B8F4", 
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
