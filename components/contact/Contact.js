// import { useState } from "react/cjs/react.production.min";
import Heading from "../Heading";

const Contact = () => {
    // const [contactDetails, setContactDetails] = useState({});
    const submitForm = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Heading heading={"Get In Touch"} />
            <div className="mt-20 font-bodyText">
                <form action="/" onSubmit={submitForm} className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center">
                        <input className="w-full mr-2 input" type="text" placeholder="Full Name" />
                        <input className="w-full ml-2 input" type="email" placeholder="Email" />
                    </div>
                    <input className="w-full m-4 input" type="text" placeholder="Subject" />
                    <textarea className="w-full m-2 h-28 input" placeholder="Message" value="" name=""></textarea>
                    {/* <input  type="submit" value="Send Message" /> */}
                    <button className="btn" type="submit">
                        Send Message
                    </button>
                </form>
            </div>
        </>
    );
};

export default Contact;
