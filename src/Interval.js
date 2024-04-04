import { useState } from 'react';

const Interval = (props) => {
	const [date, setDate] = useState(new Date());
  console.log(date);
	return (
		<>
			<div>Interval</div>
		</>
	);
};
export default Interval;
