import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const DataContext = createContext();

const App = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	const getDB = async () => {
		try {
			const { data } = await axios.get('http://openapi.foodsafetykorea.go.kr/api/08cc9b42270a4439b1b5/COOKRCP01/json/1/100');
			const {
				COOKRCP01: { row },
			} = data;
			const initData = row.map((item) => ({
				...item,
				instructions: Array.from({ length: 20 }, (_, i) => ({
					manual: item[`MANUAL${String(i + 1).padStart(2, '0')}`],
					manualImg: item[`MANUAL_IMG${String(i + 1).padStart(2, '0')}`],
				})).filter((inst) => inst.manual),
			}));
			setData(initData);
			setLoading(false);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getDB();
	}, []);

	return <DataContext.Provider value={{ data, loading }}>{children}</DataContext.Provider>;
};

export default App;
export { DataContext };
