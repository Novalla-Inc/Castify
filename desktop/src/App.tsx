import ContentDrawer from './components/ContentDrawer/ContentDrawer';
import OpenProjectBtn from './components/Project/OpenProjectBtn';

export default function App() {
	return (
		<div className="flex flex-col">
			<OpenProjectBtn />
			<span className="text-red-400">Test</span>
			<ContentDrawer />
		</div>
	);
}
