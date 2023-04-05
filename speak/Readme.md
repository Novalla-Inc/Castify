# Speak Core

What happens if I don't follow the Naming Conventions for each language?

- Your PR Will not be pushed util the naming conventions are met.

## Format

To format all rust files just make sure you have rustfmt installed then simply run `cargo fmt`

## Scripts

There are some scripts found in the `/scripts` folder. Most of them work corectly and function ad intended.

If you feel the need to add some script or action, Great! Create that script or action.

- For `.sh` scripts follow these [Naming Conventions](https://linuxconcept.com/variable-naming-in-bash-script/#:~:text=Use%20camelCase%20or%20snake_case%20for%20naming%20variables&text=Two%20popular%20naming%20conventions%20for,each%20subsequent%20word%20is%20uppercase.)

- For `.bat` scripts follow these [Naming Conventions](https://wiki.c2.com/?BatFileCodingStandard)

- And fillaly for `.py` scripts follow these [Naming Conventions](https://peps.python.org/pep-0008/)

## Rust Rant

---

Everything for the most part is written in the wonderful powerful programming language RUST.

But just like every production project we have to follow [Style Guides](https://www.techtarget.com/searchsoftwarequality/feature/Follow-Googles-lead-with-programming-style-guides#:~:text=A%20style%20guide%20tells%20a,and%20bad%20programming%20behavior%20explicit.)

Rust has it's own style guide it makes you follow by default, the others where agreed on by the developers, or just are regular by default.

Here is the Rust [Style Guide](https://rust-lang.github.io/api-guidelines/naming.html) For Reference.

### C++ / C Rant

---

There is some use of C++ especially for the linux connections for capturing those windows and building.

A few requirements for this project if you work in the C++ portion.

- Everything is hosted in the `speak_streming` namespace.
- The project is built with CMake.

Follow the [Style Guide](https://google.github.io/styleguide/cppguide.html) for C++.

Follow this [Style Guide](https://www.cs.umd.edu/~nelson/classes/resources/cstyleguide/) for C.

### Swift / Objective-C Rant

---

Swift is found in the project for very MAC specific calls for things that cannot be done in C++

- Swift [Style Guide](https://google.github.io/swift/)
- Objective-C [Style Guide](https://google.github.io/styleguide/objcguide.html)
