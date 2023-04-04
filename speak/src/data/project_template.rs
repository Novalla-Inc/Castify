use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
#[serde(rename_all = "lowercase")]
pub enum ProjectTemplateDefault {
	ProjectFolder {
		project_name: String,
		stream_location: String,
	},
	SceneFolder {
			project_folder_name: String,
			image_folder_name: bool,
			audio_folder_name: bool,
			video_folder_name: bool,
		}
}
