use crate::data::{
    data::{save_config_file, save_project_data, ProjectData, SaveData},
    scene::{SceneData, SceneSettings, SceneType},
};
use rspc::Router;
use std::sync::Arc;

pub fn router() -> Arc<Router> {
    let core_router = <Router>::new()
        .query("version", |t| {
            t(|_ctx, _input: ()| env!("CARGO_PKG_VERSION"))
        })
        .mutation("saveData", |t| {
            t(|_ctx, input: Vec<String>| {
                let data_to_save: SaveData = SaveData {
                    project_name: input[0].to_string(),
                    stream_key: input[1].to_string(),
                    video_save_path: input[2].to_string(),
                    audio_save_path: input[3].to_string(),
                };

                let filepath = input[4].to_string();

                save_config_file(data_to_save, filepath).unwrap();
            })
        })
        .mutation("createProject", |t| {
            t(|_ctx, input: Vec<String>| {
                let data_to_save: ProjectData = ProjectData {
                    project_name: input[0].to_string(),
                    scene_data: SceneData {
                        scene_name: input[1].to_string(),
                        scene_type: SceneType::Live,
                        scene_settings: SceneSettings { recording: true },
                    },
                };

                let projectname = input[1].to_string();

                save_project_data(data_to_save, projectname).unwrap();
            })
        })
        .build()
        .arced();

    return core_router;
}
