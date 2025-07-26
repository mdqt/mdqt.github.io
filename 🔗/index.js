// auto-generated! do not touch! touch primary.js instead

// <links>
const links = {"website-main":{"href":"https://macimas.github.io","text":["main site","made with Vue & Deno"]},"website-secondary":{"href":"https://macimas.neocities.org","text":["secondary site","made with plain HTML+CSS+JS"]},"website-mdqt":{"href":"https://mdqt.github.io","text":["for lil experiments & \"slightly shorter url\" purposes","may give it another purpose in the future"]},"code-quality":{"href":"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}};
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