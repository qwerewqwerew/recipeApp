function getData() {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((data) => console.log(data));
}
getData();
