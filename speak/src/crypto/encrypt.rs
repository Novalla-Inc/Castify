use crypto_hash::{hex_digest, Algorithm};

use serde_json;

pub fn create_hash_value(value: &str) -> String {
	// requires a byte value
	let new_value = hex_digest(Algorithm::SHA256, value.as_bytes());

	return new_value;
}

/// Remove the hash from the value
pub fn remove_hash_value(value: String) -> String {
	// TODO: Implement this.
	return value;
}

pub fn return_config_data(value: String) -> serde_json::Value {
	// TODO: implement this

	return serde_json::Value::String(value);
}
