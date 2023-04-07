import SideNav from '../../components/Nav/SideNav';
import PreviewScene from '../../components/Scene/PreviewScene';

function SceneLayout() {
	return (
		<div>
			<div className="fixed left-40">
				<PreviewScene />
			</div>
			<SideNav />
		</div>
	);
}

export default SceneLayout;
