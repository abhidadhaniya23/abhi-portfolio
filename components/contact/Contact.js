// import { useState } from "react/cjs/react.production.min";
import Heading from "../Heading";
import { motion } from "framer-motion";

const Contact = () => {
    // const [contactDetails, setContactDetails] = useState({});
    const submitForm = (event) => {
        event.preventDefault();
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
            <div className="px-7">
                <Heading heading={"Get In Touch"} />
                <div className="mt-10 font-bodyText">
                    <form action="/" onSubmit={submitForm} className="flex flex-col items-center justify-center">
                        <div className="flex flex-row items-center justify-center">
                            <motion.input variants={animations.nameInput} initial="initial" animate="animate" exit="exit" className="w-full mr-2 input" type="text" placeholder="Full Name" />
                            <motion.input variants={animations.emailInput} initial="initial" animate="animate" exit="exit" className="w-full ml-2 input" type="email" placeholder="Email" />
                        </div>
                        <motion.input variants={animations.subjectInput} initial="initial" animate="animate" exit="exit" className="w-full m-4 input" type="text" placeholder="Subject" />
                        <motion.textarea variants={animations.msgInput} initial="initial" animate="animate" exit="exit" className="w-full m-2 h-28 input" placeholder="Message" value="" name=""></motion.textarea>
                        <motion.button variants={animations.btn} initial="initial" animate="animate" exit="exit" className="btn" type="submit">
                            Send Message
                        </motion.button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
