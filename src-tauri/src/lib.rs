use tauri::Manager;

mod commands;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .setup(|app| {
      if cfg!(debug_assertions) {
        app.handle().plugin(
          tauri_plugin_log::Builder::default()
            .level(log::LevelFilter::Info)
            .build(),
        )?;
      }
      let title = commands::get_default_app_title(app.handle().clone());
      let window = app.get_webview_window("main").unwrap();
      window.set_title(&title)?;
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![commands::get_default_app_title])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
