import React, { useState } from "react";
// import { motion} from "framer-motion";
import Dialog from "@mui/material/Dialog";
import { motion } from "framer-motion";
import { navVariants} from "../utils/motion";

const DialogProjects = ({ src, Imgsrc, title }) => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState("xl");

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
    <motion.div  
      variants={navVariants}
      initial="hidden"
      whileInView="show" className="cards">
      <p>{title}</p>
      <div 
        className="imgholder">
        <div 
          className="holder">
          <img src={Imgsrc} onClick={handleOpen} className="w-100" alt="p1" />
        </div>

        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth={size}
          maxWidth={size}
        >
          <div
            className=""
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
            <div
              style={{
                marginTop: "-25px",
                padding: "5px",
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  gap: "5px",
                  alignItems: "center",
                  fontSize: "140%",
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
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 0,
              }}
            >
              <div className="iframeDiv">
                <iframe
                  allowFullScreen
                  src={src}
                  style={{ width: "100%", height: "100%" }}
                  className="iframeFrame"
                  title="Embedded Content"
                />
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </motion.div>
  );
};

export default DialogProjects;
