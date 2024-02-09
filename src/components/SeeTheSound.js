import React from "react";
import seeTheSound from "../assets/seethesound.svg";
import meetTheArtists from "../assets/meettheartists.svg";

const SeeTheSound = () => {
	return (
		<section className="px-[25px] py-[50px] lg:px-[100px] md:px-[50px]s">
			<div className="flex gap-x-[40px] items-center">
				<img
					src={seeTheSound}
					alt="seeTheSound"
				/>
				<div>
					<h1 className="font-custom text-[25px]">See the Sound</h1>
					<p className="mt-5 text-secondary">
						Experience music in a whole new dimension with Tune's interactive
						visualizer. Watch as your favorite tunes come to life, dancing to
						the rhythm in vibrant patterns and colors. Immerse yourself in a
						multisensory journey that transcends traditional listening.
					</p>
					<button className="mt-5 text-[#fcfcfc] border border-[#fcfcfc] rounded-full px-[40px] py-[12px]">
						Visualize now
					</button>
				</div>
			</div>
			<div className="mt-[120px] flex gap-x-[40px] items-center">
				<div>
					<h1 className="font-custom text-[25px]">Beyond the Melody</h1>
					<p className="mt-5 text-secondary">
						Discover the artists behind the beats. Tune showcases the stories,
						inspirations, and journeys of your favorite musicians. From
						chart-toppers to indie gems, delve into the world behind the melody
						and connect with the creators who shape your musical universe.
					</p>
					<button className="mt-5 text-[#fcfcfc] border border-[#fcfcfc] rounded-full px-[40px] py-[12px]">
						Meet the artists
					</button>
				</div>
				<img
					src={meetTheArtists}
					alt="meetTheArtist"
				/>
			</div>
		</section>
	);
};

export default SeeTheSound;
