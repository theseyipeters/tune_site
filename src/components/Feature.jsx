import React from "react";

const Feature = ({ icon, title, desc }) => {
	return (
		<div className="w-[33.3%] flex flex-col items-center">
			<img
				src={icon}
				alt={icon}
			/>
			<div className=" mt-[30px] text-center flex flex-col gap-y-[25px]">
				<h1 className="text-[30px] font-bold">{title}</h1>
				<p className="text-secondary">{desc}</p>
			</div>
		</div>
	);
};

export default Feature;
