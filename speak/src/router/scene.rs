use crate::{
	crypto::encrypt::get_node_template_data,
	data::scene_node::{add_node, get_all_node_ids, get_node, Node, NodeType},
};
use rspc::{Router, RouterBuilder};
use uuid::Uuid;

pub fn create_scene_router() -> RouterBuilder {
	let _scene_router = <Router>::new()
		.query("version", |t| {
			t(|_ctx, _input: ()| env!("CARGO_PKG_VERSION"))
		})
		.mutation("CreateNode", |t| {
			t(|_ctx, _input: Vec<String>| {
				let _node_uuid = Uuid::new_v4();

				let _data = Node {
					id: _node_uuid,
					name: _input[0].to_string(),
					node_type: NodeType::FILE,
				};

				let node_result = add_node(_input[1].to_string(), _data);

				return node_result;
			})
		})
		.query("getNodeById", |t| {
			t(|_ctx, _input: Vec<String>| {
				// Get node by id
				let node_result = get_node(_input[0].to_string(), _input[1].to_string());

				// 	// return json data
				return node_result;
			})
		})
		.query("GetNodeIds", |t| {
			t(|_ctx, _input: String| get_all_node_ids("test".to_string()))
		})
		.query("GetNodeTemplateData", |t| {
			t(|_ctx, _input: ()| {
				// Get node by id
				let template_data =
					get_node_template_data("node_templates.json".to_string(), "Test".to_string());

				return template_data;
			})
		});

	return _scene_router;
}
