import SideNav from '../../components/Nav/SideNav';
import SceneView from '../../components/Scene/Scene';

import './layout.scss';

function SceneLayout() {
	return (
		<div className=''>
			<div className="fixed left-40 p-4 w-full h-full">
				<SceneView />	
			</div>
			<SideNav />
		</div>
	);
}

export default SceneLayout;
