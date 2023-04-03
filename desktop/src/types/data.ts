export type SaveData = {
	name: string;
	stream_key: string;
	video_path: string;
	audio_path: string;
	file_path: string;
};

export type SceneData = {
	sceneName: string;
	scenePath: string;
	node_locations: {
		x: number;
		y: number;
	};
};
