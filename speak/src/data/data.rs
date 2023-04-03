use serde_yaml;
use serde::{Serialize, Deserialize, de::Error};

#[derive(Serialize, Deserialize, Debug)]
pub struct SaveData {
	// save data
	pub name: String,
	pub stream_key: String,
	pub video_save_path: String,
	pub audio_save_path: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct ProjectData {
	// project data
	pub name: String,
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

			// write data to the file
			serde_yaml::to_writer(original_config, &data).unwrap();
		}

	Ok(())
}

// Specific to config files
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

	#[test]
	fn test_save_project_data() {
		let data = ProjectData {
			name: "test".to_string(),
		};

		let projectname = "test".to_string();

		let data = save_project_data(data, projectname).unwrap();
		assert_eq!(data, ())
	}
}
