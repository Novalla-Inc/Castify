use super::scene;
use crate::crypto::encrypt::create_hash_value;
use crate::util::stream::generate_stream_key;
use serde::{de::Error, Deserialize, Serialize};
use serde_yaml;

#[derive(Serialize, Deserialize, Debug)]
pub struct SaveData {
	// save data
	pub project_name: String,
	pub stream_key: String,
	pub video_save_path: String,
	pub audio_save_path: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct ProjectData {
	// project data
	pub project_name: String,
	pub scene_data: scene::SceneData,
}

pub fn save_project_data(data: ProjectData, projectname: String) -> Result<(), serde_yaml::Error> {
	// create project directory
	let project_dir = format!("projects/{}", projectname);

	println!("project dir: {}", project_dir);

	// check for /projexts directory
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

		let config_data: SaveData = {
			SaveData {
				project_name: "test".to_string(),
				stream_key: generate_stream_key(),
				video_save_path: "/test".to_string(),
				audio_save_path: "/test".to_string(),
			}
		};

		save_config_file(config_data, "config.yml".to_string()).unwrap();

		// write data to the file
		serde_yaml::to_writer(original_config, &data).unwrap();
	}

	Ok(())
}

// Specific to config files
pub fn save_config_file(data: SaveData, filename: String) -> Result<(), serde_yaml::Error> {
	// check if file exists
	let _cwd = std::env::current_dir().unwrap();
	let _path = format!(
		"{}/projects/{}/{}",
		_cwd.to_string_lossy(),
		data.project_name,
		filename
	);

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
			.open(_path.clone())
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
