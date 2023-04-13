import SideNav from '../../components/Nav/SideNav';
import Scene from '../../components/Scene/Scene';

function SceneLayout() {
	return (
		<div>
			<div className="fixed left-[5rem] w-full h-full">
				<Scene />
			</div>
			<SideNav />
		</div>
	);
}

export default SceneLayout;
