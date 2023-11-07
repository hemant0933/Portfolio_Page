import React from "react";
import "./index.css";
import { Box, Tooltip } from "@mui/material";

const index = ({ IconArray }) => {
  return (
    <>
      <Box 
        display={"flex"} 
        justifyContent={"center"} 
        alignItems={"center"}  
        flexWrap={"wrap"}
        gap={"80px"}
        >
        {IconArray.map((icon, index) => (
          <Box className="skillcard">
            <Tooltip title={icon.label} placement="bottom" arrow>
              <img
                key={index}
                className="iconStyle"
                width="60px"
                height="60px"
                src={icon.url}
                alt={icon.label}
              />
            </Tooltip>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default index;
