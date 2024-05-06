import { useEffect, useState } from 'react';

const Time = () => {
	const now = new Date().toLocaleString();
	let [day, setDay] = useState(now);

	useEffect(() => {
		const stop = setInterval(() => {
			setDay(new Date().toLocaleString());
		}, 1000);
		return clearInterval(stop);
	}, []);
	console.log(day);

	return (
		<>
			<h3>{day}</h3>
		</>
	);
};

const Temp = () => {
	return (
		<>
			<h1>Temp</h1>
		</>
	);
};
function LifeCycle() {
	const [time, setTime] = useState(0);
	const [input, setInput] = useState('');
	useEffect(() => {
		console.log('dependencies array 없어');
	});
	useEffect(() => {
		console.log('dependencies array 빈거');
	}, []);
	useEffect(() => {
		if (time > 5) {
			setTime(0);
		}
	}, [time]);
	console.log('Rendering이 됩니다!');

	return (
		<>
			<h3>{time}</h3>
			<Time />

			<button onClick={() => setTime(time + 1)}>click</button>
			<input
				style={{ display: 'block' }}
				type="text"
				value={input}
				onChange={(e) => {
					setInput(e.target.value);
				}}
			/>
			<p>{input}</p>
		</>
	);
}

export default LifeCycle;
