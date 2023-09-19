import React, { useState } from "react";
// import { motion} from "framer-motion";
import Dialog from "@mui/material/Dialog";
// import { motion } from "framer-motion";
// import { navVariants} from "../utils/motion";
import { Box, Typography, useTheme } from "@mui/material";
import { fontTokens } from "../theme";

const DialogProjects = ({ src, Imgsrc, title }) => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState("xl");
  const theme = useTheme();
  const borderColor = theme.palette.neutral.headMain;
  // const borderColor = theme.palette.mode

  const handleOpen = () => {
    setOpen(true);
    setSize("xl");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeSize = () => {
    if (size === "xl") setSize("md");
    else setSize("xl");
  };

  return (
    <Box width="325px" height="260px" sx={{
      border:`1px solid ${borderColor}`
    }}
    display="flex" 
    flexDirection="column" 
    alignItems="center"  
    justifyContent="space-around">
      <Typography
         fontWeight="medium"
         textAlign="center"
         fontFamily={fontTokens.workSans}
         fontSize="clamp(0.8rem, 1rem, 1.25rem)"
         padding="1rem"
      >{title}
      </Typography>
      <Box>
        <Box width="325px" display="flex" alignItems="center" justifyContent="center">
          <img src={Imgsrc} onClick={handleOpen} style={{objectFit:'contain',cursor:'pointer'}} width="90%"  alt={title} />
        </Box>

        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth={size}
          maxWidth={size}
        >
          <Box
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              marginTop: "0px",
              border: "0px solid lightgrey",
              borderRadius: "0px",
            }}
          >
            <Box
              style={{
                marginTop: "-25px",
                padding: "10px",
                width: "100%",
                backgroundColor: "#f0f0f0",
                borderBottom: "1px solid lightgrey",
                height: "50px",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "start",
                  gap: "7px",
                  alignItems: "center",
                  fontSize: "160%",
                }}
              >
                <h1
                  onClick={handleClose}
                  style={{ zIndex: "50", marginTop: "12px", cursor: "pointer" }}
                >
                  <strong style={{ color: "#FE5E58" }}> .</strong>
                </h1>
                <h1 style={{ marginTop: "12px" }}>
                  <strong style={{ color: "#FEBD2C" }}>.</strong>
                </h1>
                <h1
                  onClick={changeSize}
                  style={{ marginTop: "12px", cursor: "pointer" }}
                >
                  <strong style={{ color: "#27C841" }}> .</strong>
                </h1>
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 0,
              }}
            >
              <Box className="iframeDiv">
                <iframe
                  allowFullScreen
                  src={src}
                  style={{ width: "100%", height: "100%" }}
                  className="iframeFrame"
                  title="Embedded Content"
                />
              </Box>
            </Box>
          </Box>
        </Dialog>
      </Box>
    </Box>
  );
};

export default DialogProjects;
