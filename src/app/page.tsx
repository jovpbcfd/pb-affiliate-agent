import Image from "next/image";
import Link from "next/link";

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
			<div className="max-w-[150px] mx-auto pb-10 md:hidden">
				<Link
						href="https://pb888.pro/RjkESd"
						className="bg-[linear-gradient(135deg,#8EE4FF_0%,#3495FF_100%)]
        w-full
         py-[7px] rounded-full shadow-md text-center lg:px-3
        transition-transform transform uppercase hover:scale-105 duration-300
        md:w-[150px]
        flex items-center justify-center font-semibold"
					>
						Register
					</Link>
			</div>
		</div>
	);
}
