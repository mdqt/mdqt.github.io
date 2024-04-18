const params = new URLSearchParams(window.location.search);
const query = params.get("q");
const separator = params.get("s");
const urls = params.get("urls")?.split(separator);

function boop(text) {
	alert(text);
	throw text;
}

if (!query) boop("no query?");
if (!separator) boop("no seperator?");
if (!urls) boop("no urls?");

display_query.innerText = query;
display_amount.innerText = urls.length;

urls.forEach(url => {
	console.log(url);

	url = url.replace("%s", query);

	window.open(url, "_blank");
});