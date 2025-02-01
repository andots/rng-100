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
      // Create an initial webview window with the given options
      let title = commands::get_default_app_title(app.handle().clone());
      let width = 220.0;
      let height = 220.0;
      let _webview_window =
        tauri::WebviewWindowBuilder::new(app, "main", tauri::WebviewUrl::App("index.html".into()))
          .resizable(true)
          .fullscreen(false)
          .title(title)
          .inner_size(width, height)
          .min_inner_size(width, height)
          .center()
          .build()?;
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![commands::get_default_app_title])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
