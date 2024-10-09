import React, { useState } from "react";
import "./green.css";
import "../childs/external.module.css";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const paravariants = {
  initial: { width: 0 },
  show: {
    width: "350px",
  },
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Firstblk = () => {
 
  const x = useMotionValue(0);
  const y = useMotionValue(0);


  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const mouseMove = (e) => {
    const photo = e.target.getBoundingClientRect();

    const width = photo.width;
    const height = photo.height;

    const mousex = e.clientX - photo.left;
    const mousey = e.clientY - photo.top;

    const xpct = mousex / width - 0.5;
    const ypct = mousey / height - 0.5;

    x.set(xpct);
    y.set(ypct);
  };
  const child = "CONCERT";
  return (
    <>
      <div className="firstblk">
        <div className="firstsub sm:flex sm:flex-col xl:flex-row xl:justify-evenly sm:items-center sm:justify-center ">
          <div className="firstclass mt-20">
            <motion.div
              initial="initial"
              whileInView="hovered"
              className="relative block overflow-hidden whitespace-nowrap"
              style={{ letterSpacing: "2px" }}
            >
            <div>
                <h1>
                  {child.split("").map((char, i) => {
                    return (
                      <>
                        <motion.span
                          variants={{
                            initial: {
                              y: 0,
                            },
                            hovered: {
                              y: "-200%",
                            },
                          }}
                          transition={{
                            duration: 0.15,
                            ease: "easeInOut",
                            delay: 0.25 * i,
                          }}
                          className="inline-block"
                          key={i}
                        >
                          {char}{" "}
                        </motion.span>
                      </>
                    );
                  })}
                </h1>
                <h1 className="absolute inset-0 text-">
                  {child.split("").map((char, i) => (
                    <motion.span
                      variants={{
                        initial: {
                          y: "100%",
                        },
                        hovered: {
                          y: 0,
                          scale: 1.2
                        },
                      }}
                      transition={{
                        duration: 0.15,
                        ease: "easeInOut",
                        delay: 0.25 * i,
                      }}
                      className="inline-block"
                      key={i}
                    >
                      {char}
                    </motion.span>
                  ))}
                </h1>
              </div>
            </motion.div>
            <motion.div className="mt-1 -ml-1 overflow-hidden h-40 text-white p-1">
              <motion.div
                variants={paravariants}
                initial="initial"
                animate="show"
                transition={{
                  ease: "linear",
                  duration: 1.3,
                }}
                className="overflow-hidden h-4 whitespace-nowrap tracking-wide "
              >
                Dua Lipa is an English and Albanian singer and
              </motion.div>
              <motion.div
                variants={paravariants}
                initial="initial"
                animate="show"
                transition={{
                  ease: "linear",
                  duration: 1.3,
                  delay: 1.3,
                }}
                className="overflow-hidden h-4 whitespace-nowrap tracking-wide"
              >
                songwriter. Her accolades include seven Brit
              </motion.div>
              <motion.div
                variants={paravariants}
                initial="initial"
                animate="show"
                transition={{
                  ease: "linear",
                  duration: 1.3,
                  delay: 2.6,
                }}
                className="overflow-hidden h-4 whitespace-nowrap tracking-wide "
              >
                Awards and three Grammy Awards. Time
              </motion.div>
              <motion.div
                variants={paravariants}
                initial="initial"
                animate="show"
                transition={{
                  ease: "linear",
                  duration: 1.3,
                  delay: 3.9,
                }}
                className="overflow-hidden h-4 whitespace-nowrap tracking-wide"
              >
                included her in its list of the top 100 most
              </motion.div>
              <motion.div
                variants={paravariants}
                initial="initial"
                animate="show"
                transition={{
                  ease: "linear",
                  duration: 1.3,
                  delay: 5.2,
                }}
                className="overflow-hidden h-4"
              >
                influential people in the world for 2024.
              </motion.div>
            </motion.div>
            <div style={{ display: "flex" }}>
              <motion.div
                className="schedule btn "
                variants={{
                  initial: {
                    opacity: 1,
                  },
                  hovered: {
                    opacity: 1,
                    scale: [1, 1.2, 1],
                  },
                }}
                initial="initial"
                whileHover="hovered"
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                }}
              >
                SCHEDULES
              </motion.div>
              <motion.div
                className="learn btn"
                variants={{
                  initial: {
                    opacity: 1,
                  },
                  hovered: {
                    opacity: 1,
                    scale: [1, 1.2, 1],
                  },
                }}
                initial="initial"
                whileHover="hovered"
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                }}
              >
                LEARN MORE
              </motion.div>
            </div>
          </div>
          <motion.div
            style={{ rotateX, rotateY }}
            className="dj relative sm:-mt-32 xl:mt-32"
            onMouseMove={mouseMove}
          >
            <div
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(75px)",
                width: "90%",
                height: "90%",
              }}
              className="abslolute inset-4 grid place-content-center border-2 border-white mt-4 ml-3"
            >
              <p
                style={{
                  transform: "translateZ(75px)",
                }}
                className="text-3xl font-bold mt-72 -ml-2 "
              >
                DUALIPA
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="timings"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <motion.div
              variants={item}
              whileHover={{
                backgroundColor: "#1F1F1F",
              }}
              style={{ width: "35%", height: "40%" }}
              className="bg-neutral-900 pl-3 rounded-3xl cursor-pointer"
            >
              <div
                style={{
                  width: "100px",
                  height: "20px",
                  border: "2px solid #48c067",
                  borderRadius: "50px",
                  margin: "20px 10px",
                }}
              ></div>
              <h2 className="ml-1">08.12</h2>
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "12px",
                  marginLeft: "10px",
                }}
              >
                Include seven Brit
                <br /> Awards and three
                <br /> Grammy Awards.
              </p>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{
                backgroundColor: "#1F1F1F",
              }}
              style={{ width: "35%", height: "40%" }}
              className="bg-neutral-900 pl-3 rounded-3xl cursor-pointer"
            >
              <div
                style={{
                  width: "100px",
                  height: "20px",
                  border: "2px solid #48c067",
                  borderRadius: "50px",
                  margin: "20px 10px",
                }}
              ></div>
              <h2 className="ml-1">09.15</h2>
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "12px",
                  marginLeft: "10px",
                }}
              >
                Include seven Brit
                <br /> Awards and three
                <br /> Grammy Awards.
              </p>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{
                backgroundColor: "#1F1F1F",
              }}
              style={{ width: "35%", height: "40%" }}
              className="bg-neutral-900 pl-3 rounded-3xl cursor-pointer"
            >
              <h2 className="ml-1 mt-1">10.12</h2>
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "12px",
                  marginLeft: "10px",
                }}
              >
                Include seven Brit
                <br /> Awards and three
                <br /> Grammy Awards.
              </p>
              <div
                style={{
                  width: "100px",
                  height: "20px",
                  border: "2px solid #48c067",
                  borderRadius: "50px",
                  margin: "25px -3px",
                }}
              ></div>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{
                backgroundColor: "#1F1F1F",
              }}
              style={{ width: "35%", height: "40%" }}
              className="bg-neutral-900 pl-3 rounded-3xl cursor-pointer"
            >
              <h2 className="ml-1 mt-1">10.28</h2>
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "12px",
                  marginLeft: "10px",
                }}
              >
                Include seven Brit
                <br /> Awards and three
                <br /> Grammy Awards.
              </p>
              <div
                style={{
                  width: "100px",
                  height: "20px",
                  border: "2px solid #48c067",
                  borderRadius: "50px",
                  margin: "25px -3px",
                }}
              ></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Firstblk;
