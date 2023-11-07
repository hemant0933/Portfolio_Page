import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import contact from "../Assets/animation_lo6o1xcy.json";

import Lottie from "react-lottie-player";
import {
  Box,
  Typography,
  // useTheme,
  useMediaQuery,
} from "@mui/material";
import { fontTokens } from "../theme";
import { Link } from "react-router-dom";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Please enter the details");
      return;
    } else if (message === "") {
      toast.error("Please enter a message");
      return;
    }
    emailjs
      .sendForm(
        "service_owcrsjo",
        "template_hr149jg",
        form.current,
        "BZgnznh-vuJ1deIo9"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Message Sented");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <Box
        position="relative"
        padding="2.3rem 6%"
        width="100%"
        height="auto"
        display="flex"
        alignItems="center"
        justifyContent={"center"}
        flexDirection="column"
        bgcolor="#343a40"
      >
        <Box>
          <Toaster />
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="90%"
        >
          {isNonMobileScreens ? (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="50%"
              >
                <Lottie
                  play
                  loop
                  mode="normal"
                  animationData={contact}
                  className="w-full h-full "
                />
              </Box>
              <form
                style={{
                  width: "45%",
                  height: "400px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  padding: "1rem",
                  borderRadius: "20px",
                  border: "1px solid gray",
                }}
                ref={form}
                onSubmit={sendEmail}
              >
                <Typography
                  textAlign="center"
                  fontFamily={fontTokens.mulish}
                  color={"white"}
                  fontSize="clamp(1rem, 1.5rem, 2.5rem)"
                  marginBottom={"20px"}
                  style={{ textDecoration: "underline pink wavy 1px" }}
                >
                  Get in Touch
                </Typography>

                <div className="inputGroup">
                  <input
                    fontFamily={fontTokens.mulish}
                    type="text"
                    id="email"
                    name="from_name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label for="email">Email</label>
                </div>

                <div className="inputGroup">
                  <input
                    name="message"
                    type="text"
                    id="textarea"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <label>Message</label>
                </div>

                <button className="submitBtn" type="submit">
                  Submit
                </button>
              </form>
            </Box>
          ) : (
            <Box
              display="flex"
              alignItems="center"
              gap="2rem"
              flexDirection="column"
              width="100%"
            >
              {/* <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="2rem"
                width="100%"
              >
                <Box>
                  <Typography
                    width="100%"
                    fontWeight="bold"
                    textAlign="center"
                    fontFamily={fontTokens.annie}
                    fontSize="clamp(1rem, 1.2rem, 2.25rem)"
                    //  padding="1rem"
                  >
                    Email :-
                  </Typography>
                  <Typography
                    width="100%"
                    fontWeight="medium"
                    textAlign="center"
                    fontFamily={fontTokens.annie}
                    fontSize="clamp(1rem, 1.2rem, 2.25rem)"
                    //  padding="1rem"
                  >
                    hemantkumar0933@gmail.com
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    width="100%"
                    fontWeight="bold"
                    textAlign="center"
                    fontFamily={fontTokens.annie}
                    fontSize="clamp(1rem, 1.2rem, 2.25rem)"
                    //  padding="1rem"
                  >
                    Location :-
                  </Typography>
                  <Typography
                    width="100%"
                    fontWeight="medium"
                    textAlign="center"
                    fontFamily={fontTokens.annie}
                    fontSize="clamp(1rem, 1.2rem, 2.25rem)"
                    //  padding="1rem"
                  >
                    Mount abu, Rajasthan
                  </Typography>
                </Box>
                
              </Box> */}
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                gap="2rem"
                width="100%"
              >
                <Lottie
                  play
                  loop
                  mode="normal"
                  animationData={contact}
                  className="w-full h-full "
                />
              </Box>

              <form
                style={{
                  width: "90%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "2rem",
                  borderRadius: "20px",
                  border: "1px solid gray",
                }}
                ref={form}
                onSubmit={sendEmail}
              >
                <Typography
                  // fontWeight="bold"
                  textAlign="center"
                  fontFamily={fontTokens.mulish}
                  color={"white"}
                  style={{ textDecoration: "underline pink wavy 2px" }}
                  fontSize="clamp(1rem, 1.5rem, 2.5rem)"
                >
                  Get in Touch
                </Typography>

                <div className="inputGroup">
                  <input
                    fontFamily={fontTokens.mulish}
                    type="text"
                    id="email"
                    name="from_name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label for="email">Email</label>
                </div>

                <div className="inputGroup">
                  <input
                    name="message"
                    type="text"
                    id="textarea"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <label>Message</label>
                </div>

                <button className="submitBtn" type="submit">
                  Submit
                </button>
              </form>
            </Box>
          )}
        </Box>
        <Box
          width="200px"
          marginTop="2rem"
          display="flex"
          justifyContent="space-between"
        >
          <Link to="https://github.com/hemant0933">
            <GitHub
              sx={{
                fontSize: "38px",
                "&:hover": {
                  color: "#865DFF",
                },
              }}
            />
          </Link>
          <Link to="https://www.linkedin.com/in/hemant-kumar-0a9b69bb/">
            <LinkedIn
              sx={{
                fontSize: "38px",
                "&:hover": {
                  color: "#865DFF",
                },
              }}
            />
          </Link>
          <Link to="https://www.instagram.com/hemant00000000/">
            <Instagram
              sx={{
                fontSize: "38px",
                "&:hover": {
                  color: "#865DFF",
                },
              }}
            />
          </Link>
        </Box>
      </Box>
    </section>
  );
};

export default Contact;
