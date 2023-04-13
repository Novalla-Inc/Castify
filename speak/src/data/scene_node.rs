use serde::{Deserialize, Serialize};
use serde_json;
use uuid::Uuid;

#[derive(Serialize, Deserialize, Debug, Clone)]
pub enum NodeType {
	VIDEO,
	FILE,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Node {
	pub id: Uuid, // referenced inside the scene.
	pub name: String,
	pub node_type: NodeType,
}

/// Get node by uuid.
pub fn get_node(id: String, project_name: String) -> serde_json::Value {
	let _cwd = std::env::current_dir().unwrap();
	let _nodes_file = format!(
		"{}/projects/{}/data/nodes.yml",
		_cwd.to_string_lossy(),
		project_name
	);

	let node_config = std::fs::File::open(_nodes_file.clone()).unwrap();

	let _data: Vec<Node> = serde_yaml::from_reader(node_config).unwrap();

	// find the node by id.
	for node in _data {
		if node.id.to_string() == id {
			println!("{:?}", node);
			return serde_json::to_value(node).unwrap();
		}
	}

	// the default return value is a new node.
	// probably should be a Result<Node, Error> instead.
	let _default_node: Node = Node {
		id: Uuid::new_v4(),
		name: "test".to_string(),
		node_type: NodeType::FILE,
	};

	return serde_json::to_value(_default_node).unwrap();
}

pub fn get_all_node_ids(project_name: String) -> Vec<Uuid> {
	let _cwd = std::env::current_dir().unwrap();
	let _nodes_file = format!(
		"{}/projects/{}/data/nodes.yml",
		_cwd.to_string_lossy(),
		project_name
	);

	let mut _result_vec: Vec<Uuid> = Vec::new();

	let node_config = std::fs::File::open(_nodes_file.clone()).unwrap();

	let _data: Vec<Node> = serde_yaml::from_reader(node_config).unwrap();

	for _data in _data {
		_result_vec.push(_data.id);
	}

	println!("{:?}", _result_vec);

	return _result_vec;
}

#[test]
fn test_get_ids() {
	let _result = get_all_node_ids("test".to_string());
	assert_eq!(_result.len(), 1);
}
