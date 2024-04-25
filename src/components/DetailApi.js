import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Title from './Title';
import Detail from './Detail';

const DetailPage = () => {
	const { id } = useParams(); // URL에서 id 가져오기
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { url, key, service, filetype, start, end } = {
					url: 'https://openapi.foodsafetykorea.go.kr/api/',
					key: '08cc9b42270a4439b1b5/',
					service: 'COOKRCP01/',
					filetype: 'json/',
					start: '1/',
					end: '1/',
				};

				const api = await axios.get(`${url}${key}${service}${filetype}${start}${end}RCP_NM=${encodeURIComponent(id)}`);
				const {
					data: {
						COOKRCP01: { row },
					},
				} = api; // 수정된 부분
				const initData = row[0]; // 데이터 구조에 따라 첫 번째 요소만 사용
				setData(initData); // 수정된 부분
			} catch (error) {
				console.error('데이터를 불러오는데 실패했습니다.', error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [id]);

	if (loading) return <Title h1='로딩중입니다.' />;
	if (!data) return <Title h1='데이터가 없습니다.' />;

	return <Detail data={data} />;
};

export default DetailPage;
