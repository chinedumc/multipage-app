import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<h2>Hello World!</h2>} />
				<Route path="product" element={<h2>Hello World!!!</h2>} />
				
			</Routes>
		</BrowserRouter>
	);
}

export default App;
