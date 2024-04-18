const Title = ({h1,h2,h3,h4,h5,h6}) => {
	return (
		<>
			{h1 && <h1 className='h1'>{h1}</h1>}
			{h2 && <h2 className='h2'>{h2}</h2>}
			{h3 && <h3 className='h3'>{h3}</h3>}
			{h4 && <h4 className='h4'>{h4}</h4>}
			{h5 && <h5 className='h5'>{h5}</h5>}
			{h6 && <h6 className='h6'>{h6}</h6>}
		</>
	);
};
export default Title;
