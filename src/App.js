import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import axios from "axios";
import Leaderboard from "./Components/Leaderboard";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Stats from "./Pages/Stats";
import Leaderboards from "./Pages/Leaderboards";
import { useEffect, useState } from "react";

function App() {
	// const [leaderData, setLeaderData] = useState([]);
	const baseURL = "http://5.75.180.91:3000/api/leaderboards";
	const quizData = [
		{
			quizQuestions: [
				{
					anime_id: 485,
					character_id: 12533,
					anime_name: "Death Note",
					character_name: "Amane, Misa",
					character_image:
						"https://img.anslayer.com/anime/characters_staff/character/character-44becc026b7424e5ece25579f689892e.jpg",
					answer: "Yes",
				},
				{
					anime_id: 1545,
					character_id: 36150,
					anime_name: "Boku no Hero Academia",
					character_name: "Hagakure, Tooru",
					character_image:
						"https://img.anslayer.com/anime/characters_staff/character/character-f718495a6d6f26868ba4f871e87507d2.jpg",
					answer: "No",
				},
				{
					anime_id: 2108,
					character_id: 39846,
					anime_name: "Black Clover",
					character_name: "Kahono",
					character_image:
						"https://img.anslayer.com/anime/characters_staff/character/character-11101d3a941406fab2afbb8e68f43461.png",
					answer: "No",
				},
				{
					anime_id: 2365,
					character_id: 47233,
					anime_name: "Jujutsu Kaisen",
					character_name: "Jougo",
					character_image:
						"https://img.anslayer.com/anime/characters_staff/character/character-1646310759-6220b56789819.jpg",
					answer: "No",
				},
			],
		},
	];

	const leaderData = [
		{
			result: [
				{
					user_id: 26,
					user_handle: "HAL9000",
					user_full_name: "s kk d",
					user_image_url:
						"https://img.anslayer.com/anime/user/user-image/20220601165455-1254e22e-1801x1414-original.jpg",
					level_reached: 2,
					points_scored: 7,
					completed_at: "2023-03-14T12:49:30.000Z",
					times_played: 1,
				},
				{
					user_id: 2,
					user_handle: "u_somone22",
					user_full_name: "somone22",
					user_image_url:
						"https://img.anslayer.com/anime/user/user-image/20220603050107-17028b72-800x600-original.jpg",
					level_reached: 1,
					points_scored: 6,
					completed_at: "2023-03-14T13:49:30.000Z",
					times_played: 2,
				},
			],
		},
	];

	// useEffect(() => {
	// 	axios.get(`${baseURL}/1`).then((response) => {
	// 		setLeaderData(response.data);
	// 	});
	// }, []);

	// useEffect(() => {
	// 	async function fethedData() {
	// 		const res = await fetch("http://5.75.180.91:3000/api/leaderboards");
	// 		const data = await res.json();
	// 		setLeaderData(data);
	// 	}
	// 	fethedData();
	// }, []);

	return (
		<div className="App">
			{/* <Header /> */}
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/leaderboard"
						element={<Leaderboards leaderData={leaderData} name="Azizkun" />}
					/>
					<Route path="/quizes" element={<Quiz quizData={quizData} />} />
					<Route path="/stats" element={<Stats />} />
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
