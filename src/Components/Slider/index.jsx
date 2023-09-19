import React from "react";
import "./index.css";
import FlexBetween from "../FlexBetween";
import { Box, Tooltip } from "@mui/material";

const index = ({ IconArray }) => {
  return (
    <>
      <FlexBetween>
        {IconArray.map((icon, index) => (
          <Box padding="1rem" width="100px" height="100px">
            <Tooltip title={icon.label} placement="bottom" arrow>
              <img
                key={index}
                className="iconStyle"
                width="100%"
                src={icon.url}
                alt={icon.label}
              />
            </Tooltip>
          </Box>
        ))}
      </FlexBetween>
    </>
  );
};

export default index;
