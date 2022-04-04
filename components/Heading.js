const Heading = ({ heading }) => {
    return (
        <>
            <h1 className="text-5xl text-center font-bodyText text-cyanPrimary">{heading}</h1>
            <span className="block w-32 h-[1px] mx-auto my-5 bg-cyanPrimary"></span>
        </>
    );
};

export default Heading;
