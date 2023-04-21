use serde::{Deserialize, Serialize};
use serde_json;
use std::fs;

#[derive(Serialize, Deserialize, Debug, Clone)]
enum FileExt {
	JPEG,
	PNG,
	TXT,
	YML = 33188,
	MP4,
	WAV,
	MOV,
	NONE,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
struct FileData {
	file_name: String,
	file_type: FileExt,
}

pub fn get_file_type(scene_dir: String) -> serde_json::Value {
	let mut _data: Vec<FileData> = vec![];

	// read all files in the project_dir.
	// return a response -> Json, with all of the file names, and file types
	for file in fs::read_dir(scene_dir).unwrap() {
		let file = file.unwrap();
		let file_path = file.path();

		if file_path.extension() == Some("yml".as_ref()) {
			let yaml_file_data: FileData = FileData {
				file_name: file_path.file_name().unwrap().to_str().unwrap().to_string(),
				file_type: FileExt::YML,
			};

			_data.push(yaml_file_data);
		} else if file_path.extension() == None {
			let dir_file_data: FileData = FileData {
				file_name: file_path.file_name().unwrap().to_str().unwrap().to_string(),
				file_type: FileExt::NONE,
			};

			_data.push(dir_file_data);
		} else if file_path.extension() == Some("png".as_ref()) {
			let png_file_data: FileData = FileData {
				file_name: file_path.file_name().unwrap().to_str().unwrap().to_string(),
				file_type: FileExt::PNG,
			};

			_data.push(png_file_data);
		} else if file_path.extension() == Some("jpeg".as_ref()) {
			let jpeg_file_data: FileData = FileData {
				file_name: file_path.file_name().unwrap().to_str().unwrap().to_string(),
				file_type: FileExt::JPEG,
			};

			_data.push(jpeg_file_data);
		} else if file_path.extension() == Some("mp4".as_ref()) {
			let mp_file_data: FileData = FileData {
				file_name: file_path.file_name().unwrap().to_str().unwrap().to_string(),
				file_type: FileExt::MP4,
			};

			_data.push(mp_file_data);
		} else if file_path.extension() == Some("wav".as_ref()) {
			let wav_file_data: FileData = FileData {
				file_name: file_path.file_name().unwrap().to_str().unwrap().to_string(),
				file_type: FileExt::WAV,
			};

			_data.push(wav_file_data);
		} else if file_path.extension() == Some("mov".as_ref()) {
			let mov_file_data: FileData = FileData {
				file_name: file_path.file_name().unwrap().to_str().unwrap().to_string(),
				file_type: FileExt::MOV,
			};

			_data.push(mov_file_data);
		} else {
			// throw erorr
			println!("error");
		}
	}

	return serde_json::to_value(_data).unwrap();
}

#[test]
fn test_get_file_type() {
	let _cwd = std::env::current_dir().unwrap();
	let _scene_dir: String = format!("{}/projects/test", _cwd.to_string_lossy());
	let _scene_dir1: String = format!("{}/projects/test", _cwd.to_string_lossy());

	// create test file
	let _test_file = format!("{}/test.json", _scene_dir.clone());
	let _file = fs::File::create(_test_file).unwrap();

	serde_json::to_writer_pretty(_file, &get_file_type(_scene_dir)).unwrap();
}
