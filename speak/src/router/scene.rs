use crate::data::scene_node::{Node, NodeType};
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
				// add_node(_data, input[1].to_string());
			})
		});

	return _scene_router;
}
