import Image from "next/image";

const SkillCard = ({ name, url }) => {
    return (
        <h3 className="flex flex-row items-center rounded-[4px] justify-start w-full py-2 mb-3 text-xl text-left px-7 bg-darkBluePrimary text-lightBluePrimary">
            <div className="w-8 mt-1 mr-4">
                <Image src={url} alt={name} />
            </div>
            {name}
        </h3>
    );
};

export default SkillCard;
