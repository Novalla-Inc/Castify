use crate::data::project_template::ProjectTemplateDefault;
use serde_json;

fn create_template_folder() {
	// create template folder
	let _cwd = std::env::current_dir().unwrap();
	let _path = format!("{}/projects/templates", _cwd.to_string_lossy());

	if std::fs::metadata(_path.clone()).is_ok() {
		std::fs::remove_dir_all(_path.clone()).expect("could not delete!");
		std::fs::create_dir(_path.clone()).expect("could not create!");
	} else {
		std::fs::create_dir(_path.clone()).expect("could not create!");
	}
}

pub fn create_project_template() -> String {
	// create project template data from json data.
	let _project_template: ProjectTemplateDefault = ProjectTemplateDefault::ProjectFolder {
		project_name: "test".to_string(),
		stream_location: "test".to_string(),
	};

	let _scene_template = ProjectTemplateDefault::SceneFolder {
		project_folder_name: "test".to_string(),
		image_folder_name: true,
		audio_folder_name: true,
		video_folder_name: true,
	};

	let _data = vec![_project_template, _scene_template];

	// templates_folder inside of teh projects folder
	create_template_folder();

	let _cwd = std::env::current_dir().unwrap();
	let _template_file_path = format!(
		"{}/projects/templates/template.json",
		_cwd.to_string_lossy()
	);

	if std::fs::metadata(_template_file_path.clone()).is_ok() {
		// delete the file
		return _template_file_path;
	} else {
		// write a new file
		let new_config = std::fs::OpenOptions::new()
			.write(true)
			.create(true)
			.open(_template_file_path.clone())
			.expect("could not create file.");

		serde_json::to_writer_pretty(new_config, &_data).unwrap();
	}

	return _template_file_path;
}
