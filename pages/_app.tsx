import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      type: "tween",
    },
  },
  exit: { opacity: 0, scale: 0.98 },
};

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence
      key={router.asPath}
      initial={true}
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "tween",
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
