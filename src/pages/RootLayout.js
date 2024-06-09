import { Outlet } from "react-router-dom";
import Navi from './Navi';
const RootLayout = () => {
	return (
		<>
			<h1>Root</h1>
			<Navi />
      <Outlet />
		</>
	);
};
export default RootLayout;
