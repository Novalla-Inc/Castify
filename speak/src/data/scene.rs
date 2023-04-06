use serde::{Deserialize, Serialize};

// TODO: add node-graph implmentation

#[derive(Serialize, Deserialize, Debug, Clone)]
pub enum SceneType {
	Live,
	Preview,
	Template,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct SceneSettings {
	// scene settings
	pub recording: bool,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct SceneData {
	pub scene_name: String,
	pub scene_type: SceneType,
	pub scene_settings: SceneSettings,
}
