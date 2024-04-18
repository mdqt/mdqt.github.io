input_urls.value = [
	"https://www.reddit.com/search/?q=",
	"https://www.youtube.com/results?search_query=",
	"https://en.wikipedia.org/w/index.php?search=",
	"https://hn.algolia.com/?query="
].join(`\n`);

const thingies = [
	input_main_url,
	input_separator,
	input_substitute,
	input_urls
];

thingies.forEach(thing => {
	thing.addEventListener("input", magic);
});

function magic(event) {
	const main_url = input_main_url.value;
	const separator = input_separator.value;
	const substitute = input_substitute.value;

	const urls = input_urls.value?.split("\n")
		.map(it => {
			it += substitute;
			it = encodeURIComponent(it);
			return it;
		})
		.join(separator);

	output_url.innerText = `${main_url}?q=${substitute}&s=${separator}&urls=${urls}`;
}

magic();


input_test_query.addEventListener('keydown', event => {
	if (event.key == "Enter") test_query();
});

button_test_query.addEventListener('click', test_query);

function test_query() {
	url = output_url.innerText.replace(input_substitute.value, input_test_query.value);
	console.log(url)

	window.open(String(url), '_blank');
}