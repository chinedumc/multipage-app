import { Outlet } from "react-router-dom";
// import "../index.css";

const Home = () => {
	return (
		<>
			<div>Home element Across Pages</div>
			<Outlet />
		</>
	);
};

export default Home;
