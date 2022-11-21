import { motion } from "framer-motion";
import Link from "next/link";

function PostCard({ title, date, description, slug, index, tags }) {
  const animations = {
    initial: { x: 0, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { delay: index * 0.2 },
    },

    exit: {
      x: 0,
      opacity: 0,
      transition: { duration: 0.15, delay: index * 0.1 },
    },
  };
  return (
    <>
      <motion.div
        variants={animations}
        initial="initial"
        transition={{
          duration: 0.4,
          type: "spring",
          damping: 15,
          stiffness: 140,
          mass: 1,
        }}
        viewport={{ once: true }}
        animate="animate"
        exit="exit"
        className="touch-disable duration-200 transition-all hover:bg-cyanPrimary/5 border-cyanPrimary/10 border-2 rounded-lg px-7 sm:px-10 py-3 sm:py-4 my-2 mx-2"
      >
        <Link href="blogs/[slug]" as={`blogs/${slug}`}>
          <a>
            <p className="font-bold text-2xl !text-cyanPrimary mt-3 mb-4">
              {title}
            </p>
            <time className="mt-5 text-white/40">{date}</time>
            <p className="mt-1 mb-3 text-white/50">{description}</p>
            <div className="flex flex-row flex-wrap justify-start items-center">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-cyanPrimary/5 text-cyanPrimary/80 font-codeText rounded-full px-2 py-1 text-sm mr-2"
                >
                  #{tag}
                </span>
              ))}
            </div>
            {/* <a className="text-cyanPrimary my-4 mb-2 block">Read more &#8594;</a> */}
          </a>
        </Link>
      </motion.div>
    </>
  );
}

export default PostCard;
