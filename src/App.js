/* import Orange from './Orange'; */

const Fruit = (props) => {
  //const fav = props.fav;
  const {fav}=props;
  console.log(fav);
  return <h3>{fav}</h3>;
};

function App() {
	return (
		<div className='App'>
			<h1>HELLO</h1>
			<Fruit fav='banana' />
			<Fruit fav='orange' />
			<Fruit fav='apple' />
			<Fruit fav='melon' />
		</div>
	);
}

export default App;
