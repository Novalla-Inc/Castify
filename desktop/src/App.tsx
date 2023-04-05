import ContentDrawer from './components/ContentDrawer/ContentDrawer';
import OpenProjectBtn from './components/Project/OpenProjectBtn';
import LoginPopup from './components/User/LoginPopup';

export default function App() {
	return (
		<div>
			<LoginPopup />
			<div className="flex flex-col">
				<OpenProjectBtn />
				<span className="text-red-400">Test</span>
				<ContentDrawer />
			</div>
		</div>
	);
}
