use serde::{Deserialize, Serialize};
use std::thread;
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
pub enum JobType {
	BACKGROUND,
	FRONT,
	RUNNING,
	DEFAULT,
}

#[derive(Debug, Serialize, Deserialize)]
pub enum JobStatus {
	STARTING,
	PROCESSING,
	FINISHED,
	STOPPING,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Job {
	job_name: String,
	job_status: JobStatus,
	job_type: JobType,
}

pub struct JobHandler {
	id: String,
	job: Job,
	job_method: fn(),
}

impl JobHandler {
	fn start_job(job_todo: fn()) {
		// if the job has no data dependencies.
		thread::spawn(move || {
			job_todo();
		});
	}
}

pub fn define_job_system(j_type: JobType, job_todo: fn()) -> JobHandler {
	let _new_handler: JobHandler = JobHandler {
		id: Uuid::new_v4().to_string(),
		job: Job {
			job_name: "test".to_string(),
			job_status: JobStatus::STARTING,
			job_type: j_type,
		},
		job_method: job_todo,
	};

	return _new_handler;
}

fn print_test() {
	println!("Test");
}

// #[test]
// fn test_define_job_system() {
// 	println!("{:?}", define_job_system(JobType::DEFAULT, print_test()));
// }
