
const links = {};
const hash = location.hash;
const label = hash.slice(1);
const link = links[label];


if (link) {
	location.href = link.href;
}

if (!link && hash) {
	document.body.insertAdjacentHTML("beforeend", `<p>i don't think "${label}" is valid</p>`);
}

if (!link) {
	document.body.insertAdjacentHTML("beforeend", `<p>here are the available links:</p>`);
	
	const list = document.createElement("div");
	list.className = "list";

	document.body.append(list);

	for (const [label, link] of Object.entries(links)) {
		const html = (`
			<div class="item">
				<b>${label}</b>
				<br>
				<sup>(<a href="${link.href}">${link.href}</a>)</sup>
				<br>
				${link.text?.join("<br>") || "<i>No description.</i>"}
			</div>
		`);

		list.insertAdjacentHTML("beforeend", html);
	}
}