@echo off

echo "Setting up the environment..."
echo "make sure to check if all of the required programs are installed"

python ./setup.py

cd desktop\

@REM Install Desktop Requirements
pnpm install
@REM Start Desktop
pnpm tauri dev

echo "Done!"
