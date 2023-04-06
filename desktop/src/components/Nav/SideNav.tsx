import { Link } from 'react-router-dom';
import LoginPopup from '../User/LoginPopup';

function SideNav() {
	return (
		<div className="h-full w-32 border border-[#669999] bg-[#669999] absolute left-0 text-left">
			<div className="p-4">
				<button className="w-auto h-auto">
					<Link to="/" className="text-2xl">
						Speak
					</Link>
				</button>
			</div>
			<div className="p-4 w-auto h-auto relative left-2">
				<button className="bg-[#5024] p-2 border-[#5024] rounded-md w-20">
					<Link to="/layout">layout</Link>
				</button>
			</div>
			<div className="p-4 w-auto h-auto relative left-2">
				<button className="bg-[#5024] p-2 border-[#5024] rounded-md w-20">
					Chat
				</button>
			</div>
			<div className="fixed bottom-2 left-4">
				<LoginPopup />
			</div>
		</div>
	);
}

export default SideNav;
