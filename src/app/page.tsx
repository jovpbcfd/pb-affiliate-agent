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
			<div className="max-w-[1000px] mx-auto text-center pt-5 pb-10 md:pb-8 md:pt-10">
				<h1 className="mt-5 leading-5 md:leading-[28px] text-[#ffe400] text-md md:text-[1.6rem] font-bold md:font-extrabold md:mt-10">Message me on 
					<br />
				 Telegram to claim:
					<br />
					<span className="text-white font-semibold md:text-[20px]">@henry202577</span>
				</h1>
				<div className="mx-auto max-w-[200px] mt-2 md:max-w-[150px]">
					<Image src="/img/@henry202577.png" width={300} height={300} alt="QR CODE" />
				</div>
			</div>
			<div className="max-w-[150px] mx-auto pb-2 md:hidden">
				<Link
						href="https://panalobet787.com/af/VHgv3130/join"
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
			<div className="max-w-[1000px] mx-auto text-center mt-4 md:mt-0 md:mb-8">
					<p className="text-white md:text-xl">When messaging me, please <span className="text-[#ffe400]">provide a screenshot of your text message.</span></p>
			</div>
			<div className="max-w-[600px] mx-auto mb-10 flex flex-col items-center gap-y-6 md:flex-row md:gap-x-3 text-center mt-4 md:mt-5">
				<div>
					 <h3 className="mb-2 leading-5 md:leading-[28px] text-[#ffe400] text-md md:text-[1.4rem] font-bold md:font-extrabold">INVITE PLAYERS</h3>
					<Image src="/img/INVITE PLAYERS.jpg" width={300} height={700} alt="invite players" />
				</div>
				<div>
					<h3 className="mb-2 leading-5 md:leading-[28px] text-[#ffe400] text-md md:text-[1.4rem] font-bold md:font-extrabold">INVITE AGENTS</h3>
					<Image src="/img/INVITE AGENTS.jpg" width={300} height={700} alt="invite players" />
				</div>
			</div>
		</div>
	);
}
