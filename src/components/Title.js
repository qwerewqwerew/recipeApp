const Title = (props) => {
	return (
		<>
			{props.h1 && <h2 className='h1'>{props.h1}</h2>}
			{props.h2 && <h2 className='h2'>{props.h2}</h2>}
		</>
	);
};
export default Title;
