import { useEffect, useState } from 'react';

import File, { FileTypes } from './File';

function ContentDrawer() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const getKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setOpen(false);
			} else if (e.key === 'Control') {
				setOpen(true);
			}
		};

		// add the event listeners
		window.addEventListener('keydown', getKeyDown);

		return () => {
			// remove the event listeners
			window.removeEventListener('keydown', getKeyDown);
		};
	}, [0]);

	return (
		<div>
			{open && (
				<div>
					<div className="w-full h-64 fixed bottom-0 bg-slate-500 overflow-scroll">
						<div>
							<span className="text-green-950 text-4xl p-4">
								Content Drawer
							</span>
						</div>
						<div className="flex flex-col align-middle justfity-center relative right-0 p-4">
							<div className="flex flex-row p-2">
								<File name="test" fileType={FileTypes.AUDIO} />
								<div className="p-4" />
								<File name="test" fileType={FileTypes.AUDIO} />
								<div className="p-4" />
								<File name="test" fileType={FileTypes.AUDIO} />
							</div>
							<div className="flex flex-row p-2">
								<File name="test" fileType={FileTypes.AUDIO} />
								<div className="p-4" />
								<File name="test" fileType={FileTypes.AUDIO} />
								<div className="p-4" />
								<File name="test" fileType={FileTypes.AUDIO} />
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default ContentDrawer;
