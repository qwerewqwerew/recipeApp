import { useSearchParams,useNavigate } from 'react-router-dom';
const style = { fontSize: '5rem', textAlign: 'center', backgroundColor: 'blue' };

const Edit = (props) => {
	const [params, setParams] = useSearchParams();
	const navigate=useNavigate();
	console.log(navigate);
	const id = params.get('id');
	const mood = params.get('mood');
	const changeMood = () => setParams({ id: '50', mood: 'light' });
	return (
		<div>
			<h1 style={style}>{id} 번째 일기 수정</h1>
			<p>현재 {mood} 모드 상태입니다</p>
			<button onClick={changeMood}>{mood}</button>
			<button onClick={()=>navigate('/')}>홈으로 가기</button>
			<button onClick={()=>navigate(-1)}>뒤로 가기</button>
		</div>
	);
};
export default Edit;
