use coreaudio_sys;
// TODO: Get available audio devices from the operating systems input.

pub fn return_number_audio_devices() -> u64 {
    return  unsafe { coreaudio_sys::MIDIGetNumberOfDevices() };
}

extern "C" {
	fn print_num(num: i32);
}

fn test_run_c() {
		unsafe {  print_num(30) }
}

pub fn get_audio_device() {}

pub fn get_audio_device_wn() {}

#[test]
fn test_get_audio_number() {
    assert_eq!(return_number_audio_devices(), 3);
}

#[test]
fn test_c() {
	test_run_c();
}
