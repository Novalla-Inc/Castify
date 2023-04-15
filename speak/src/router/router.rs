use crate::data::{
	data::{save_config_file, save_project_data, ProjectData, SaveData},
	node::Node,
	scene::{SceneData, SceneSettings, SceneType},
};

use crate::router::scene::create_scene_router;

use crate::crypto::encrypt::return_config_data;
use crate::data::thumbnail::get_file_type;
use crate::util::stream::generate_stream_key;

use rspc::{Config, Router};
use std::path::PathBuf;
use std::sync::Arc;

pub fn router() -> Arc<Router> {
	let core_router =
		<Router>::new()
			.config(Config::new().export_ts_bindings(
				PathBuf::from(env!("CARGO_MANIFEST_DIR")).join("./bindings.ts"),
			))
			.query("version", |t| {
				t(|_ctx, _input: ()| env!("CARGO_PKG_VERSION"))
			})
			.mutation("saveData", |t| {
				t(|_ctx, input: Vec<String>| {
					let data_to_save: SaveData = SaveData {
						project_name: input[0].to_string(),
						stream_key: input[1].to_string(),
						video_save_path: "/videos".to_string(),
						audio_save_path: "/audio".to_string(),
					};

					let filename = format!("{}.yml", input[0].to_string());

					save_config_file(data_to_save, filename).unwrap();
				})
			})
			.mutation("createProject", |t| {
				t(|_ctx, input: Vec<String>| {
					let _node_vec: Vec<Node> = Vec::new();

					let data_to_save: ProjectData = ProjectData {
						project_name: input[0].to_string(),
						scene_data: SceneData {
							scene_name: input[1].to_string(),
							scene_type: SceneType::Live,
							scene_nodes: _node_vec,
							scene_settings: SceneSettings { recording: false },
						},
					};

					let projectname = input[1].to_string();

					save_project_data(data_to_save, projectname).unwrap();
				})
			})
			.query("getContentDrawerData", |t| {
				t(|_ctx, input: String| {
					let _cwd = std::env::current_dir();
					let _path = format!("{}/projects/{}", _cwd.unwrap().display(), input);
					let content_drawer = get_file_type(_path);

					return content_drawer;
				})
			})
			.query("getStreamKey", |t| {
				t(|_ctx, _input: ()| {
					let _stream_key = generate_stream_key();

					return _stream_key;
				})
			})
			.query("getConfigData", |t| {
				t(|_ctx, input: Vec<String>| {
					let _result = return_config_data(input[0].to_string(), input[1].to_string());

					return _result;
				})
			})
			.merge("scene", create_scene_router())
			.build()
			.arced();

	return core_router;
}
