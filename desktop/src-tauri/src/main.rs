// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use speak::router::router::router;

#[tauri::command]
fn create_window(app: tauri::AppHandle) {
    let window = tauri::WindowBuilder::new(&app, "label", tauri::WindowUrl::External("https://tauri.app/".parse().unwrap()))
        .build()
        .unwrap();
}

#[tokio::main]
async fn main() {
    tauri::Builder::default()
        .plugin(rspc::integrations::tauri::plugin(router(), || ()))
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
