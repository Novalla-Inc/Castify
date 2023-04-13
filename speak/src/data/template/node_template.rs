use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Serialize, Deserialize, Debug, Clone)]
pub enum TemplateNodeType {
	VIDEO,
	FILE,
	MESSAGE,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct BaseNode {
	id: Uuid,
	name: String,
	os_on_top: bool,
	node_type: TemplateNodeType,
}

/// Creates the data for the template file to be used in the scene.
pub fn create_template_nodes() -> Vec<BaseNode> {
	let mut _result_vec: Vec<BaseNode> = Vec::new();

	_result_vec.push(BaseNode {
		id: Uuid::new_v4(),
		name: "Video Import Node".to_string(),
		os_on_top: false,
		node_type: TemplateNodeType::VIDEO,
	});

	_result_vec.push(BaseNode {
		id: Uuid::new_v4(),
		name: "Image Node".to_string(),
		os_on_top: false,
		node_type: TemplateNodeType::FILE,
	});

	_result_vec.push(BaseNode {
		id: Uuid::new_v4(),
		name: "Chat Node".to_string(),
		os_on_top: false,
		node_type: TemplateNodeType::MESSAGE,
	});

	return _result_vec;
}
