import SideNav from './components/Nav/SideNav';
import OpenProjectBtn from './components/Project/OpenProjectBtn';

export default function App() {
	return (
		<div className="">
			<div className="fixed left-40">
				<div className="flex flex-col">
					<OpenProjectBtn />
					<span className="text-red-400">Test</span>
				</div>
			</div>
			<SideNav />
		</div>
	);
}
