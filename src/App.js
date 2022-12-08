import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="about" element={<About />} />
					<Route path="product" element={<Product />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
