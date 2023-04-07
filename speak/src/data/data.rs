use serde::{de::Error, Deserialize, Serialize};
use serde_yaml;

use super::scene;
use crate::crypto::encrypt::create_hash_value;
use crate::util::stream::generate_stream_key;

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct SaveData {
	// save data
	pub project_name: String,
	pub stream_key: String,
	pub video_save_path: String,
	pub audio_save_path: String,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct ProjectData {
	// project data
	pub project_name: String,
	pub scene_data: scene::SceneData,
}

/// Create the project directory and the specific .yml files for the project.
/// This creates the scene data and the config data.
pub fn save_project_data(data: ProjectData, projectname: String) -> Result<(), serde_yaml::Error> {
	// create project directory
	let project_dir = format!("projects/{}", projectname);

	// check for /projects directory
	if std::fs::metadata("projects").is_ok() {
		println!("directory already exists");
	} else {
		std::fs::create_dir("projects").expect("could not create directory");
	}

	// checks if the project to create already exists
	if std::fs::metadata(project_dir.clone()).is_ok() {
		// throw error
		return Err(serde_yaml::Error::custom("project already exists"));
	} else {
		std::fs::create_dir(project_dir.clone()).expect("could not create directory");

		// create the file path
		let project_file = format!("{}/{}.yml", project_dir, projectname);

		// create the file
		let original_config = std::fs::OpenOptions::new()
			.write(true)
			.create(true)
			.open(project_file)
			.expect("could not create file.");

		let _data_project_name = data.project_name.clone();
		let config_data: SaveData = SaveData {
			project_name: _data_project_name,
			stream_key: generate_stream_key(),
			video_save_path: "/videos".to_string(),
			audio_save_path: "/audio".to_string(),
		};

		// Create the other folders for the project
		create_project_structure(project_dir);

		// write data to the file
		serde_yaml::to_writer(original_config, &data).unwrap();

		// create user config
		save_config_file(config_data, "config.yml".to_string()).unwrap();
	}

	Ok(())
}

/// Create the other folders for the project
fn create_project_structure(project_path: String) {
	// create new directorie paths.
	let _create_video_path = format!("{}/{}", project_path, "videos");
	let _create_audio_path = format!("{}/{}", project_path, "audio");
	let _create_images_path = format!("{}/{}", project_path, "images");

	// check if the directory exists
	if std::fs::metadata(_create_video_path.clone()).is_ok() {
		// if the  directory exists, delete it
		std::fs::remove_dir_all(_create_video_path.clone()).expect("could not delete!");
		std::fs::remove_dir_all(_create_audio_path.clone()).expect("could not delete!");
		std::fs::remove_dir_all(_create_images_path.clone()).expect("could not delete!");
	} else {
		// create all directories if they do not exist
		std::fs::create_dir(_create_video_path).expect("could not create directory");
		std::fs::create_dir(_create_audio_path).expect("could not create directory");
		std::fs::create_dir(_create_images_path).expect("could not create directory");
	}
}

// Create the config file with the correct config data:
// also encrypts the important data relative to the user.
pub fn save_config_file(data: SaveData, filename: String) -> Result<(), serde_yaml::Error> {
	// check if file exists
	let _cwd = std::env::current_dir().unwrap();
	let _path = format!(
		"{}/projects/{}/{}",
		_cwd.to_string_lossy(),
		data.project_name,
		filename
	);

	println!("path: {}", _path);

	if std::fs::metadata(_path.clone()).is_ok() {
		std::fs::remove_file(_path.clone()).expect("could not delete!");

		let new_config = std::fs::OpenOptions::new()
			.write(true)
			.create(true)
			.open(_path)
			.expect("could not create file.");

		serde_yaml::to_writer(new_config, &data).unwrap();
	// if it is not there, create it
	} else {
		let original_config = std::fs::OpenOptions::new()
			.write(true)
			.create(true)
			.open(_path)
			.expect("could not create file.");

		let new_data: SaveData = SaveData {
			project_name: data.project_name,
			stream_key: create_hash_value(&data.stream_key),
			video_save_path: create_hash_value(&data.video_save_path),
			audio_save_path: create_hash_value(&data.audio_save_path),
		};

		serde_yaml::to_writer(original_config, &new_data).unwrap();
	}

	Ok(())
}

pub fn load_data() {}

#[cfg(test)]
mod tests {
	use super::*;

	#[test]
	fn test_save_project_data() {
		let data = ProjectData {
			project_name: "test".to_string(),
			scene_data: scene::SceneData {
				scene_name: "test".to_string(),
				scene_type: scene::SceneType::Live,
				scene_settings: scene::SceneSettings { recording: true },
			},
		};

		let projectname = "test".to_string();

		let data = save_project_data(data, projectname).unwrap();
		assert_eq!(data, ())
	}
}
