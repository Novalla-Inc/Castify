// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod data;
use rspc::Router;
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn routers() -> Router {
	// TODO: Figure out how to expect input from rspc.
	let user_router = <Router>::new()
    .query("list", |t| t(|_ctx, _input: ()| vec![] as Vec<()>));

	let core_router = <Router>::new()
    .query("version", |t| {
			t(|_ctx, _input: ()|env!("CARGO_PKG_VERSION"))
		})
    .merge("users.", user_router)
		.build();

	return core_router;
}

#[tokio::main]
async fn main() {
    tauri::Builder::default()
        .plugin(rspc::integrations::tauri::plugin(routers().into(), || ()))
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[cfg(test)]
mod tests {
	#[test]
	fn test_rspc_router() {
		super::routers();
	}
}
