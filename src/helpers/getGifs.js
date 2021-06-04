export const getGifs = async (query, limit = 5) => {
	const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(
		query
	)}&limit=${limit}&api_key=viy2ehIQQAC13oaWvB3YN0GjHOS45JUD`;
	const response = await fetch(url);
	if (response.ok) {
		const { data } = await response.json();

		const gifs = data.map((img) => {
			return {
				id: img.id,
				title: img.title,
				url: img.images?.downsized_medium.url,
			};
		});

		return gifs;
	}

    throw new Error (response.message)
};
