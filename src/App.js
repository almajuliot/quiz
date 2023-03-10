import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Leaderboard from "./Components/Leaderboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Stats from "./Pages/Stats";

function App() {
	return (
		<div className="App">
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/leaderboard" element={<Leaderboard />} />
					<Route path="/quizes" element={<Quiz />} />
					<Route path="/stats" element={<Stats />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
