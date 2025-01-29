# use cmd.exe instead of sh:
set windows-shell := ["cmd.exe", "/c"]

default:
  just --list --unsorted

# run astro dev
webdev:
  pnpm --filter random-number-generator-web dev
