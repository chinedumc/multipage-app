import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

const Login = ({ setUser }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!name || !email) return;
		setUser({ name: name, email: email });
		navigate("/userpage");
	};

	return (
		<section>
			<form className="form" onSubmit={handleSubmit}>
				<h5>Login</h5>
				<div className="form-row">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input
						type="text"
						className="form-input"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input
						type="text"
						className="form-input"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<Button>Login</Button>
			</form>
		</section>
	);
};

export default Login;
