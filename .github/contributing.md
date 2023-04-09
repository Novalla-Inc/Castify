# Contributing

Thanks for checking this out! All you need to do is three simple steps.

Understanding the structure of the project:

---

The structure of speak is simple as a whole:

    - `speak` -> This is the core backend written in rust, everything is connected to the frontend through [rspc](https://www.rspc.dev/)
    - `desktop` -> everything relating to the frontend of the project.

## Step 1

Go to the scripts folder and run the specific setup script for your system:

* Macos -> Setup.sh
* Linux -> Setup.sh
* Windows -> Setup.bat

The Setup script is found in `/scripts/` it is a [Python](https://www.python.org/) Script, so make sure you have Python installed.
 
Setup will run three commands:

1. Install rsutc which can be canceled if you already have it installed: `just press 3`
2. Install `pnpm` then run `pnpm install` in `/desktop`
3. Run the application for you to see it.

- [ ] Run the `setup` script to make sure you have everything installed.
- [ ] Try the application.

## Step 2

Check the current open issues, then make sure to mark that you are doing it by leaving a comment.

Once you have chosen you issue leave a comment that you are doing that issue, then create a new branch and get to work.

Overall the branch layout of the project is simple:
    - release -> for the QA tested release version of Speak.
    - dev-main -> for the dev branch.
    - `your_branch_name` -> for you feature or branch you are working on.

** README issues will be accepted, but if your PR is just readme fixed we will not merge it **

## Step 3

Submit pr and wait to be reviwed.

Make sure to let us know your progress in the [discord](https://discord.gg/6D3CBWrvCE).


Make sure to review the style guide for the `/desktop` folder.

here is that style guide for Typescript files: [Style Guide](https://google.github.io/styleguide/tsguide.html)

here is the style guide for TSX files: [Style Guide](https://airbnb.io/javascript/react/)


### FAQ

- Why is Speak not a Monorepo ?

We want to encourage programmers of any age, expertise, and qualification to work on this project, overall Monorepos are a "MEH" expierence when in Typescript, and we didn't feel it was needed and / or friendly enough for new comers to contribute if they want to.

- Why such strict style guides ?

Most of the styles this project follows are the styles that you would encounter in any other repo, but they just are not specified. Check out this [video](https://www.youtube.com/watch?v=ypD_oAwEPFU) on style guide to understand more.

