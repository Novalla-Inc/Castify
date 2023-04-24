use coreaudio_sys;
// TODO: Get availible audio devices from the operating systems input.

pub fn return_number_audio_devices() -> u64 {
    return  unsafe { coreaudio_sys::MIDIGetNumberOfDevices() }; 
}

#[test]
fn test_get_audio_number() {
    assert!(return_number_audio_devices() == 3);
}