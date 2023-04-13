import { useState, useEffect } from 'react';

import './scene.scss';
import CLIENT from '../../client';
import SceneFooter from './SceneFooter';

type CanvasProps = {
	width?: number | null;
	height?: number | null;
};

interface NodeData extends CanvasProps {
	id: string;
	name: string;
	node_type: string;
	/** Size is the size of the object: sets the aspect ratio of the image */
	size?: { x: number; y: number } | null;
}

function Node({ ...props }: NodeData) {
	const [nodeSize, setNodeSize] = useState({ x: 0, y: 0 });

	// TODO: add custom size support.

	const checkSize = (size: { x: number; y: number }) => {
		// TODO: Check if the size is too big or small.
		if (
			size.x > 0 &&
			size.y > 0 &&
			size.x < props.width! &&
			size.y < props.width!
		) {
			setNodeSize(size);
		}
	};

	return (
		<div className="w-auto h-auto">
			{(() => {
				switch (props.node_type) {
					case 'FILE':
						return (
							<div className="text-2xl bg-blue-200 h-24 p-2 rounded-md">
								{props.name}
							</div>
						);
					case 'VIDEO':
						return <div></div>;
					default:
						return <div></div>;
				}
			})()}
		</div>
	);
}

function SceneContainer() {
	const [data, setData] = useState([]);
	const [size, setSize] = useState({ x: 0, y: 0 });

	useEffect(() => {
		let _args: any = ['793dff68-1185-444d-81c4-1ec934faa2c6', 'Test'];

		CLIENT.query(['scenegetNodeById', _args]).then((res) => {
			setData(res);
		});

		setSize({ x: 100, y: 100 });
	}, [100]);

	return (
		// TODO: Add a interface for the types of the returned data from rspc.
		// TODO: W / H calculation
		<div className="w-[40rem] h-[28rem] border border-black rounded-lg p-2 justify-center align-middle relative left-[9.5rem] scene_core shadow-md">
			<Node
				size={size}
				// @ts-ignore
				id={data.id}
				// @ts-ignore
				name={data.name}
				// @ts-ignore
				node_type={data.node_type}
			/>
		</div>
	);
}

/**
 * Depends on other styles, cloud be in some kind of stuido Mode.
 */
function Scene() {
	return (
		<div className="w-full h-full">
			<div className="p-4">
				{/* Scene Cotainer */}
				<SceneContainer />
			</div>
			<SceneFooter />
		</div>
	);
}

export default Scene;
