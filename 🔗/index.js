// auto-generated! do not touch! touch links.js instead

const links = {"website":{"href":"https://macimas.github.io","name":"macimas.github.io","text":["main site","made with Vue & Deno"],"is_primary":true},"website-secondary":{"href":"https://macimas.neocities.org","name":"macimas.neocities.org","text":["secondary site","made with plain HTML+CSS+JS"]},"website-mdqt":{"href":"https://mdqt.github.io","text":["for lil experiments & \"slightly shorter url\" purposes","may give it another purpose in the future"]},"youtube":{"href":"https://www.youtube.com/@macimas.","name":"@macimas.","text":["main channel"],"is_primary":true},"youtube-secondary":{"href":"https://www.youtube.com/@macdowntwo","name":"@macdowntwo","text":["archived channel with mainly mindustry stuff"]},"youtube-ragdoll":{"href":"https://www.youtube.com/@HowToRagdoll","name":"@HowToRagdoll","text":["strange little MaD2 channel"]},"discord":{"href":"https://discord.com/users/319473344804290563","name":"@macimas (#4393)","text":["main account"],"copy":{"ID":"319473344804290563"},"is_primary":true},"discord-alt":{"href":"https://discord.com/users/728452730393198683","name":"@niccala (#9863)","text":["alt account"],"copy":{"ID":"728452730393198683"}},"bluesky":{"href":"https://macimas.bsky.social","name":"macimas.bsky.social","text":["main account"],"is_primary":true},"github":{"href":"https://github.com/macimas","name":"macimas","text":["main account"],"is_primary":true},"github-fonts":{"href":"https://github.com/macimas-fonts","name":"macimas-fonts","text":["collection of pixel fonts i've made"]},"github-archive":{"href":"https://github.com/macimas-archive","name":"macimas-archive","text":["repository archives"]},"github-mdqt":{"href":"https://github.com/mdqt","name":"mdqt","text":["alt account"]},"reddit":{"href":"https://www.reddit.com/u/ZkyLB","name":"u/ZkyLB","text":["main account"],"is_primary":true},"reddit-alt":{"href":"https://www.reddit.com/u/macimas","name":"u/macimas","text":["reserved account"]},"pixiv":{"href":"https://pixiv.me/macimas","name":"macimas","text":["main account"],"is_primary":true},"pixiv-:3":{"href":"https://www.pixiv.net/en/artworks/129643479","name":"macimas :3","text":["horny account","(i will not let you see)"]},"twitter":{"href":"https://twitter.com/macimas","name":"@macimas","text":["main account","i dont really use it these days, i prefer Bluesky"]},"itch.io":{"href":"https://macimas.itch.io","name":"macimas","text":["main account"],"is_primary":true},"tumblr":{"href":"https://macimas.tumblr.com","name":"@macimas","text":["main site"]},"onlyfans":{"href":"https://onlyfans.com/macimas","name":"@macimas","text":["you are not supposed to be here"]},"dafont":{"href":"https://www.dafont.com/profile.php?user=1721049","name":"macimas bahnsisk","text":["main account"]},"code-quality":{"href":"https://www.youtube.com/watch?v=dQw4w9WgXcQ","name":"code quality","text":["check your code quality","awesome tool"]}};
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
		const display_href = link.href.split("://", 2)[1];

		const html = (`
			<div class="item">
				<b>${label}</b>
				<br>
				<sup>(<a href="${link.href}">${display_href}</a>)</sup>
				<br>
				${link.text?.join("<br>") || "<i>No description.</i>"}
			</div>
		`);

		list.insertAdjacentHTML("beforeend", html);
	}
}