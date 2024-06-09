import './Title.css';
const Title = ({ h1, h3, title }) => {
	if (h1) return <h1>{h1}</h1>;
	if (h3) return <h3>{h3}</h3>;
	return <h2>{title}</h2>;
};

export default Title;
