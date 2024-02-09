import React from "react";
import halfPhone from "../assets/halfPhone.svg";

const Intro = () => {
	return (
		<section className="z-10 relative mt-[100px] px-[25px] lg:px-[100px] md:px-[50px]">
			<div className="">
				<h1 className="font-custom text-[50px] -tracking-[1.5px] leading-[63px] w-[900px]  text-[#fcfcfc]">
					Dive into a rich tapestry of genres and artists, curated to cater to
					your unique taste.
				</h1>
				<button className="mt-5 text-[#fcfcfc] border border-[#fcfcfc] rounded-full px-[40px] py-[12px]">
					Learn more
				</button>
			</div>
			<div className="mt-[20px] pointer-events-none flex justify-center">
				<img
					src={halfPhone}
					alt="halfPhone"
					className="w-2/5 pointer-events-none"
				/>
			</div>
			<div className="absolute z-10 bottom-[-100px] w-full">
				<svg
					width="1440"
					height="385"
					viewBox="0 0 1440 385"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#filter0_f_1812_1163)">
						<rect
							width="1440"
							height="287"
							transform="translate(0 98)"
							fill="#110B00"
						/>
					</g>
					<defs>
						<filter
							id="filter0_f_1812_1163"
							x="-97.3"
							y="0.699997"
							width="1634.6"
							height="481.6"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB">
							<feFlood
								flood-opacity="0"
								result="BackgroundImageFix"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="BackgroundImageFix"
								result="shape"
							/>
							<feGaussianBlur
								stdDeviation="48.65"
								result="effect1_foregroundBlur_1812_1163"
							/>
						</filter>
					</defs>
				</svg>
			</div>
		</section>
	);
};

export default Intro;
