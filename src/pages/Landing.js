import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import HowItWorks from "../components/HowItWorks";
import WhyChooseTune from "../components/WhyChooseTune";
import SeeTheSound from "../components/SeeTheSound";

const Landing = () => {
	return (
		<div className="overflow-hidden">
			<div className="">
				<Navbar />
			</div>
			<Hero />
			<Intro />
			<HowItWorks />
			<WhyChooseTune />
			<SeeTheSound />
		</div>
	);
};

export default Landing;
