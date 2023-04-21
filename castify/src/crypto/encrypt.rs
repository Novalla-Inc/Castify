use crypto_hash::{hex_digest, Algorithm};

use serde_json;

use crate::data::data::SaveData;

/// Convert the value into a hash value -> sha256
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

/// Return the config data in a json format.
pub fn return_config_data(config_name: String, project_name: String) -> String {
	// TODO: implement this
	let _cwd = std::env::current_dir();
	let _cwd1 = std::env::current_dir();
	let _config_path = format!(
		"{}/projects/{}/{}",
		_cwd.unwrap().to_string_lossy(),
		project_name,
		config_name
	);

	let _config_file = std::fs::File::open(_config_path).unwrap();

	let _data: SaveData = serde_yaml::from_reader(_config_file).unwrap();

	let _return_data = serde_json::to_string_pretty(&_data).unwrap();

	return _return_data;
}

#[test]
fn test_return_config_data() {
	use crate::data::data::SaveData;

	let _cwd = std::env::current_dir();
	let _cwd1 = std::env::current_dir();
	let _config_data = return_config_data("config.yml".to_string(), "test".to_string());

	let _test_path = format!(
		"{}/projects/{}/{}",
		_cwd.unwrap().to_string_lossy(),
		"test",
		"test_config.json"
	);

	let _config_path = format!(
		"{}/projects/{}/{}",
		_cwd1.unwrap().to_string_lossy(),
		"test",
		"config.yml"
	);

	let _file = std::fs::OpenOptions::new()
		.write(true)
		.create(true)
		.open(_test_path)
		.expect("could not create file.");

	let _config_file = std::fs::File::open(_config_path).unwrap();

	let value: SaveData = serde_yaml::from_reader(_config_file).unwrap();

	_ = serde_json::to_writer_pretty(_file, &value);

	assert_eq!(
		return_config_data("config.yml".to_string(), "test".to_string()).len() > 1,
		true
	);
}
