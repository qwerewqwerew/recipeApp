import { useState } from 'react';
const TimerFn = () => {
	let useTime = useState(0);
	let time = useTime[0];
	let setTime = useTime[1];
	//let [time,setTime] = useState(0);
	console.log(time);
	console.log(setTime);
	const updateTime = () => {
		setTime(time + 1);
	};
	return (
		<>
			<div>TimerFn</div>
			<h3>{time}</h3>
			<button onClick={() => setTime(time + 1)}>더하기</button>
		</>
	);
};
export default TimerFn;
