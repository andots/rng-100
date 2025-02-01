#[tauri::command]
pub fn get_default_app_title(app_handle: tauri::AppHandle) -> String {
  let title = format!(
    "{} - v{}",
    app_handle.package_info().name,
    app_handle.package_info().version
  );
  title
}
