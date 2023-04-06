// global import
import { useState } from 'react';

// components
import Full from '../Skeleton/Containers/Full';
import Button from '../Skeleton/Inputs/Button';

// images
import TwitchLogo from '../../images/twitch_logo.svg';
import YoutubeLogo from '../../images/youtube_logo.svg';

function LoginPopup() {
	const [open, SetOpen] = useState(false);

	return (
		<div>
			{open ? (
				// See: https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
				<Full className="bg-[#000000CC] fixed top-0 left-0">
					<div className="flex flex-col p-12">
						<span className="text-center border-none text-4xl text-white">
							Connect
						</span>
						<div className="p-3" />
						<div className="flex flex-row justify-center">
							{/* TODO: Add oauth to the specific platforms and welcome the user on the home page */}
							<button>
								<img src={TwitchLogo} alt="Twitch" className="w-20 h-20" />
							</button>
							<div className="p-3" />
							<button>
								<img src={YoutubeLogo} alt="Youtube" className="w-20 h-20" />
							</button>
						</div>
						<div className="p-3" />
						<span className="text-white text-1xl text-center">
							Or select another platform.
						</span>
						<div className="p-2" />
						<select
							name="new-platform"
							id="new-platform"
							className="block py-2.5 px-2.5 w-full text-sm text-white bg-stone-500 border-0 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
						>
							<option value="facebook" selected>
								Facebook
							</option>
							<option value="tiktok">Tiktok</option>
							<option value="tiktok">Kik</option>
						</select>
						<div className="p-2" />
						<Button
							text="skip"
							className="underline text-white text-1xl"
							onClick={() => {
								SetOpen(!open);
							}}
						/>
					</div>
				</Full>
			) : (
				<Button
					text="Connect"
					className=" bg-[#5024] p-2 border-[#5024] rounded-md"
					onClick={() => {
						SetOpen(!open);
					}}
				/>
			)}
		</div>
	);
}

export default LoginPopup;
