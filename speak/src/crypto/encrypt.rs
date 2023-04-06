use crypto_hash::{hex_digest, Algorithm};

pub fn create_hash_value(value: &str) -> String {
	// requires a byte value
	let new_value = hex_digest(Algorithm::SHA256, value.as_bytes());

	return new_value;
}

pub fn remove_hash_value(value: &str) -> String {
	//  TODO: implement this
}
