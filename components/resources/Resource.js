import Heading from "../Heading";
import Image from "next/image";
import resources from "../../public/resources.png";
import { motion } from "framer-motion";

const Resource = () => {
    const animations = {
        photo: {
            initial: { opacity: 0, x: 50 },
            exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
            animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.1 } },
        },
        desc1: {
            initial: { opacity: 0, x: -50 },
            exit: { opacity: 0, x: -20, transition: { duration: 0.2, delay: 0.1 } },
            animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.2 } },
        },
        desc2: {
            initial: { opacity: 0, x: -50 },
            exit: { opacity: 0, x: -20, transition: { duration: 0.2, delay: 0.15 } },
            animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.3 } },
        },
        btn: {
            initial: { opacity: 0, y: -50 },
            exit: { opacity: 0, y: -20, transition: { duration: 0.2, delay: 0.1 } },
            animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.4 } },
        },
    };
    return (
        <>
            <Heading heading="Web Development Resources" />
            <div className="flex flex-row items-start justify-center my-16">
                <motion.div variants={animations.photo} initial="initial" animate="animate" exit="exit" className="shadow-lg">
                    <Image src={resources} className="rounded-lg" alt="Web Development Resources" />
                </motion.div>
                <div className="text-lightBluePrimary px-10 py-3 text-lg font-bodyText flex w-[60rem] flex-col items-start justify-center">
                    <motion.span variants={animations.desc1} initial="initial" animate="animate" exit="exit" className="mb-3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum deleniti ut consectetur, delectus, ratione libero perferendis rem quas quod ducimus nemo ad porro. Autem, asperiores libero, nostrum eum eligendi nihil ipsa atque maxime molestias{" "}
                    </motion.span>
                    <motion.span variants={animations.desc2} initial="initial" animate="animate" exit="exit" className="mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eos dolorum vel enim, dolore reiciendis maxime inventore vero ipsa asperiores.
                    </motion.span>
                    <motion.a variants={animations.btn} initial="initial" animate="animate" exit="exit" href="#" className="btn">
                        Get for Free
                    </motion.a>
                </div>
            </div>
        </>
    );
};

export default Resource;
