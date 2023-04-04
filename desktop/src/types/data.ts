/**
 * @description
 * The data that is saved to the project file.
 */
export type SaveData = {
	name: string;
	stream_key: string;
	video_path: string;
	audio_path: string;
	file_path: string;
};

/**
 * @description
 * The type of scene the user is interacting with.
 */
export enum SceneType {
	Live,
	Preview,
	Template,
}

/**
 * @description
 * The settings for the scene.
 */
type SceneSettings = {
	recording: boolean;
};

/**
 * @description
 * The data that is saved to the project file.
 */
export type ProjectData = {
	project_name: string;
	scene_data: SceneData;
};

/**
 * @description
 * The data that is saved to the project file.
 */
export type SceneData = {
	scene_name: string;
	scene_type: SceneType;
	scene_settings: SceneSettings | null;
};
