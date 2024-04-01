const fruitDB = [
	{ id: 1, name: 'banana', image: 'http://qwerew.cafe24.com/images/banana.png' },
	{ id: 2, name: 'orange', image: 'http://qwerew.cafe24.com/images/orange.png' },
	{ id: 3, name: 'apple', image: 'http://qwerew.cafe24.com/images/apple.png' },
	{ id: 4, name: 'melon', image: 'http://qwerew.cafe24.com/images/melon.jpg' },
];

const Fruit = (props) => {
	const { name, img } = props;
	return (
		<div>
			<h3>내가 좋아하는 {name}</h3>
			<img src={img} alt={name} />
		</div>
	);
};
const renderFruit = (o, i) => {
	return <Fruit key={i} name={o.name} img={o.image} />;
};

function App() {
	console.log(fruitDB.map(renderFruit));
	return (
		<div className='App'>
			<h1>HELLO</h1>
			{fruitDB.map((o, i) => {
				return <Fruit key={i} name={o.name} img={o.image} />;
			})}
			{/* {fruitDB.map(renderFruit)} */}
		</div>
	);
}

export default App;
