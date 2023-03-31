#!/bin/bash
echo "Setting up the project..."

# Setup Rust lang
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Install Rust dependencies
npm install -g pnpm

# install tauri dependencies
cd ../
cd desktop/
pnpm install

echo "Setup complete!"
echo "Have a nice time prgramming!🖤"

# run tauri dev
pnpm tauri dev
