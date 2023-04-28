import Heading from "../Heading";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dataReceived, setDataReceived] = useState(false);
  const submitForm = (event: any) => {
    event.preventDefault();
    setFormSubmitted(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        // @ts-ignore
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmitted(false);
          setDataReceived(true);
          event.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const animations = {
    nameInput: {
      initial: { opacity: 0, x: 20 },
      exit: { opacity: 0, x: 10, transition: { duration: 0.3 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.3 } },
    },
    emailInput: {
      initial: { opacity: 0, x: -20 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.3 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.3 } },
    },
    subjectInput: {
      initial: { opacity: 0, y: -30 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.4 } },
    },
    msgInput: {
      initial: { opacity: 0, y: -30 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.5 } },
    },
    btn: {
      initial: { opacity: 0, y: -30 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.6 } },
    },
  };
  return (
    <>
      <div className="px-2 lg:px-10">
        <Heading heading={"Get In Touch"} />
        <div className="mt-10 font-bodyText">
          <form
            // @ts-ignore
            ref={form}
            onSubmit={submitForm}
            className="flex flex-col items-center justify-center max-w-xl w-full mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full">
              <motion.input
                name="name"
                variants={animations.nameInput}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full input"
                type="text"
                placeholder="Full Name"
                required
              />
              <motion.input
                name="email"
                variants={animations.emailInput}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full input"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <motion.input
              name="subject"
              variants={animations.subjectInput}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full m-4 input"
              type="text"
              placeholder="Subject"
              required
            />
            <motion.textarea
              variants={animations.msgInput}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full m-2 h-28 input"
              placeholder="Message"
              name="message"
              required
            ></motion.textarea>
            <motion.button
              variants={animations.btn}
              initial="initial"
              animate="animate"
              exit="exit"
              disabled={formSubmitted}
              className={`btn mt-5 ${formSubmitted && "cursor-not-allowed"} `}
              type="submit"
            >
              {formSubmitted ? (
                <>
                  <div className="loader"></div>
                </>
              ) : dataReceived ? (
                "Message Sent"
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
