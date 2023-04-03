export type SaveData = {
	name: string;
	stream_key: string;
	video_path: string;
	audio_path: string;
	file_path: string;
};

export enum SceneType {
	Live,
	Preview,
	Template,
}

type SceneSettings = {
	recording: boolean;
};

export type ProjectData = {
	project_name: string;
	scene_data: SceneData;
};

export type SceneData = {
	scene_name: string;
	scene_type: SceneType;
	scene_settings: SceneSettings | null;
};
