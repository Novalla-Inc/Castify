use crypto_hash::{hex_digest, Algorithm};

use serde_json;

use crate::data::data::{ProjectData, SaveData};
use crate::data::template::node_template::BaseNode;

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
	let _cwd = std::env::current_dir();

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

/// return the node template data.
pub fn get_node_template_data(filename: String, project_name: String) -> serde_json::Value {
	let _cwd = std::env::current_dir();

	let _template_path = format!(
		"{}/projects/{}/data/{}",
		_cwd.unwrap().to_string_lossy(),
		project_name,
		filename
	);

	let _template_file = std::fs::File::open(_template_path).unwrap();

	// template node vector.
	let _data: Vec<BaseNode> = serde_yaml::from_reader(_template_file).unwrap();

	return serde_json::to_value(_data).unwrap();
}

/// Return project data as json
pub fn return_project_data(project_name: String) -> serde_json::Value {
	let _cwd = std::env::current_dir();
	// project .yml file
	let _project_path = format!(
		"{}/projects/{}/{}.yml",
		_cwd.unwrap().to_string_lossy(),
		project_name,
		project_name,
	);

	let _config_file = std::fs::File::open(_project_path).unwrap();

	let _data: ProjectData = serde_yaml::from_reader(_config_file).unwrap();

	return serde_json::to_value(_data).unwrap();
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
