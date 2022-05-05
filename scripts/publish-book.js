import ghpages from "ghpages";

export const publishBook = () => {
	ghpages.publish(
		"./docs/book/html",
		{
			branch: "js-book",
			repo: "https://github.com/ThatGuyJamal/js-book.git",
			message: "book update",
		},
		function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log("book published to https://thatguyjamal.github.io/js-book");
			}
		}
	);
};
