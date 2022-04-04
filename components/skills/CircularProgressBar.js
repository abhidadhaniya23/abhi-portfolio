import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import Image from "next/image";

const CircularProgressBar = ({ value, name, url }) => {
    return (
        <div className="relative w-32 mx-5 text-center">
            <CircularProgressbar
                value={value}
                circleRatio={0.75}
                styles={buildStyles({
                    rotation: 1 / 2 + 1 / 8,
                    strokeLinecap: "butt",
                    pathColor: "#65FEDA",
                    trailColor: "#ffffff1a",
                })}
            />
            <div className="absolute w-12 pb-10 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <Image src={url} alt="Abhi Dadhaniya" />
            </div>
            <h2 className="pb-5 text-xl text-center font-codeText text-lightBluePrimary">{name}</h2>
        </div>
    );
};

export default CircularProgressBar;
