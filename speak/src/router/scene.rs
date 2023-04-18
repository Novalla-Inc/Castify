use uuid::Uuid;

use crate::data::node::{
	create_node, get_all_nodes, get_node, get_node_by_id, return_all_nodes, update_node_file, Node,
	NodeType, Position,
};

use rspc::RouterBuilder;

/// Create the router that will handle all of the scene functionality.
pub fn create_scene_router() -> RouterBuilder {
	let scene_router = RouterBuilder::new()
		.query("version", |t| {
			t(|_ctx, _input: ()| env!("CARGO_PKG_VERSION"))
		})
		.mutation("CreateNode", |t| {
			t(|_ctx, _input: Vec<String>| {
				let _cwd = std::env::current_dir().unwrap();

				let _path = format!(
					"{}/projects/{}/{}.yml",
					_cwd.to_string_lossy(),
					_input[0].to_string(),
					_input[0].to_string(),
				);

				println!("{:?}", _path);

				// ["test", "{NODE_NAME}"]

				let new_node = Node {
					id: Uuid::new_v4(),
					name: _input[1].to_string(),
					node_type: NodeType::CHAT,
					position: Position { x: 0, y: 0 },
				};

				let cur_nodes = get_all_nodes(_path.clone());

				let node_vec =
					create_node(new_node, cur_nodes, _path.clone(), _input[0].to_string());

				return node_vec;
			})
		})
		.mutation("UpdateNode", |t| {
			t(|_ctx, _input: Vec<String>| {
				// ["project_name", "NODE_ID", "NEW_NODE_NAME"]
				let _node_id = uuid::Uuid::parse_str(&_input[1].to_string());
				let mut _node = get_node(_node_id, _input[0].to_string()).unwrap();
				// change the node name
				_node.name = _input[2].to_string();

				// Create the updated node file
				let _updated_node = update_node_file(_node, _input[0].to_string());

				return _updated_node;
			})
		})
		.query("GetAllNodes", |t| {
			t(|_ctx, _input: String| {
				// "PROJECT_NAME"
				let node_data = return_all_nodes(_input);

				return node_data;
			})
		})
		.query("GetNodeById", |t| {
			t(|_ctx, _input: Vec<String>| {
				// ["NODE_ID", "PROJECT_NAME"]
				let id = uuid::Uuid::parse_str(&_input[0].to_string());
				return get_node_by_id(id, _input[1].to_string());
			})
		});

	return scene_router;
}
