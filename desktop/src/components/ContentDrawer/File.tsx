import { useState } from 'react';
import './file.scss';
// icons
import closed_folder from '../../images/icons/cDrawer/closed_folder.svg';
import open_folder from '../../images/icons/cDrawer/closed_folder.svg';
import file from '../../images/icons/cDrawer/file.svg';

export enum FileTypes {
	IMAGE = 'image',
	VIDEO = 'video',
	AUDIO = 'audio',
	TEXT = 'text',
	CONFIG = 'config',
	FOLDER = 'dir',
}

type FileProps = {
	name: string;
	fileType: FileTypes;
	path?: string;
	thumbnails?: string[];
};

export default function File({ ...props }: FileProps) {
	const [folderOpen, setFolderOpen] = useState(false);

	return (
		<div className="w-auto h-auto rounded-md text-center flex flex-col">
			<div>
				{/* Depends on the fileType */}
				{(() => {
					switch (props.fileType) {
						case FileTypes.IMAGE:
							// src will hopefully be the thumbnail for the png / jpg iteself.
							return <img className="" alt="image" />;
						case FileTypes.VIDEO:
							// src will hopefully be the thumbnail for the video itself.
							return <img className="" alt="video" />;
						case FileTypes.AUDIO:
							return <img className="" alt="aduio" />;
						case FileTypes.TEXT:
							return <img className="" alt="text" />;
						case FileTypes.CONFIG:
							return <img className="p-2" src={file} alt="config" />;
						case FileTypes.FOLDER:
							return (
								<button
									className="w-auto h-auto"
									onClick={() => setFolderOpen(!folderOpen)}
								>
									{folderOpen ? (
										<img src={open_folder} alt="folder" className="p-2" />
									) : (
										<img src={closed_folder} alt="folder" className="p-2" />
									)}
								</button>
							);
					}
				})()}
			</div>
			<span className="file-text p-1">{props.name}</span>
		</div>
	);
}
