use std::thread;

type Task = fn();

/// Create a new thread to create a new file then close the thread after file creation.
pub fn create_file(task: Task) -> String {
    let new_thread = thread::spawn(move || {
        // Task is a function pointer.
        task();
    });

    new_thread.join().unwrap();

    return "Thread Finished.".to_string();
}