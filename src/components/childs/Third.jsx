import React from "react";
import "./green.css";
import { motion } from "framer-motion";

const Thirdblk = () => {
  const radical = "RADICAL";
  const violet = "VIOLET GEARS";
  return (
    <>
      <div className="firstblk sm:mt-40 xl:mt-52">
        <div className="thirdsub">
          <div className="thirdclass">
            <h1 style={{ textAlign: "center", letterSpacing: "7px" }}>
              The Top Artist
            </h1>
            <p
              style={{ textAlign: "center", color: "white", marginTop: "5px" }}
            >
              Dua Lipa is an English and Albanian singer and songwriter.Her
              <br />
              accolades includeseven Brit Awardsand three Grammy Awards
            </p>
          </div>
          <div className="time sm:mt-10 xl:mt-0 sm:flex sm:flex-col sm:justify-center sm:items-center xl:flex-row xl:justify-evenly xl:items-center">
            <div className="time1">
              <motion.div
                initial="initial"
                whileHover="hovered"
                style={{
                  width: "100%",
                  height: "280px",
                  border: "3px solid white",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <motion.img
                  initial={{ opacity: 0.5 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  src="lipa-concert.jpeg"
                  width={"100%"}
                  height="100%"
                />
                <div className="absolute bottom-0 left-0 w-fit h-fit block overflow-hidden whitespace-nowrap">
                  <p
                    style={{
                      color: "#48C067 ",
                      fontSize: "22px",
                      fontWeight: "bold",
                      padding: "8px",
                      letterSpacing: "2px",
                    }}
                  >
                    {radical.split("").map((char, i) => {
                      return (
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
                            duration: 0.7,
                            ease: "easeInOut",
                            delay: 0.025 * i,
                          }}
                          className="inline-block"
                          key={i}
                        >
                          {char}
                        </motion.span>
                      );
                    })}
                  </p>
                  <p
                    style={{
                      position: "absolute",
                      color: "#48C067 ",
                      fontSize: "22px",
                      fontWeight: "bold",
                      paddingTop: "25px",
                      paddingLeft: "8px",
                      letterSpacing: "2px",
                    }}
                  >
                    {radical.split("").map((char, i) => {
                      return (
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
                            duration: 0.4 ,
                            ease: "easeInOut",
                            delay: 0.025 * i,
                          }}
                          className="inline-block"
                          key={i}
                        >
                          {char}
                        </motion.span>
                      );
                    })}
                  </p>
                </div>
              </motion.div>
              <p
                className="float-right"
                style={{
                  fontSize: "16px",
                  marginTop: "20px",
                  letterSpacing: "2px",
                }}
              >
                07-09-2019
                <br />
                09-02-2020
                <br />
                25-12-2023
              </p>
            </div>
            <div className="time1">
              <motion.div
                initial="initial"
                whileHover="hovered"
                style={{
                  width: "100%",
                  height: "280px",
                  border: "3px solid white",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <motion.img
                  initial={{ opacity: 0.5 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  src="https://i.pinimg.com/564x/9f/6d/6b/9f6d6b98f8c3253172a294708494193f.jpg"
                  width={"100%"}
                  height="100%"
                />
                <div className="absolute bottom-0 left-0 w-fit h-fit block overflow-hidden whitespace-nowrap">
                  <p
                    style={{
                      color: "#48C067 ",
                      fontSize: "22px",
                      fontWeight: "bold",
                      padding: "8px",
                      letterSpacing: "2px",
                    }}
                  >
                    {violet.split("").map((char, i) => {
                      return (
                        <motion.span
                          variants={{
                            initial: {
                              y: 0,
                            },
                            hovered: {
                              y: "-200%"
                            },
                          }}
                          transition={{
                            duration: 0.6,
                            ease: "easeInOut",
                            delay: 0.025 * i,
                          }}
                          className="inline-block"
                          key={i}
                        >
                          {char}
                        </motion.span>
                      );
                    })}
                  </p>
                  <p
                    style={{
                      position: "absolute",
                      color: "#48C067 ",
                      fontSize: "22px",
                      fontWeight: "bold",
                      paddingTop: "25px",
                      paddingLeft: "8px",
                      letterSpacing: "2px",
                    }}
                  >
                    {violet.split("").map((char, i) => {
                      return (
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
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: 0.025 * i,
                          }}
                          className="inline-block"
                          key={i}
                        >
                          {char}
                        </motion.span>
                      );
                    })}
                  </p>
                </div>
              </motion.div>
              <p
                className="float-right"
                style={{
                  fontSize: "16px",
                  marginTop: "20px",
                  letterSpacing: "2px",
                }}
              >
                07-09-2019
                <br />
                09-02-2020
                <br />
                25-12-2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thirdblk;
