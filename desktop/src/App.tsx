import ContentDrawer from './components/ContentDrawer/ContentDrawer';
import { NewProjectBtn } from './components/Project/NewProjectBtn';

export default function App() {
	return (
		<div className="flex flex-col">
			<NewProjectBtn />
			<span className="text-red-400">Test</span>
			<ContentDrawer />
		</div>
	);
}
