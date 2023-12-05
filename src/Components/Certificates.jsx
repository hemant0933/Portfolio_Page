import { Box } from '@mui/material';
import React, { useState } from 'react';
import Dialog from "@mui/material/Dialog";

const Certificates = ({imgData}) => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
   
    const handleOpen = (image) => {
        setSelectedImage(image)
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
  return (
    <Box
        display="flex"
        alignItems="center" 
        padding="2rem"
        gap="4rem"
     >
      {
        imgData && imgData.map((item,i) => (
           <>
           <Box key={i} width="280px" padding="0.8rem" sx={{cursor:'pointer'}} height="220px" className="boxShadow">
             <img src={item.label} width={"100%"} onClick={() => handleOpen(item.label)} height={"100%"} alt='certification' />
           </Box>

             <Dialog
              open={open}
              onClose={handleClose}
              >
             <img src={selectedImage} alt="Selected Certificate" style={{ width: '100%', height: 'auto' }} />
             </Dialog>
           </>
        ))
      }
    </Box>
  );
}

export default Certificates;
