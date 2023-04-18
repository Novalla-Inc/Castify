use serde::{Deserialize, Serialize};
use uuid::Uuid;

use super::data::ProjectData;
use crate::data::scene::{SceneData, SceneSettings, SceneType};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Position {
	pub x: i32,
	pub y: i32,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub enum NodeType {
	AUDIO,
	VIDEO,
	FILE,
	CHAT,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Node {
	pub id: Uuid,
	pub name: String,
	pub node_type: NodeType,
	pub position: Position,
}

pub fn create_node(
	new_node: Node,
	mut current_nodes: Vec<Node>,
	project_path: String,
	project_name: String,
) -> serde_json::Value {
	let node_data = Node {
		id: Uuid::new_v4(),
		name: new_node.name,
		node_type: new_node.node_type,
		position: new_node.position,
	};

	current_nodes.push(node_data);

	if std::fs::metadata(project_path.clone()).is_ok() {
		std::fs::remove_file(project_path.clone()).unwrap();

		let new_config = std::fs::OpenOptions::new()
			.write(true)
			.create(true)
			.open(project_path)
			.expect("could not create file.");

		let new_data: ProjectData = ProjectData {
			project_name: project_name.clone(),
			scene_data: SceneData {
				scene_name: project_name.clone(),
				scene_type: SceneType::Live,
				scene_nodes: current_nodes.clone(),
				scene_settings: SceneSettings { recording: false },
			},
		};

		serde_yaml::to_writer(new_config, &new_data).unwrap();
	}

	return serde_json::to_value(current_nodes.clone()).unwrap();
}

/// Get all the nodes within the scene config file.
pub fn get_all_nodes(project_path: String) -> Vec<Node> {
	let mut _node_vec: Vec<Node> = Vec::new();

	let file = std::fs::File::open(project_path).unwrap();

	let scene_data: ProjectData = serde_yaml::from_reader(file).unwrap();

	println!("{:?}", scene_data.clone());

	for node in scene_data.scene_data.scene_nodes {
		_node_vec.push(node);
	}

	return _node_vec;
}

/// return all the nodes in a json format --> Global Format
pub fn return_all_nodes(project_name: String) -> serde_json::Value {
	let _cwd = std::env::current_dir().unwrap();
	let project_path = format!(
		"{}/projects/{}/{}.yml",
		_cwd.to_string_lossy(),
		project_name.clone(),
		project_name.clone()
	);

	return serde_json::to_value(get_all_nodes(project_path)).unwrap();
}

/// return all node ids in a json format --> Global Format
pub fn return_all_node_id(project_name: String) -> serde_json::Value {
	let _cwd = std::env::current_dir().unwrap();
	let project_path = format!(
		"{}/projects/{}/{}.yml",
		_cwd.to_string_lossy(),
		project_name.clone(),
		project_name.clone()
	);

	let mut ids_return: Vec<Uuid> = Vec::new();

	// Nodes inside the project file currently.
	let data = get_all_nodes(project_path);

	// Get each of the nodes ids.
	for node in data {
		ids_return.push(node.id);
	}

	return serde_json::to_value(ids_return).unwrap();
}

/// Allows for Uuid input and returns the node that is corrisponding to the id. --> Global Format
pub fn get_node_by_id(id: Result<Uuid, uuid::Error>, project_name: String) -> serde_json::Value {
	let _cwd = std::env::current_dir().unwrap();
	let project_path = format!(
		"{}/projects/{}/{}.yml",
		_cwd.to_string_lossy(),
		project_name,
		project_name
	);
	let nodes = get_all_nodes(project_path);

	// Check the id of every-node
	for node in nodes {
		if node.id == id.clone().unwrap() {
			return serde_json::to_value(node).unwrap();
		}
	}

	return serde_json::to_value("").unwrap();
}

/// Get node by id for core Rust Usage
pub fn get_node(id: Result<Uuid, uuid::Error>, project_name: String) -> Result<Node, ()> {
	let _cwd = std::env::current_dir().unwrap();
	let project_path = format!(
		"{}/projects/{}/{}.yml",
		_cwd.to_string_lossy(),
		project_name,
		project_name
	);
	let nodes = get_all_nodes(project_path);

	// Check the id of every-node
	for node in nodes {
		if node.id == id.clone().unwrap() {
			return Ok(node);
		}
	}

	panic!("Wrong")
}

/// Update method for adding new nodes to the data file.
pub fn update_node_file(new_node: Node, project_name: String) -> serde_json::Value {
	let _cwd = std::env::current_dir().unwrap();
	let project_path = format!(
		"{}/projects/{}/{}.yml",
		_cwd.to_string_lossy(),
		project_name,
		project_name
	);

	let mut _current_nodes = get_all_nodes(project_path.clone());
	_current_nodes.push(new_node);

	// delete the old project file
	_ = std::fs::remove_file(project_path.clone());

	// Create a new project file.
	let new_config = std::fs::OpenOptions::new()
		.write(true)
		.create(true)
		.open(project_path.clone())
		.expect("could not create file.");

	// Write the new project data.
	serde_yaml::to_writer(new_config, &_current_nodes).unwrap();

	return serde_json::to_value(&_current_nodes).unwrap();
}

#[test]
fn test_get_all_nodes() {
	let _cwd = std::env::current_dir().unwrap();
	let project_name = "test";
	let path = format!(
		"{}/projects/{}/{}.yml",
		_cwd.to_string_lossy(),
		project_name,
		project_name
	);

	let project_data = get_all_nodes(path);

	assert!(project_data.len() > 1);
}
