import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Title from './Title';
import Detail from './Detail';

const DetailApi = () => {
	const { id } = useParams(); // URL에서 id 가져오기
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);

	useEffect(() => {
		const getDB = async () => {
			try {
				const api = await axios.get(`http://openapi.foodsafetykorea.go.kr/api/08cc9b42270a4439b1b5/COOKRCP01/json/1/1/RCP_NM=${encodeURIComponent(id)}`);
				const {
					data: {
						COOKRCP01: { row },
					},
				} = api;
				const initData = row[0];
				setData(initData);
			} catch (error) {
				console.error('데이터를 불러오는데 실패했습니다.', error);
			} finally {
				setLoading(false);
			}
		};
		getDB();
	}, [id]);
	if (loading) return <Title h1='로딩중입니다.' />;
	if (!data) return <Title h1='데이터가 없습니다.' />;

	return <Detail data={data} />;
};

export default DetailApi;
