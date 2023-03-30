// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod data;
use data::{save_data, Data};
use rspc::Router;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn router( ) -> Router {
	let router = <Router>::new()
    .query("version", |t| {
			t(|_ctx, _input: ()|env!("CARGO_PKG_VERSION"))
		})
	.build();

	return router;
}

#[tokio::main]
async fn main() {
		save_data(Data{ id: "1".to_string(), email: "test@nil.comp".to_string(), stream_token: "test".to_string()}).expect("test");
    tauri::Builder::default()
        .plugin(rspc::integrations::tauri::plugin(router().into(), || ()))
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[cfg(test)]
mod tests {
	#[test]
	fn test_rspc_router() {
		super::router();
	}
}
