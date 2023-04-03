use serde::{Deserialize, Serialize};
use serde_yaml::{self};
use bincode;

#[derive(Debug, Serialize, Deserialize)]
pub struct Data {
	pub id: i8,
	pub email: String,
	pub stream_token: String,
}

struct EncryptedData {
	id: i8,
	email: Result<Vec<u8>, bincode::Error>,
	stream_token: Result<Vec<u8>, bincode::Error>,
}


fn encypt_data(data: Data) -> EncryptedData {

	let new_data = EncryptedData { id: data.id, email: bincode::serialize(&data.email), stream_token: bincode::serialize(&data.stream_token) };

	return new_data;
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

#[cfg(test)]
mod tests {
	use super::*;

	#[test]
	fn test_save_data() {
		let data = Data {
			id: 1,
			email: "Test".to_string(),
			stream_token: "Test".to_string(),
		};

		save_data(data).unwrap();
	}
}

