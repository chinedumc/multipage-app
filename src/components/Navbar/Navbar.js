import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { GiMedicalDrip } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { useState } from "react";
// import { Button } from "../Button";

const Navbar = ({user}) => {
	const [IconClicked, setIconClicked] = useState(false);

	const handleClick = () => {
		setIconClicked(!IconClicked);
	};
	return (
		<nav className="NavbarItems">
			<h1 className="navbar-logo">
				HealthWise <GiMedicalDrip className="navbar-logo-icon" />
			</h1>
			<div className="menu-icon" onClick={handleClick}>
				{IconClicked ? (
					<FaTimes className="fa-times" />
				) : (
					<FaBars className="fa-bars" />
				)}
			</div>
			<ul className={IconClicked ? "nav-menu active" : "nav-menu"}>
				{MenuItems.map((item, index) => {
					return (
						<li key={index}>
							<Link to={item.url} className={item.cName}>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
			{/* <Button>{user?'Sign Out':'Sign In'}</Button> */}
		</nav>
	);
};

export default Navbar;
