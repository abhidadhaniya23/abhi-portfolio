import Heading from "../Heading";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactContext from "../../context/ContactContext";
import axios from "axios";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [msg, setMsg] = useState("");
    // const [success, setSuccess] = useState(true);
    const submitForm = (event) => {
        event.preventDefault();
        // re-set all states
        const data = { name, email, subject, msg };
        // axios
        //     .post("/https://web-developer-abhi.herokuapp.com/contact", {
        //         method: "POST",
        //         headers: {
        //             Accept: "application/json, text/plain, */*",
        //             "Content-Type": "application/json",
        //         },
        //         data: JSON.stringify(data),
        //     })
        //     .then((res) => {
        //         console.log("Response received");
        //         if (res.status === 200) {
        //             console.log("Response succeeded!");
        //             // setSubmitted(true);
        //             setName("");
        //             setEmail("");
        //             setSubject("");
        //             setMsg("");
        //         }
        //     });
        const submitRequest = async () => {
            console.log("done");
            const reqData = await fetch("api/contact", {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).then((res) => {
                console.log(res);
                console.log("Response received");
                if (res.status === 200) {
                    console.log("Response succeeded!");
                    // setSubmitted(true);
                    setName("");
                    setEmail("");
                    setSubject("");
                    setMsg("");
                }
            });
        };
        submitRequest();
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
            <ContactContext.Provider value={{ name, setName, email, setEmail, subject, setSubject, msg, setMsg }}>
                <div className="px-7">
                    <Heading heading={"Get In Touch"} />
                    <div className="mt-10 font-bodyText">
                        <form onSubmit={submitForm} className="flex flex-col items-center justify-center">
                            <div className="flex flex-row items-center justify-center">
                                <motion.input value={name} onChange={(e) => setName(e.target.value)} variants={animations.nameInput} initial="initial" animate="animate" exit="exit" className="w-full mr-2 input" type="text" placeholder="Full Name" required />
                                <motion.input value={email} onChange={(e) => setEmail(e.target.value)} variants={animations.emailInput} initial="initial" animate="animate" exit="exit" className="w-full ml-2 input" type="email" placeholder="Email" required />
                            </div>
                            <motion.input value={subject} onChange={(e) => setSubject(e.target.value)} variants={animations.subjectInput} initial="initial" animate="animate" exit="exit" className="w-full m-4 input" type="text" placeholder="Subject" required />
                            <motion.textarea value={msg} onChange={(e) => setMsg(e.target.value)} variants={animations.msgInput} initial="initial" animate="animate" exit="exit" className="w-full m-2 h-28 input" placeholder="Message" name="" required></motion.textarea>
                            <motion.button variants={animations.btn} initial="initial" animate="animate" exit="exit" className="btn" type="submit">
                                Send Message
                            </motion.button>
                        </form>
                    </div>
                </div>
            </ContactContext.Provider>
        </>
    );
};

export default Contact;
