/**
 * This is just a helper file to run the publish script.
 */

const ghpages = require("gh-pages");

ghpages.publish(
	"./book/book/html",
	{
		branch: "web1",
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
