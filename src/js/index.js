// import autoCompleteFunc from "./modules/autocomplete.js";
// autoCompleteFunc();
import { easepick, TimePlugin } from "@easepick/bundle";

const picker = new easepick.create({
	element: "#datepicker",
	css: [
		"https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css",
		"https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css",
	],
	format: "HH:mm, DD/MM/YY",
	zIndex: 10,
	plugins: [TimePlugin],
});
