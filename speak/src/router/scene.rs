use crate::data::scene_node::{get_all_node_ids, get_node, Node, NodeType};
use rspc::{Router, RouterBuilder};
use uuid::Uuid;

pub fn create_scene_router() -> RouterBuilder {
	let _scene_router = <Router>::new()
		.query("version", |t| {
			t(|_ctx, _input: ()| env!("CARGO_PKG_VERSION"))
		})
		.mutation("createNode", |t| {
			t(|_ctx, _input: Vec<String>| {
				let _node_uuid = Uuid::new_v4();

				let _data = Node {
					id: _node_uuid,
					name: _input[0].to_string(),
					node_type: NodeType::FILE,
				};

				// TODO: Add Node
				// add_node(_data, input[1].to_string())})
			})
		})
		.query("getNodeById", |t| {
			t(|_ctx, _input: Uuid| {
				let _node_uuid: Uuid = _input;

				// Get node by id
				let node_result: Node = get_node(_node_uuid);

				// return json data
				return serde_json::to_string_pretty(&node_result).unwrap();
			})
		})
		.query("GetNodeIds", |t| {
			t(|_ctx, _input: String| get_all_node_ids("test".to_string()))
		});

	return _scene_router;
}
