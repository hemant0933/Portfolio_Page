import { Box } from '@mui/material';
import React from 'react';
import './style.css';
import Lottie from "react-lottie-player";
import ErrorLottie  from "../../Assets/404_error.json";

const ErrorPage = () => {


  return (
    <Box width={"100%"} height={"100vh"} mx={"auto"} display={"flex"} paddingTop={"50px"} justifyContent={"center"} alignItems={"center"}>
      <div id='parent'>
        <Lottie
          play
          loop
          mode="normal"
          animationData={ErrorLottie}
          className='errorLottie'
        />
      </div>
    </Box>
  );
}

export default ErrorPage;
