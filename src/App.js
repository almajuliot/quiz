import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Leaderboard from "./Components/Leaderboard";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Stats from "./Pages/Stats";
import Leaderboards from "./Pages/Leaderboards";
import { useEffect } from "react";

function App() {
	const [leaderData, setLeaderData] = [];

	useEffect(() => {
		async function fethedData() {
			const res = await fetch("https://hypethentic.com/api/product/");
			const data = await res.json();
			setLeaderData(data);
		}
		fethedData();
	}, []);

	console.log(leaderData);

	return (
		<div className="App">
			{/* <Header /> */}
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/leaderboard"
						element={<Leaderboards name="Azizkun" />}
					/>
					<Route path="/quizes" element={<Quiz />} />
					<Route path="/stats" element={<Stats />} />
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
