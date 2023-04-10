use serde::{Deserialize, Serialize};
use serde_json;
use uuid::Uuid;

// TODO: add node-graph implmentation

use crate::{crypto::encrypt::return_project_data, data::scene_node::Node};

use super::{
	data::{save_project_data, ProjectData},
	scene_node::NodeType,
};

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
	pub scene_core: SceneCore,
	pub scene_settings: SceneSettings,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct SceneCore {
	// Array of uuids
	pub contents: Vec<Uuid>,
}

// TODO: add_node to the contents list.
