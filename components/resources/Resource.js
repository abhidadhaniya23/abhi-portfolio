import Heading from "../Heading";
import Image from "next/image";
import resources from "../../public/resources.png";

const Resource = () => {
    return (
        <>
            <Heading heading="Web Development Resources" />
            <div className="flex flex-row items-start justify-center my-16">
                <div className="shadow-lg">
                    <Image src={resources} className="rounded-lg" alt="Web Development Resources" />
                </div>
                <div className="text-lightBluePrimary px-10 py-3 text-lg font-bodyText flex w-[60rem] flex-col items-start justify-center">
                    <span className="mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum deleniti ut consectetur, delectus, ratione libero perferendis rem quas quod ducimus nemo ad porro. Autem, asperiores libero, nostrum eum eligendi nihil ipsa atque maxime molestias </span>
                    <span className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eos dolorum vel enim, dolore reiciendis maxime inventore vero ipsa asperiores.</span>
                    <a href="#" className="btn">
                        Get for Free
                    </a>
                </div>
            </div>
        </>
    );
};

export default Resource;
