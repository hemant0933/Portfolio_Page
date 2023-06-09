import React, { useRef, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion"
import { navVariants,textVariant2 } from "../utils/motion";


const Contact = () => {
   const [name, setName] = useState("");
   const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if(name === ""){
        toast.error("Please enter the details")
        return;
    }
    else if(message === ""){
        toast.error("Please enter a message")
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
          toast('Message Sented');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div 
      variants={navVariants}
      initial="hidden"
      whileInView="show"
     className="divide">
        <div><Toaster/></div>
      <motion.h1 variants={textVariant2}>Hire me !</motion.h1>
 
        <div class="form-container">
          <form class="form" ref={form} onSubmit={sendEmail}>
            <div class="form-group">
              <label for="email">Visitor Email</label>
              <input type="text" id="email" name="from_name" onChange={(e) => setName(e.target.value)} />
            </div>

            <div class="form-group">
              <label for="textarea">How Can I Help You?</label>
              <textarea
                name="message"
                id="textarea"
                rows="10"
                cols="50"
                onChange={(e) => setMessage(e.target.value)}
              >
                {" "}
              </textarea>
            </div>

            <button class="form-submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </motion.div>
  );
};

export default Contact;
