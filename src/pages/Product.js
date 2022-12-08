import { Link } from "react-router-dom";

const Product = () => {
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

export default Product;
