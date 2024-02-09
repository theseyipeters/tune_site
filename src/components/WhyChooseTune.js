import React from "react";
import pp from "../assets/pp.svg";
import om from "../assets/om.svg";
import ss from "../assets/ss.svg";
import Feature from "./Feature";

const WhyChooseTune = () => {
	const features = [
		{
			icon: pp,
			title: "Personalized Playlist",
			desc: `Our intelligent algorithms curate personalized playlists based on your preferences, ensuring every beat resonates with you.`,
		},
		{
			icon: om,
			title: "Offline Mode",
			desc: `With Tune's Offline Mode, download your favorite tracks and playlists, ensuring your music is always within reach.`,
		},
		{
			icon: ss,
			title: "Social Share",
			desc: `Connect with friends, create collaborative playlists, and share your favorite tunes effortlessly.`,
		},
	];
	return (
		<section className="mt-[100px] h-fit py-[150px] px-[25px] lg:px-[100px] md:px-[50px]">
			<div className="text-center w-[700px] flex flex-col gap-y-[20px] mx-auto justify-center ">
				<h1 className="text-[50px] font-custom">Why Choose Tune?</h1>
				<p className="text-secondary">
					Craft your unique musical narrative with Tune. Dive into personalized
					playlists, embrace offline mode, and amplify your joy through seamless
					social sharing.
				</p>
			</div>
			<div className="flex gap-x-[25px] mt-[80px]">
				<Feature
					icon={features[0].icon}
					title={features[0].title}
					desc={features[0].desc}
				/>
				<Feature
					icon={features[1].icon}
					title={features[1].title}
					desc={features[1].desc}
				/>
				<Feature
					icon={features[2].icon}
					title={features[2].title}
					desc={features[2].desc}
				/>
			</div>
		</section>
	);
};

export default WhyChooseTune;
