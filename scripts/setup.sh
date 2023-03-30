# Description: Setup Python script to install rust.
python3 ./setup.py 

# Setup Rust lang
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Install Rust dependencies
npm install -g pnpm

# install tauri dependencies
cd desktop/
pnpm install

# run tauri dev
pnpm tauri dev
