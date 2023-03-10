import { useState } from "react";
import { Link } from "react-router-dom";

export default function Modes() {
	const [mode, setMode] = useState("ranked");
	function onChange(e) {
		const { value } = e.target;
		setMode(value);
		console.log(e.target);
	}
	return (
		<div className="mode">
			<p>Singleplayer modes:</p>
			{/* <div className="mode--list">
				<EachMode
					title="Ranked progressive"
					text="Easy at first, the game will gradually become much more challenging.
						Limited time to provide an answer. Beat other players' highscore and
						get on the leaderboard."
					value="ranked"
					mode={mode}
					onChange={onChange}
				/>
				<EachMode
					title="Relaxed progressive"
					text="Easy at first, the game will gradually become much more challenging. No time limitation to provide an answer. Final score is not recorded."
					value="relaxed"
					mode={mode}
					onChange={onChange}
				/>
				<EachMode
					title="Custom linear"
					text="Adjust the quiz to your comfort. Defined configuration will remain unchanged throughout the game (difficulty will not be gradually increased). Final score is not recorded."
					value="custom"
					mode={mode}
					onChange={onChange}
				/>
			</div> */}

			<div className="mode--begin">
				<Link to={`/quiz`}>
					<h1 className="mode--beginbtn">Begin Quiz</h1>
				</Link>
				<Link to={`/leaderboard`}>
					<h1 className="mode--leaderboard">Leaderboard</h1>
				</Link>
			</div>
		</div>
	);
}

function EachMode(props) {
	let styles = {};
	if (props.value === props.mode) {
		styles = { background: "#39f", color: "rgba(255,255,255,.7)" };
	}

	return (
		<label style={styles} htmlFor={props.value} className="mode--each">
			<input
				id={props.value}
				value={props.value}
				className="selectmode"
				name="selectmode"
				type={"radio"}
				checked={props.value === props.mode}
				onChange={props.onChange}
			></input>
			<div className="">
				<h4>{props.title}</h4>
				<p>{props.text}</p>
			</div>
		</label>
	);
}
