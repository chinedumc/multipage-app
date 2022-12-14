import { Link } from "react-router-dom";

const Products = () => {
	return (
		<>
			Product Page
			<div>
				<Link to="/" className="btn">
					Back To Home
				</Link>
			</div>
		</>
	);
};

export default Products;
