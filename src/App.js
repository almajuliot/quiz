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
	const [leaderData, setLeaderData] = useState([]);
	const [quizData, setQuizData] = useState([]);
	const [level, setLevel] = useState(1);
	const [score, setScore] = useState(0);
	const [live, setLive] = useState(3);
	const [timeTake, setTimeTake] = useState(0);
	const [timer, setTimer] = useState(20);
	const [addScore, setAddScore] = useState(1);
	const [fiftys, setFiftys] = useState(false);
	const [tapped, setTapped] = useState(false);

	let arrayQuizData, arrayLeaderData;

	function changeData() {
		const url2 = new URL(
			`https://ani-space.com/quiz/api/quiz-questions?lv=${level}`
		);
		const options2 = {
			base: "https://ani-space.com/quiz/api/",
			redirect: "manual",
		};

		fetch(url2, options2)
			.then((response) => response.json())
			.then((json) => setQuizData(json.quizQuestions));

		const url = new URL("https://ani-space.com/quiz/api/leaderboards");
		const options = {
			base: "https://ani-space.com/quiz/api/",
			redirect: "manual",
		};

		fetch(url, options)
			.then((response) => response.json())
			.then((json) => setLeaderData(json.result));
	}

	useEffect(() => {
		setTimeout(changeData, 1500);
		setTimeout(() => {
			setTimer(20);
			setAddScore(1);
			setFiftys(false);
			setTapped(false);
		}, 1800);
	}, [level, live]);

	const [seconds, setSeconds] = useState();
	const [minutes, setMinutes] = useState();
	const [hours, setHours] = useState();

	function calculateTime(second) {}

	useEffect(() => {
		const totalMinutes = Math.floor(timeTake / 60);
		setSeconds(timeTake % 60);
		setHours(Math.floor(totalMinutes / 60));
		setMinutes(totalMinutes % 60);
	}, [timeTake]);

	arrayQuizData = Array.from(quizData);
	arrayLeaderData = Array.from(leaderData);
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
					<Route
						path="/quizes"
						element={
							<Quiz
								quizData={arrayQuizData}
								setLevel={setLevel}
								level={level}
								score={score}
								setScore={setScore}
								live={live}
								setLive={setLive}
								setTimeTake={setTimeTake}
								timeTake={timeTake}
								timer={timer}
								setTimer={setTimer}
								addScore={addScore}
								setAddScore={setAddScore}
								fiftys={fiftys}
								setFiftys={setFiftys}
								tapped={tapped}
								setTapped={setTapped}
							/>
						}
					/>
					<Route
						path="/stats"
						element={
							<Stats
								leaderData={leaderData}
								level={level}
								score={score}
								seconds={seconds}
								minutes={minutes}
								hours={hours}
							/>
						}
					/>
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
