use serde_yaml;
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct SaveData {
	// save data
	pub name: String,
	pub stream_key: String,
	pub video_save_path: String,
	pub audio_save_path: String,
}

pub fn save_data(data: SaveData, filename: String) -> Result<(), serde_yaml::Error> {
	// check if file exists
	if std::fs::metadata(filename.clone()).is_ok() {
		let _path = std::fs::remove_file(filename.clone()).expect("could not delete!");

		let new_config = std::fs::OpenOptions::new()
			.write(true)
			.create(true)
			.open(filename)
			.expect("could not create file.");

		serde_yaml::to_writer(new_config, &data).unwrap();
		// if it is not there, create it
	} else {
		let original_config = std::fs::OpenOptions::new()
			.write(true)
			.create(true)
			.open(filename)
			.expect("could not create file.");

		serde_yaml::to_writer(original_config, &data).unwrap();
	}

	Ok(())
}

pub fn load_data() {

}

#[cfg(test)]
mod tests {
	use super::*;

	#[test]
	fn test_save_data() {
		let data = SaveData {
			name: "test".to_string(),
			stream_key: "test".to_string(),
			video_save_path: "test".to_string(),
			audio_save_path: "test".to_string(),
		};

		let filepath = "test.yml".to_string();

		let data = save_data(data, filepath).unwrap();
		assert_eq!(data, ())
	}
}
