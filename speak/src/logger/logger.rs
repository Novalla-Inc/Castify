use log::{debug, error, info, log_enabled, trace, warn, Level};

/// Initialize the logger.
pub fn fn_init_logger() {
	env_logger::init();
}

/// Log a message at the info level.
pub fn fn_log_info(message: &str) {
	if log_enabled!(Level::Info) {
		info!("{}", message);
	}
}

pub fn log_info_object(message: &str) {
	if log_enabled!(Level::Info) {
		info!("{:?}", message);
	}
}

/// Log a message at the debug level.
pub fn fn_log_debug(message: &str) {
	if log_enabled!(Level::Debug) {
		debug!("{}", message);
	}
}

/// Log a message at the trace level.
pub fn fn_log_trace(message: &str) {
	if log_enabled!(Level::Trace) {
		trace!("{}", message);
	}
}

///  Log a message at the warn level.
pub fn fn_log_warn(message: &str) {
	if log_enabled!(Level::Warn) {
		warn!("{}", message);
	}
}

/// Log a message at the error level.
pub fn fn_log_error(message: &str) {
	if log_enabled!(Level::Error) {
		error!("{}", message);
	}
}

// TODO: Add output logging to a file.
