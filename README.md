# Hello world

## Install deno

Deno ships as a single executable with no dependencies. You can install it using the installers below, or download a release binary from [the releases page](https://github.com/denoland/deno/releases).

Shell (Mac, Linux):
``` curl
curl -fsSL https://deno.land/x/install/install.sh | sh
```
PowerShell (Windows):
``` iwr
iwr https://deno.land/x/install/install.ps1 -useb | iex
```
Homebrew (Mac):
``` brew
brew install deno
```
Chocolatey (Windows):
``` choco
choco install deno
```
Scoop (Windows):
``` scoop
scoop install deno
```
Build and install from source using Cargo
``` cargo
cargo install deno
```
See deno_install for more installation options.

## Install pagic
deno install --unstable --allow-read --allow-write --allow-net --allow-run --name=pagic https://deno.land/x/pagic/mod.ts

## Create pagic.config.ts and README.md
mkdir site && cd site && echo "export default {};" > pagic.config.ts && echo "# Hello world" > README.md

## Run pagic
pagic build --watch --serve