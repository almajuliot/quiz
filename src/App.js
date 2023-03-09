import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Modes from "./Components/Modes";
import Rules from "./Components/Rules";

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Modes />
			<Rules
				title={"Rules"}
				text={
					"Each character question features four possible answers, in which the player must choose the correct answer. Doing so wins them a certain score, depending on a difficulty level. During their game, players have a set of lifelines that they may use to help them with a question. Players are given three lives , meaning the game will be over after three incorrect answers are provided."
				}
			/>
			<Rules
				title={"Lifelines"}
				text={
					"During a game, players are given three lifelines to aid them with unknown characters. Lifelines can be used unlimited number of times but each one has a cooldown equal to a period of 10 questions."
				}
			/>
			<Rules
				title={"Pausing game (ranked only)"}
				text={
					"Players can take any number of breaks in time-limited games without any penalties, however for the reasons of fair play a guess for the current character needs to be provided before the game will be paused."
				}
			/>
		</div>
	);
}

export default App;
