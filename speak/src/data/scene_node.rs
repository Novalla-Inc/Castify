use serde::{Deserialize, Serialize};
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
