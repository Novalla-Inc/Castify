import { useEffect } from 'react';
import SideNav from '../../components/Nav/SideNav';
import ContentManager from '../../components/Scene/ContentManager/ContentManager';
import SceneView from '../../components/Scene/Scene';

import './layout.scss';
import { addItem, clearStorage, getItem } from '../../ts/storage';
import CLIENT from '../../client';

function SceneLayout() {
	// On Mount Get all node default data.
	// TODO: Update the storage to gave added node data. `OnCreateNode`;
	useEffect(() => {
		CLIENT.query(['sceneGetAllNodes', 'Test']).then((res) => {
			addItem("Nodes", res);
		});

		return () => {
			clearStorage();
		};
	});

	return (
		<div className=''>
			<div className="fixed left-40 p-4 w-full h-full">
				<SceneView />	
			</div>
			<ContentManager projectName='Test' />
			<SideNav />
		</div>
	);
}

export default SceneLayout;
