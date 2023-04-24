import { Link } from 'react-router-dom';
import LoginPopup from '../User/LoginPopup';

function SideNav() {
	return (
		<div className="h-full w-38 border border-[#669999] bg-[#669999] absolute left-0 text-left">
			<div className="p-2 flex flex-row">
				{/* TODO: Replace with the users icon, get that from the specific platform. */}
				<div className='w-12 h-12 border-transparent rounded-full bg-green-50'></div>
				<div className='p-1' />
				<button className="w-auto h-auto">
					<Link to="/" className="text-2xl">
						Castify
					</Link>
				</button>
			</div>
			<div className="p-4 w-auto h-auto relative left-2">
				<button className="bg-[#5024] p-2 border-[#5024] rounded-md w-20 hover:cursor-pointer">
					<Link to="/layout">
						layout
					</Link>
				</button>
			</div>
			<div className='p-4 relative left-2'>
				<button className='bg-[#5024] p-2 border-[#5024] rounded-md w-20 hover:cursor-pointer'>
					<Link to="/plugins">
						Plugins
					</Link>
				</button>
			</div>
			<div className="p-4 w-auto h-auto relative left-2">
				<button className="bg-[#5024] p-2 border-[#5024] rounded-md w-22">
					Shortcuts
				</button>
			</div>
			<div className="p-4 w-auto h-auto relative left-2">
				<button className="bg-[#5024] p-2 border-[#5024] rounded-md w-22">
					Production
				</button>
			</div>
			<div className="fixed bottom-2 left-4">
				<LoginPopup />
			</div>
		</div>
	);
}

export default SideNav;
