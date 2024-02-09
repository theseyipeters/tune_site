import React from "react";
import howItWorks from "../assets/howitworks.svg";

const HowItWorks = () => {
	return (
		<section
			id="howItWorks"
			className="h-[500px] relative flex justify-between z-50 pt-[120px] pl-[25px] lg:pl-[100px] md:pl-[50px]">
			<div className="flex flex-col gap-y-[25px] w-[460px]">
				<h1 className="font-custom text-[22px] -tracking-[1.5px] leading-[32px] w-[460px] text-[#fcfcfc]">
					With tune every beat is a step closer to your perfect soundtrack.
				</h1>
				<p className="text-[#8b8b8b]">
					Whether you're a music connoisseur or a casual listener, Tune is your
					gateway to an audio adventure.
				</p>
				<div>
					<div className="px-[20px] py-[15px] border-t border-b border-secondary font-custom text-[#fcfcfc]">
						Step 1: Create your Tune account
					</div>
					<div className="px-[20px] py-[15px] border-b border-secondary font-custom text-[#fcfcfc]">
						Step 2: Explore & Personalize{" "}
					</div>
					<div className="px-[20px] py-[15px] border-b border-secondary font-custom text-[#fcfcfc]">
						Step 3: Enjoy Anywhere, Anytime{" "}
					</div>
				</div>
			</div>
			<div className="z-50 text-right w-[380px] mr-[100px]">
				<h1 className="font-custom text-[50px] -tracking-[1.5px] leading-[32px] text-[#fcfcfc]">
					How it works{" "}
				</h1>
				<p className="mt-[50px] text-secondary font-custom w-">
					Join Tune and let the magic unfold in three simple steps.
				</p>
			</div>
			<div className="absolute bottom-0 right-0">
				<img
					src={howItWorks}
					alt="howItWorks"
				/>
			</div>
			<div className="absolute bottom-0 right-0">
				<svg
					width="1214"
					height="736"
					viewBox="0 0 1214 736"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#filter0_f_1812_1191)">
						<rect
							width="430"
							height="720"
							transform="matrix(0 1 -1 0 1220 290)"
							fill="#110B00"
						/>
					</g>
					<defs>
						<filter
							id="filter0_f_1812_1191"
							x="0"
							y="-210"
							width="1720"
							height="1430"
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
								stdDeviation="250"
								result="effect1_foregroundBlur_1812_1191"
							/>
						</filter>
					</defs>
				</svg>
			</div>
			<div className="absolute right-[500px]">
				<svg
					width="389"
					height="544"
					viewBox="0 0 389 544"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#filter0_f_1812_1190)">
						<rect
							width="391"
							height="193"
							transform="matrix(0 1 -1 0 291 98)"
							fill="#110B00"
						/>
					</g>
					<defs>
						<filter
							id="filter0_f_1812_1190"
							x="0.699997"
							y="0.699997"
							width="387.6"
							height="585.6"
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
								result="effect1_foregroundBlur_1812_1190"
							/>
						</filter>
					</defs>
				</svg>
			</div>
		</section>
	);
};

export default HowItWorks;
