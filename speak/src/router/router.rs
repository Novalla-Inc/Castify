use std::sync::Arc;
use rspc::Router;
use crate::data::{data::{save_data, SaveData}};

pub fn router() -> Arc<Router> {
    let core_router = <Router>::new()
		.query("version", |t| t(|_ctx, _input: ()| env!("CARGO_PKG_VERSION")))
        .mutation("saveData", |t| t(|_ctx, input: Vec<String>| {
						let data_to_save: SaveData = SaveData{
							name: input[0].to_string(),
							stream_key: input[1].to_string(),
							video_save_path: input[2].to_string(),
							audio_save_path: input[3].to_string(),
						};

						let filepath = input[4].to_string();

						save_data(data_to_save, filepath).unwrap();
				}))
        .build()
        .arced();

    return core_router;
}
