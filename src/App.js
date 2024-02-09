import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<div>
					<Routes>
						<Route
							path="/"
							element={<Landing />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
