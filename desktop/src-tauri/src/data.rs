use serde::{Deserialize, Serialize};
use serde_yaml::{self};

#[derive(Debug, Serialize, Deserialize)]
pub struct Data {
	pub id: String,
	pub email: String,
	pub stream_token: String,
}

pub fn save_data(data: Data) -> Result<(), serde_yaml::Error> {
	// Global filename
	let filename = "local_config.yml";
	// Old File Config
	let _path = std::fs::remove_file(filename).expect("could not delete!");

	let new_config_file = std::fs::OpenOptions::new()
    .write(true)
    .create(true)
    .open(filename)
    .expect("couldn't create file.");

	serde_yaml::to_writer(new_config_file, &data).unwrap();

	Ok(())
}
