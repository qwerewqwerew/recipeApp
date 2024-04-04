export const fetchDb = async () => {
	try {
		let res = await fetch('https://jsonplaceholder.typicode.com/posts');
		let db = await res.json();
		return db;
	} catch (error) {
		console.error(error);
	}
};
