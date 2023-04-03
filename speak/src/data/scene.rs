use serde::{Serialize, Deserialize};

// TODO: add node-graph implmentation

#[derive(Serialize, Deserialize, Debug)]
pub enum SceneType {
	Live,
	Preview,
	Template,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct SceneSettings {
	// scene settings
	pub recording: bool,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct SceneData {
	pub scene_name: String,
	pub scene_type: SceneType,
	pub scene_settings: SceneSettings,
}
