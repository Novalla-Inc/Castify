import { useEffect, useState } from 'react';

import File, { FileTypes } from './File';

import CLIENT from '../../client';

function ContentDrawer() {
	const [open, setOpen] = useState(false);
	const [data, setData] = useState([]);

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
	}, [10000]);

	// get data from the project folder.
	useEffect(() => {
		CLIENT.query(['getContentDrawerData', 'Test']).then((res) => {
			console.log(res);
			setData(res);
		});
	}, [10000]);

	return (
		<div>
			{open && (
				<div>
					<div className="w-full h-64 fixed bottom-0 bg-black overflow-scroll">
						<div>
							<span className="text-white text-4xl p-6">Content Drawer</span>
						</div>
						<div className="flex flex-col align-middle justfity-center relative right-0 p-4">
							<div className="flex flex-row p-2">
								{data.map((file, key) => {
									// @ts-ignore
									switch (file.file_type) {
										case 'NONE':
											return (
												<div key={key}>
													<File
														fileType={FileTypes.FOLDER}
														// @ts-ignore
														name={file.file_name}
													/>
												</div>
											);
										case 'YML':
											return (
												<div key={key}>
													<File
														fileType={FileTypes.CONFIG}
														// @ts-ignore
														name={file.file_name}
													/>
												</div>
											);
									}
								})}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default ContentDrawer;
