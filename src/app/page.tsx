import Image from "next/image";

export default function Home() {
	return (
		<div>
			<div>
				<Image
					src="/img/PB_BANNER.jpg"
					priority
					width={1444}
					height={444}
					alt="banner"
					className="w-full h-auto"
				/>
			</div>
			<div className="max-w-[1000px] mx-auto text-center pt-5 pb-10 md:pb-20 md:pt-10">
				<div className="mt-4 md:mt-10">
					<p className="text-white md:text-xl">When messaging me, please <span className="text-[#ffe400]">provide a screenshot of your text message.</span></p>
				</div>
				<h1 className="mt-5 leading-5 md:leading-[28px] text-[#ffe400] text-md md:text-[1.6rem] font-bold md:font-extrabold md:mt-10">Message me on 
					<br />
				 Telegram to claim:
					<br />
					<span className="text-white font-semibold md:text-[20px]">@henry202577</span>
				</h1>
			</div>
		</div>
	);
}
