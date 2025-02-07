import container from "";


/**
 * @typedef {Object} Env
 */

export default {
	/**
	 * @param {Request} request
	 * @param {Env} env
	 * @param {ExecutionContext} ctx
	 * @returns {Promise<Response>}
	 */
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		console.log(`index ${navigator.userAgent} at path ${url.pathname}!`);

		if (url.pathname === "/api") {
			// You could also call a third party API here
			//const data = await import("./data.js");
			//return Response.json(data);
		}
		return new Response(index, {
			headers: {
				"content-type": "text/html",
			},
		});
	},
};
