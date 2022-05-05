# Self Building The Book

If you wish to build the book from the source, you will have to complete a few steps.

1. Clone the repository's master branch to your local machine.
2. Install [mdbook](https://rust-lang.github.io/mdBook/index.html) from [cargo](https://crates.io/crates/mdbook).
3. Run `cargo install mdbook-book` to install the package locally.
4. Run `mdbook build` to build the book.
5. CD into the book's directory and run `mdbook serve --open` to start the server for the book.
