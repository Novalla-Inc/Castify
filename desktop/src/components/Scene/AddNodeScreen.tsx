import { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';

import CLIENT from '../../client';

type AddNodeProps = {
	add_node_id: string;
	name: string;
};

type AddNodeScreen = {
	className?: string;
};

type TemplateProps = {
	/** Show on hover... */
	id: string;
	name: string;
	/** if absolute... */
	is_on_top?: boolean;
};

function TemplateBtn({ ...props }: TemplateProps) {
	const handleClick = () => {
		const input = ['Test', 'test'];

		CLIENT.mutation(['sceneCreateNode', input]).then((res) => {
			console.log(res);
		});
	};

	return (
		<button className="w-32 h-32 active:bg-green-200" onClick={handleClick}>
			<div className="w-32 h-32 bg-red-200">
				<span>{props.name}</span>
			</div>
		</button>
	);
}

function AddNodeScreen({ ...props }: AddNodeScreen) {
	const [data, setData] = useState([]);

	useEffect(() => {
		// get template data
		CLIENT.query(['sceneGetNodeTemplateData']).then((res) => {
			console.log(res);
			setData(res);
		});

		const getKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'h') {
				animate('.scene-add', { opacity: 0 });
			} else if (e.key === 'Meta') {
				animate('.scene-add', { opacity: 1 });
			}
		};

		// add the event listeners
		window.addEventListener('keydown', getKeyDown);

		return () => {
			// remove the event listeners
			window.removeEventListener('keydown', getKeyDown);
		};
	}, [1000]);

	return (
		// TODO: Add spacer
		<motion.div
			animate={{
				x: 0,
				y: 0,
				scale: 1,
				rotate: 0,
			}}
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			className="scene-add w-auto h-auto"
		>
			{/* See: https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4 for transparency */}
			<div className="absolute left-[10.5rem] top-4 w-[40rem] h-[28rem] z-20 bg-[#97B6A3BD] rounded-md shadow-md p-2">
				<div>
					<span className="text-2xl">Create Source</span>
					<div className="p-1" />
					<p className="text-1xl">
						Create a source within the scene.
					</p>
				</div>
				<div className="p-2" />
				<div className="w-full h-8 flex flex-row bg-green-300 p-1">
					<span>General</span>
					<div className="p-1" />
					<span className="">Input</span>
					<div className="p-1" />
					<span>Chat</span>
				</div>
				<div className="p-2" />
				<div className="grid grid-flow-col grid-col-3 gap-4">
					{data.map((item) => {
						return (
							<TemplateBtn
								// @ts-ignore
								key={item.id}
								// @ts-ignore
								id={item.id}
								// @ts-ignore
								name={item.name}
							/>
						);
					})}
				</div>
			</div>
		</motion.div>
	);
}

export { AddNodeScreen };
