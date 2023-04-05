import os
import sys


def startup():
    print(
        """
        __           __         __           __                  __                __          __           __         __
       / /\         /\ \       /\ \         / /\                /\_\              /\ \        /\ \         /\ \       /\ \
      / /  \       /  \ \     /  \ \       / /  \              / / /  __         /  \ \      /  \ \       /  \ \     /  \ \
     / / /\ \__   / /\ \ \   / /\ \ \     / / /\ \            / / /  /\_\       / /\ \ \    / /\ \ \     / /\ \ \   / /\ \ \
    / / /\ \___\ / / /\ \_\ / / /\ \_\   / / /\ \ \          / / /__/ / /      / / /\ \_\  / / /\ \_\   / / /\ \_\ / / /\ \ \
    \ \ \ \/___// / /_/ / // /_/_ \/_/  / / /  \ \ \        / /\_____/ /      / / /_/ / / / /_/_ \/_/  / / /_/ / // / /  \ \_\
     \ \ \     / / /__\/ // /____/\    / / /___/ /\ \      / /\_______/      / / /__\/ / / /____/\    / / /__\/ // / /   / / /
 _    \ \ \   / / /_____// /\____\/   / / /_____/ /\ \    / / /\ \ \        / / /_____/ / /\____\/   / / /_____// / /   / / /
/_/\__/ / /  / / /      / / /______  / /_________/\ \ \  / / /  \ \ \      / / /\ \ \  / / /______  / / /      / / /___/ / /
\ \/___/ /  / / /      / / /_______\/ / /_       __\ \_\/ / /    \ \ \    / / /  \ \ \/ / /_______\/ / /      / / /____\/ /
 \_____\/   \/_/       \/__________/\_\___\     /____/_/\/_/      \_\_\   \/_/    \_\/\/__________/\/_/       \/_________/
        """
    )


def check_os():
    sys.platform = sys.platform.lower()
    if sys.platform == "linux":
        print("Linux detected")
        return "linux"
    elif sys.platform == "darwin":
        print("MacOS detected")
        return "macos"
    elif sys.platform == "win32":
        print("Windows detected")
        return "windows"
    else:
        print("Unknown OS")
        return "unknown"


# get rust
def get_rust():
    # Get the rust compiler from the rust website
    os_var = check_os()
    rustup = os.path.join(os.environ["HOME"], ".cargo", "bin", "rustup")

    match os_var:
        case "linux":
            os.system(f"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y")
        case "macos":
            os.system(f"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y")
        case "windows":
            os.system(f"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y")
        case "unknown":
            print("Unknown OS")
            sys.exit(1)


startup()
get_rust()
