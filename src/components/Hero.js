import { React, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import phoneMockup from "../assets/phoneMockup.svg";
import spotify from "../assets/spotify.svg";
import muzica from "../assets/muzica.svg";
import hexlab from "../assets/hexlab.svg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
	const textVariations = [
		"with people.",
		"with artists.",
		"with fans.",
		"with the world.",
	];
	const [roles] = useTypewriter({
		words: textVariations,
		loop: {},
		typeSpeed: 100,
		deleteSpeed: 30,
		delaySpeed: 2000,
	});

	return (
		<div className="pb-[50px] px-[25px] lg:px-[100px] md:px-[50px]">
			<div className="flex items-start justify-between mt-[70px] pr-[140px]">
				<div className="flex flex-col gap-y-[25px]">
					<motion.h1
						initial={{ opacity: 0, scale: 1, x: -120 }}
						animate={{ opacity: 1, scale: 1, x: 0 }}
						transition={{ duration: 1 }}
						className="heroTitle font-custom font-normal text-[70px] text-left w-full">
						Enjoy the music <br />
						and connect <br />
						<div className="h-[90px]">
							<span>{roles}</span>
						</div>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.5 }}
						className="text-[#8b8b8b] font-extralight w-[500px]">
						Making music accessible for all. Join the largest music events ever
						made by humanity. Download the app and we do the rest.
					</motion.p>
					<div className="flex gap-x-[10px]">
						<motion.button
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.7 }}
							className="bg-[#D48900] rounded-full px-[40px] py-[12px] text-[#fcfcfc]">
							Get started
						</motion.button>
						<motion.button
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.9 }}
							className="text-[#fcfcfc] border border-[#fcfcfc] rounded-full px-[40px] py-[12px]">
							Listen now
						</motion.button>
					</div>
					<div className="mt-[50px] flex flex-col gap-y-[20px] text-[#fcfcfc]">
						<h4>Collaboration Partners</h4>
						<div className="flex gap-x-[15px]">
							<img
								src={spotify}
								alt="spotify"
							/>
							<img
								src={muzica}
								alt="muzica"
							/>
							<img
								src={hexlab}
								alt="hexlab"
							/>
						</div>
					</div>
				</div>
				<motion.div className="bounce-animation">
					<img
						src={phoneMockup}
						alt="phoneMockup"
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
