import axios from 'axios';
export const getDB = async () => {
	try {
		const { data } = await axios.get('http://openapi.foodsafetykorea.go.kr/api/08cc9b42270a4439b1b5/COOKRCP01/json/1/30');
		const {
			COOKRCP01: { row },
		} = data;
		const initData = row.map((recipe) => {
			const instructions = [];
			for (let i = 0; i <= 20; i++) {
				const manualKey = `MANUAL${i.toString().padStart(2, '0')}`;
				const manualImgKey = `MANUAL_IMG${i.toString().padStart(2, '0')}`;
				if (recipe[manualKey] || recipe[manualImgKey]) {
					instructions.push({
						manual: recipe[manualKey],
						manualImg: recipe[manualImgKey],
					});
				}
			}
			return { ...recipe, instructions };
		});
		return initData;
	} catch (error) {
		console.error(error);
	}
};
