import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import {
  Box,
  TextField,
  Typography,
  // useTheme,
  Button,
  useMediaQuery,
} from "@mui/material";
import { fontTokens } from "../theme";
import FlexBetween from "./FlexBetween";
import svg from "../Assets/stacked-peaks-haikei.png";
import { Link } from "react-router-dom";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  // const theme = useTheme();
  // const backgroundColor = theme.palette.background.ctrl;
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
        marginTop="5rem"
        padding="1rem 6%"
        width="100%"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Box>
          <Toaster />
        </Box>
        <Typography
          fontWeight="bold"
          textAlign="center"
          fontFamily={fontTokens.mulish}
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          marginBottom="3rem"
        >
          Contact
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="90%"
        >
          {isNonMobileScreens ? (
            <Box
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              width="90%"
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="start"
                justifyContent="center"
                gap="2rem"
                width="40%"
              >
                <Box>
                  <Typography
                    width="100%"
                    fontWeight="bold"
                    textAlign="left"
                    fontFamily={fontTokens.annie}
                    fontSize="clamp(1rem, 1.2rem, 2.25rem)"
                    //  padding="1rem"
                  >
                    Email :-
                  </Typography>
                  <Typography
                    width="100%"
                    fontWeight="medium"
                    textAlign="left"
                    fontFamily={fontTokens.annie}
                    fontSize="clamp(1rem, 1.2rem, 2.25rem)"
                    //  padding="1rem"
                  >
                    hemantkumar0933@gmail.com
                  </Typography>
                </Box>

                <FlexBetween flexDirection={"column"}>
                  <Typography
                    width="100%"
                    fontWeight="bold"
                    textAlign="left"
                    fontFamily={fontTokens.annie}
                    fontSize="clamp(1rem, 1.2rem, 2.25rem)"
                    //  padding="1rem"
                  >
                    Location :-
                  </Typography>
                  <Typography
                    width="100%"
                    fontWeight="medium"
                    textAlign="left"
                    fontFamily={fontTokens.annie}
                    fontSize="clamp(1rem, 1.2rem, 2.25rem)"
                    //  padding="1rem"
                  >
                    Mount abu, Rajasthan
                  </Typography>
                  <Box
                    width="130px"
                    marginTop="1rem"
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Link to="https://github.com/hemant0933">
                      <GitHub
                        sx={{
                          fontSize: "38px",
                          "&:hover": {
                            color: "#fff",
                          },
                        }}
                      />
                    </Link>
                    <Link to="https://www.linkedin.com/in/hemant-kumar-0a9b69bb/">
                      <LinkedIn
                        sx={{
                          fontSize: "38px",
                          "&:hover": {
                            color: "#fff",
                          },
                        }}
                      />
                    </Link>
                    <Link to="https://www.instagram.com/hemant00000000/">
                      <Instagram
                        sx={{
                          fontSize: "38px",
                          "&:hover": {
                            color: "#fff",
                          },
                        }}
                      />
                    </Link>
                  </Box>
                </FlexBetween>
              </Box>
              <form
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2rem",
                  padding: "3rem",
                  borderRadius: "20px",
                }}
                className="glass"
                ref={form}
                onSubmit={sendEmail}
              >
                <TextField
                  fullWidth
                  label="Email"
                  fontFamily={fontTokens.mulish}
                  type="text"
                  id="email"
                  name="from_name"
                  style={{
                    fontFamily: fontTokens.italiana,
                    background: "white",
                  }}
                  onChange={(e) => setName(e.target.value)}
                />

                <textarea
                  placeholder="Enter your message"
                  name="message"
                  id="textarea"
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: "100%",
                    minHeight: "200px",
                    padding: "0.8rem",
                    fontSize: "0.9rem",
                    fontFamily: fontTokens.mulish,
                    background: "white",
                  }}
                />

                <Button
                  fullWidth
                  sx={{ padding: "0.5rem", border: "1px solid white" }}
                  type="submit"
                >
                  Submit
                </Button>
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
              <Box
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
                <Box
                  width="60%"
                  marginTop="1rem"
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
              <form
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2rem",
                  padding: "3rem",
                  borderRadius: "20px",
                }}
                className="glass"
                ref={form}
                onSubmit={sendEmail}
              >
                <TextField
                  fullWidth
                  label="Email"
                  fontFamily={fontTokens.mulish}
                  type="text"
                  id="email"
                  name="from_name"
                  style={{
                    fontFamily: fontTokens.italiana,
                    background: "white",
                  }}
                  onChange={(e) => setName(e.target.value)}
                />

                <textarea
                  placeholder="Enter your message"
                  name="message"
                  id="textarea"
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: "100%",
                    minHeight: "200px",
                    padding: "0.8rem",
                    fontSize: "0.9rem",
                    fontFamily: fontTokens.mulish,
                    background: "white",
                  }}
                />

                <Button
                  fullWidth
                  sx={{ padding: "0.5rem", border: "1px solid white" }}
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </Box>
          )}
        </Box>
        <Box
          width="100%"
          height="100vh"
          position="absolute"
          zIndex="-1"
          bottom="0"
        >
          <img src={svg} width="100%" height="100%" alt="svg" />
        </Box>
      </Box>
    </section>
  );
};

export default Contact;
