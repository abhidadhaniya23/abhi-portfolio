import { motion } from "framer-motion";
import Link from "next/link";

function PostCard({ title, date, description, slug, index }) {
    const animations = {
        initial: { x: 0, opacity: 0, x: -60 },
        animate: { x: 0, opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.2 * index } },
        exit: { x: 0, opacity: 0, x: 30, transition: { duration: 0.15, delay: 0.1 * index } },
    };
    return (
        <>
            <motion.div variants={animations} initial="initial" animate="animate" exit="exit" className="duration-200 transition-all hover:bg-cyanPrimary/5 border-cyanPrimary/10 border-2 rounded-lg px-10 py-4 my-2 mx-2">
                <Link href="/[slug]" as={`/${slug}`}>
                    <a>
                        <p className="font-bold text-2xl !text-cyanPrimary mt-3 mb-4">{title}</p>
                        <time className="mt-5 text-white/40">{date}</time>
                        <p className="mt-1 mb-3 text-white/50">{description}</p>
                        {/* <a className="text-cyanPrimary my-4 mb-2 block">Read more &#8594;</a> */}
                    </a>
                </Link>
            </motion.div>
        </>
    );
}

export default PostCard;
