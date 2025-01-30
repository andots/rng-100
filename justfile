# use cmd.exe instead of sh:
set windows-shell := ["cmd.exe", "/c"]

default:
  just --list --unsorted

tauri-dev:
  pnpm run tauri dev

tauri-build:
  pnpm run tauri build

webdev:
  pnpm run turbo dev

webbuild:
  pnpm run turbo build

# run astro dev
pnpm-webdev:
  pnpm --filter random-number-generator-web dev

pnpm-webbuild:
  pnpm --filter random-number-generator-web build

pnpm-webpreview:
  pnpm --filter random-number-generator-web preview
