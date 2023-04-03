export enum FileTypes {
	IMAGE = 'image',
	VIDEO = 'video',
	AUDIO = 'audio',
	TEXT = 'text',
	OTHER = 'other',
}

type FileProps = {
	name: string;
	fileType: FileTypes;
	path?: string;
	thumbnails?: string[];
};

export default function File({ ...props }: FileProps) {
	return (
		<div className="w-48 h-48 border-red-200 rounded-md shadow-md flex flex-col bg-red-200">
			<span className="text-black text-1xl p-2">{props.name}</span>
			<div>{/* Depends on the fileType */}</div>
		</div>
	);
}
