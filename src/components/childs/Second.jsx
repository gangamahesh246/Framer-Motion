import React from "react";
import "./green.css";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const Secondblk = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);
  return (
    <>
      <motion.div className="sm:w-full sm:relative sm:mt-20 xl:mt-28 secondblk"
      style={{scale}}
      >
        <motion.div className="secondsub sm:flex sm:flex-col sm:justify-center sm:items-center xl:flex-row" style={{display:"flex", alignItems:'center', justifyContent:"space-evenly"}}>
          <div className="secondclass sm:w-96 xl:w-128 sm:-mt-20 xl:mt-40">
            <h1 className="sm:text-xs xl:text-4xl" style={{color:"#1F1F1F", display:"flex", justifyContent:"center",marginTop:"120px"}}>THE TOUR IN<br/>A NUTSHELL</h1>
            <p style={{color:"#1F1F1F",marginLeft:"50px",marginRight:"50px"}}>Dua Lipa is an English and Albanian singer and songwriter. Her accolades include seven Brit Awards and three Grammy Awards.</p>
          </div>
          <div className="tim sm:-mt-28 xl:mt-0">
            <div className="pm1 sm:w-72 sm:ml-24 sm:-mt-0 xl:w-128 xl:-ml-10 xl:mt-0">
                <h2 className="text-xs" style={{color:"#1F1F1F",marginTop:"50px",marginLeft:"11px"}}>08.12/7PM</h2>
                <p 
                style={{marginTop:"0px",marginLeft:"13px",color:"#1F1F1F"}}>Dua Lipa is an English and Albanian singer and songwriter. Her accolades include seven Brit Awards and three Grammy Awards.Dua Lipa is an English and Albanian singer and songwriter. Her accolades include seven Brit Awards and three Grammy Awards.</p>
            </div>
            <div className="pm sm:w-72 sm:ml-24 sm:-mt-0 xl:w-128 xl:-ml-10 xl:mt-0">
            <h2 className="text-xs" style={{color:"#1F1F1F",marginTop:"30px", marginLeft:"11px"}}>09.15/8PM</h2>
            <p style={{marginTop:"0px",marginLeft:"13px",color:"#1F1F1F"}}>Dua Lipa is an English and Albanian singer and songwriter. Her accolades include seven Brit Awards and three Grammy Awards.Dua Lipa is an English and Albanian singer and songwriter. Her accolades include seven Brit Awards and three Grammy Awards.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Secondblk;
