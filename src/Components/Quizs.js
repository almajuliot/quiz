import { useEffect, useState } from "react";

export default function Quizs(props, index) {
	let trueAnswer,
		position = "down";

	const [score, setScore] = useState(0);
	const [level, setLevel] = useState(1);
	const [live, setLive] = useState(3);
	const [timer, setTimer] = useState(20);
	const [addScore, setAddScore] = useState(1);
	const [fiftys, setFiftys] = useState(false);

	function timestwo() {
		setAddScore(2);
	}

	function boostBtn({ target }) {
		if (target.className === "guesss") {
			target.classList.add("guessboost");
			target.classList.remove("guesss");
		}
		timestwo();
	}

	function lvlback() {
		setLevel((prevLevel) => prevLevel + 1);

		setScore((prevScore) => prevScore + addScore);
	}

	useEffect(() => {
		const lvlText = document.querySelector(".quiz--lvltext");
		lvlText.classList.remove("quiz--green");
		lvlText.textContent = `Lvl ${level}, #1`;
	}, [level]);

	function True(e) {
		const trueElement = document.querySelector(".guess");
		const lvlText = document.querySelector(".quiz--lvltext");
		trueElement.className = "quiz--answerbtn true";
		lvlText.textContent = `+${addScore}`;
		lvlText.classList.add("quiz--green");
		setTimeout(lvlback, 1000);
	}

	function False(e) {
		setLive((prevLive) => prevLive - 1);
		const trueElement = document.querySelector(".truee");
		const falseElement = document.querySelector(".guess");
		trueElement.className = "quiz--answerbtn true";
		falseElement.className = "quiz--answerbtn false";
	}

	function fifty() {
		setFiftys(true);
	}

	useEffect(() => {
		if (timer === 0) {
			setTimeout(False, 0);
		}

		const TimerInt =
			timer > 0 &&
			setInterval(() => {
				setTimer((time) => time - 1);
			}, 1000);
		return () => {
			clearInterval(TimerInt);
		};
	}, [timer]);

	for (let i = 0; i < 4; i++) {
		if (props.quizData[0].quizQuestions[i].answer === "Yes") {
			if (i <= 1) {
				position = "up";
			} else {
				position = "down";
			}
		}
	}

	let mappedAnswer = props.quizData[0].quizQuestions.map((each, index) => {
		if (each.answer === "Yes") {
			trueAnswer = index;
		}

		if (index < 2) {
			if (each.answer == "Yes") {
				return (
					<AnswerBtn
						index={index}
						answer="Yes"
						position={position}
						className="true"
						onClick={True}
						fiftys={fiftys}
						character_name={each.character_name}
						anime_name={each.anime_name}
					/>
				);
			} else {
				return (
					<AnswerBtn
						index={index}
						position={position}
						answer="No"
						onClick={False}
						fiftys={fiftys}
						character_name={each.character_name}
						anime_name={each.anime_name}
					/>
				);
			}
		}
	});

	let mappedAnswer2 = props.quizData[0].quizQuestions.map((each, index) => {
		if (each.answer === "Yes") {
			trueAnswer = index;
		}

		if (index >= 2) {
			if (each.answer == "Yes") {
				return (
					<AnswerBtn
						index={index}
						answer="Yes"
						position={position}
						className="true"
						fiftys={fiftys}
						onClick={True}
						character_name={each.character_name}
						anime_name={each.anime_name}
					/>
				);
			} else {
				return (
					<AnswerBtn
						index={index}
						answer="No"
						position={position}
						onClick={False}
						fiftys={fiftys}
						character_name={each.character_name}
						anime_name={each.anime_name}
					/>
				);
			}
		}
	});

	return (
		<div className="quiz">
			<div className="quiz--btn">
				<div className="quiz--btnleft">
					<h4 onClick={fifty} className="quiz--h4 guesss">
						<sup className="quiz--sup">50</sup>/
						<sub className="quiz--sub">50</sub>
					</h4>
					<h4 className="guesss" onClick={boostBtn}>
						x2
					</h4>
					<h4 className="guesss">
						<svg
							className="kanankanan"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							data-svg="chevron-double-right"
						>
							<polyline
								fill="none"
								stroke="#000"
								stroke-width="1.03"
								points="10 6 14 10 10 14"
							></polyline>
							<polyline
								fill="none"
								stroke="#000"
								stroke-width="1.03"
								points="6 6 10 10 6 14"
							></polyline>
						</svg>
					</h4>
				</div>
				<h4>| |</h4>
			</div>

			<div className="quiz--lvl">
				<div className="quiz--lvlleft">
					<h1 className="quiz--point">{score}</h1>
					<h4 className="quiz--lvltext">Lvl {level}, #1</h4>
				</div>
				<div className="quiz--lvlright">
					<div>
						{(live > 2 && <Heart />) || <Heart class="heart--zero" />}
						{(live > 1 && <Heart />) || <Heart class="heart--zero" />}
						{(live > 0 && <Heart />) || <Heart class="heart--zero" />}
					</div>
					<h1 className="quiz--second">{timer}</h1>
				</div>
			</div>

			<div className="quiz--imgcontainer">
				<div className="quiz--card">
					<img className="quiz--img" src={props.character_image} />
				</div>
				<div className="quiz--image"></div>
			</div>

			<div className="quiz--answer">
				<div className="quiz--answer1">{mappedAnswer}</div>
				<div className="quiz--answer2">{mappedAnswer2}</div>
			</div>
		</div>
	);
}

function Heart(props) {
	return (
		<svg
			className={props.class ? "quiz--heart heart--zero" : "quiz--heart"}
			width="24"
			height="24"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			data-svg="heart"
		>
			<path
				// fill="none"
				stroke="#000"
				stroke-width="1.03"
				d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"
			></path>
		</svg>
	);
}

function AnswerBtn(props) {
	const isTrue = props.answer === "Yes" ? true : false;
	let isPosition;
	if (props.position == "up" && props.index <= 1) {
		isPosition = false;
	} else if (props.position == "up" && props.index > 1) {
		isPosition = props.fiftys;
	}
	if (props.position == "down" && props.index > 1) {
		isPosition = false;
	} else if (props.position == "down" && props.index <= 1) {
		isPosition = props.fiftys;
	}

	function Guess(e) {
		let target = e.target;
		if (
			target.className === "quiz--answerbtn falsee" ||
			target.className === "quiz--answerbtn truee"
		) {
			target.className = "quiz--answerbtn guess";
			setTimeout(props.onClick, 1000);
		} else {
			target.parentElement.className = "quiz--answerbtn guess";
			setTimeout(props.onClick, 1000);
		}
	}
	return (
		<div
			onClick={Guess}
			className={isTrue ? "quiz--answerbtn truee" : "quiz--answerbtn falsee"}
		>
			<p
				className={
					!isTrue
						? isPosition
							? `quiz--answername heart--zero`
							: "quiz--answername"
						: "quiz--answername"
				}
			>
				{props.character_name}
			</p>
			<p
				className={
					!isTrue
						? isPosition
							? `quiz--answerdetail heart--zero`
							: "quiz--answerdetail"
						: "quiz--answerdetail"
				}
			>
				{props.anime_name}
			</p>
		</div>
	);
}
