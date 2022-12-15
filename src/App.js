import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SharedLayout from "./pages/SharedLayout";
import ContactUs from "./pages/ContactUs";
import ErrorPage from "./pages/ErrorPage";
import UserPage from "./pages/UserPage";
import Login from "./pages/Login";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
	const [user, setUser] = useState(null);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="products" element={<Products />} />
					<Route path="contactus" element={<ContactUs />} />
					<Route
						path="userpage"
						element={
							<ProtectedRoute user={user}>
								<UserPage user={user} />
							</ProtectedRoute>
						}
					/>
					<Route path="login" element={<Login setUser={setUser} />} />
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
