use std::fs;

use prisma_client_rust::prisma_errors::Error;
use serde::{Serialize, Deserialize};

use serde_yaml;


#[derive(Serialize, Deserialize, Debug)]
struct SaveData {
	// save data
	name: String,
	stream_key: String,
	video_save_path: String,
	audio_save_path: String,
}

fn save_data(data: SaveData) -> Result<(), serde_yaml::Error> {
	let filename = "template.yml";
	let _path = std::fs::remove_file(filename).expect("could not delete!");

	let new_config = std::fs::OpenOptions::new()
    .write(true)
    .create(true)
    .open(filename)
    .expect("could not create file.");

	serde_yaml::to_writer(new_config, &data).unwrap();

	Ok(())
}

fn load_data() {

	//

}

fn check_save_file(filepath: String) -> bool {
	let save_file = filepath;

	let save_file_contents = fs::read_to_string(save_file).expect("Unable to read file");

	if save_file_contents != "" {
		// println!("{}", save_file_contents);
		return true;
	}

	return false;
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

		let data = save_data(data).unwrap();
		assert_eq!(data, ())
	}

	#[test]
	fn test_check_save_file() {
		assert_eq!(check_save_file("template.yml".to_string()), true);
	}
}
