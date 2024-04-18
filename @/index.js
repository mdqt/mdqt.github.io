const params = new URLSearchParams(window.location.search);
const query = params.get("q");
const separator = params.get("s");
const urls = params.get("urls")?.split(separator);

urls.forEach(url => {
	console.log(url);

	url = url.replace("%s", query);

	window.open(url, "_blank");
});