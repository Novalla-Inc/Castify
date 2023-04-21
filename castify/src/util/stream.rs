use uuid::Uuid;

pub fn generate_stream_key() -> String {
	let _stream_key = Uuid::new_v4().to_string();

	return _stream_key;
}

#[test]
fn test_generate_stream_key() {
	let _key = generate_stream_key();

	assert_eq!(_key.len(), 36);
}
