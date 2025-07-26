
import links from "../links.json" with { type: "json" }

const script = Deno.readTextFileSync("./links.js").split("\n");

script[1] = `const links = ${JSON.stringify(links)};`
script.unshift("// auto-generated! do not touch! touch links.js instead");

Deno.writeTextFileSync("../index.js", script.join("\n"));

console.log("the deed is done.");