
// <links>
const links = {
	"code-quality": {
		"href": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		"text": [
			"check your code quality",
			"awesome tool"
		]
	}
};
// </links>


const label = (() => {
	let i = 1;

	if (location.hash[1] == "/") {
		i++;
	}

	return (location.hash.slice(i));
})();

const link = links[label];


if (link) {
	location.href = link.href;
}

if (!link) {
	document.body.append("i don't think you're supposed to be here? here's the available links");

	for (const [label, link] of Object.entries(links)) {
		const p = document.createElement("p");
		const a = document.createElement("a");

		p.append(label + ": ");
		p.append(a);

		a.innerText = link.href;
		a.href = link.href;

		document.body.append(p);
	}
}