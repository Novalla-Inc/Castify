use std::process::Command;

fn main() {
	let output = Command::new("git")
		.args(["rev-parse", "--short", "HEAD"])
		.output()
		.expect("failed to execute process");
	let git_hash = String::from_utf8(output.stdout).expect("failed to convert to string");
	println!("cargo:rustc-env=GIT_HASH={git_hash}");
}
