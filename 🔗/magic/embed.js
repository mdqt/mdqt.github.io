
console.log("hmm");


import links from "./links.json" with { type: "json" }

const script = Deno.readTextFileSync("./primary.js").split("\n");

const open_index = script.indexOf("// <links>") + 1;
const close_index = script.indexOf("// </links>") - open_index;

script.splice(
	open_index,
	close_index,
	`const links = ${JSON.stringify(links)};`
);

script.unshift("// auto-generated! do not touch! touch primary.js instead");

Deno.writeTextFileSync("../index.js", script.join("\n"));


console.log("the deed is done.");