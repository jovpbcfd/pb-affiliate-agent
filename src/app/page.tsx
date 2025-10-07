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
			<div className="max-w-[400px] mx-auto text-center pt-5 pb-10 md:pb-20 md:pt-10">
				<h1 className="leading-5 text-[#ffe400] text-md md:text-xl font-bold md:leading-7 md:mt-20">Message me on 
					<br />
				 Telegram to claim:
					<br />
					<span className="text-white font-semibold text-[17px]">@henry202577</span>
				</h1>
			</div>
		</div>
	);
}
