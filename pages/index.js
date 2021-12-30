import Head from "next/head";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const animation = useAnimation();
  const animationText = useAnimation();
  const animationText2 = useAnimation();
  const animationHeader = useAnimation();

  useEffect(async () => {
    await animation.start({ y: 0, opacity: 1 });
    await animationText.start({ opacity: 1, x: 0 });
    await animationHeader.start({ opacity: 1 });

    animation.start({ y: 100, opacity: 1 });
    animationText.start({ y: 100 });
      //  await animation.start({ height: '550px' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <motion.div
        className="flex absolute w-full h-28 shadow-md"
        transition={{ duration: 0.2 }}
        initial={{ opacity: 0 }}
        animate={animationHeader}
      >
        
        <motion.div className="w-1/5 h-full bg-black flex items-center justify-center">
          <p className="font-Poppins text-3xl text-white  font-semibold">
            Vans.
          </p>
        </motion.div>
        <motion.div className="w-3/5 h-full font-semibold text-lg bg-white flex items-center justify-center space-x-14">
          <p>Design</p>
          <p>Strategy</p>
          <p>Cases</p>
          <p>about</p>
          <p>Contact</p>
        </motion.div>
        <motion.div className="w-1/5 h-full bg-white flex items-center justify-center">
          <p className="font-Poppins text-xl  border-b-2  border-black pb-2  font-semibold">
            Let's work together
          </p>
        </motion.div>
      </motion.div>

      <div className=" w-full flex flex-wrap relative">
        <motion.img
          className="w-full sm:w-1/4 h-72"
          transition={{ duration: 0.2 }}
          initial={{ opacity: 0, y: -100 }}
          animate={animation}
          src="vans/1.jpg"
        />
        <motion.img
          className="w-full sm:w-1/4 h-72"
          transition={{ duration: 0.4 }}
          initial={{ opacity: 0, y: -100 }}
          animate={animation}
          src="vans/2.jpg"
        />
        <motion.img
          className="w-full sm:w-1/4 h-72"
          transition={{ duration: 0.6 }}
          initial={{ opacity: 0, y: -100 }}
          animate={animation}
          src="vans/3.jpg"
        />
        <motion.img
          className="w-full sm:w-1/4 h-72"
          transition={{ duration: 0.8 }}
          initial={{ opacity: 0, y: -100 }}
          animate={animation}
          src="vans/4.jpg"
        />
      </div>
      <motion.h1
        className="font-bold text-8xl font-Poppins"
        transition={{ duration: 0.6 }}
        initial={{ opacity: 0, x: -100 }}
        animate={animationText}
      >
        Vans are conquering the world.
      </motion.h1>
      <motion.h1
        className="font-semibold text-7xl font-Poppins text-right"
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 3.5 }}
        animate={{ opacity: 1, x: 0, y: 10 }}
      >
        Get one now!
      </motion.h1>
    </div>
  );
}
