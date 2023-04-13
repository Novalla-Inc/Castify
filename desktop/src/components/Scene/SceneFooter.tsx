import { useEffect, useState } from 'react';

import { motion, animate } from 'framer-motion';

import './scene.scss';
import CLIENT from '../../client';

function SceneFooter() {
	const [data, setData] = useState([]);

	const handleClick = async () => {
		let _args: any = ['793dff68-1185-444d-81c4-1ec934faa2c6', 'Test'];

		await CLIENT.query(['scenegetNodeById', _args]).then((res) => {
			console.log(res);
			setData(res);
		});
	};

	// toggle fade in and out
	useEffect(() => {
		const getKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				animate('.scene-motion', { opacity: 0 }, { type: 'decay' });
			} else if (e.key === 'Control') {
				animate('.scene-motion', { opacity: 1 }, { type: 'decay' });
			}
		};

		// add the event listeners
		window.addEventListener('keydown', getKeyDown);

		return () => {
			// remove the event listeners
			window.removeEventListener('keydown', getKeyDown);
		};
	}, [10000]);

	return (
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
			className="w-auto h-auto scene-motion"
		>
			<div className="w-[54.5rem] h-[18.5rem] relative left-12 scene_footer">
				<div className="w-full h-full p-4 flex flex-row relative left-1">
					<div className=" w-[15rem] h-22 rounded-md p-2 shadow-md scene__overflow footer__content">
						<span className="text-2xl">Sources</span>
					</div>
					<div className="p-4" />
					<div className="w-[18rem] h-22 border rounded-md p-2 shadow-md footer__content">
						<span className="text-2xl">Chat</span>
					</div>
					<div className="p-4" />
					<div className="w-[15rem] h-22 border rounded-md p-2 shadow-md footer__content">
						<span className="text-2xl">Audio Interface</span>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default SceneFooter;
