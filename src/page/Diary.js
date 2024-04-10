import { useParams } from 'react-router-dom';
const style = { fontSize: '5rem', textAlign: 'center', backgroundColor: 'green' };
const Diary = (props) => {
	//const pa = useParams();
	//const id = pa.id;
	const { id } = useParams();
	return (
		<>
			<h1 style={style}>{id}번째 일기</h1>
		</>
	);
};
export default Diary;
