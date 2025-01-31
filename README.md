# RNG-100

RNG-100 is a tiny app that just generates a number from 1 to 100.

<p style="text-align:center">
<img src="docs/rng-100_9.png" width="23%" alt="9" />
<img src="docs/rng-100_62.png" width="23%" alt="62" />
<img src="docs/rng-100_87.png" width="23%" alt="87" />
</p>

<p style="text-align:center">
<img src="docs/rng-100_27l.png" width="23%" alt="9" />
<img src="docs/rng-100_51l.png" width="23%" alt="62" />
<img src="docs/rng-100_72l.png" width="23%" alt="87" />
</p>

## Development

```bash
# start dev server and dev build tauri app
just tauri-dev
# release build tauri app
just tauri-build
# start only frontend dev server
just webdev
# build only frontend
just webbuild
# release application (use git-bash on Windows)
just release
# or dry-run
just release-dry-run
```
