use std::path::PathBuf;
use uuid::Uuid;

use crate::data::node::{create_node, get_all_nodes, Node, NodeType, Position};

use rspc::RouterBuilder;

pub fn create_scene_router() -> RouterBuilder {
	let scene_router = RouterBuilder::new()
		.query("version", |t| {
			t(|_ctx, _input: ()| env!("CARGO_PKG_VERSION"))
		})
		.query("CreateNode", |t| {
			t(|_ctx, _input: Vec<String>| {
				let _cwd = std::env::current_dir().unwrap();

				let _path = format!(
					"{}/projects/{}/{}/.yml",
					_cwd.to_string_lossy(),
					_input[0].to_string(),
					_input[0].to_string(),
				);

				// ["test", "{NODE_NAME}"]

				let new_node = Node {
					id: Uuid::new_v4(),
					name: _input[1].to_string(),
					node_type: NodeType::AUDIO,
					position: Position { x: 0, y: 0 },
				};

				let cur_nodes = get_all_nodes(_path.clone());

				let node_vec =
					create_node(new_node, cur_nodes, _path.clone(), _input[0].to_string());

				return node_vec;
			})
		});

	return scene_router;
}
