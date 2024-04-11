import { useParams, useLocation } from 'react-router-dom';
import Recipe from './Recipe';
import Title from './Title';
const CategoryPage = () => {
	const { title } = useParams(); // URL 파라미터로부터 카테고리 제목을 가져옴
	const location = useLocation();
	// navigate로부터 전달받은 상태, 없을 경우 기본값으로 빈 배열 설정
	const { data: filteredData } = location.state || { data: [] };
	// 데이터가 없는 경우 로딩 중이거나 데이터가 없음을 표시
	if (!filteredData || filteredData.length === 0) {
		return <div>로딩 중이거나 해당 카테고리에 대한 데이터가 없습니다.</div>;
	}

	console.log(filteredData);
	return (
		<div className='inner'>
			<div className='category_group'>
				<Title h1={title} />
				{filteredData.map((item) => (
					<Recipe key={item.id} name={item.name} img_s={item.imgs.main_s} cate={item.part} />
				))}
			</div>
		</div>
	);
};

export default CategoryPage;
