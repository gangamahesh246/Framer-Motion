import Firstblk from "./components/childs/First";
import Secondblk from "./components/childs/Second";
import Thirdblk from "./components/childs/Third";
import Fifthblk from "./components/childs/Fifth";
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "./components/childs/green.css";

function Home() {
  const [hidden, setHidden] = useState(true);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const prev = scrollYProgress.getPrevious();
    if (latest > prev && latest > 0.01) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  
  return (
    <>
      <div 
      className="overflow-hidden"
      style={{ backgroundColor: "#1F1F1F" }}>
        <motion.nav
          variants={{
            hidden: { y: "-100%" },
          }}
          animate={hidden ? "hidden" : { y: 0 }}
          transition={{ duration: 0.7, type: "tween", ease: "easeInOut" }}
          className="w-full h-20 sticky top-0 flex items-center sm:px-4"
          style={{ backgroundColor: "#48C067", fontWeight: "500" }}
        >
          <div>
            <h4 className="text-2xl ml-3 font-bold text-black underline animate-bounce">DUALIPA</h4>
          </div>
          <ul className="md:flex xl:ml-96 md:ml-24 lg:ml-60 sm:hidden">
            <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            href="#"><li
            >Home</li></motion.a>
            <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            href="#"><li>Playlist</li></motion.a>
            <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            href="#"><li>Book Ticket</li></motion.a>
            <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            href="#"><li>Upcoming</li></motion.a>
            <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            href="#"><li>About</li></motion.a>
          </ul>
          <div className="sm:visible xl:invisible w-fit h-fit">
          <CiMenuKebab className="sm:visible xl:invisible text-2xl sm:ml-80 xl:ml-0"/>
          </div>
        </motion.nav>
        <Firstblk />
        <Secondblk />
        <Thirdblk />
        <Fifthblk />
      </div>
    </>
  );
}

export default Home;
