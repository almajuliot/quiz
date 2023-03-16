import Quizs from "../Components/Quizs";

export default function Quiz(props) {
	// console.log(props.quizData[0].quizQuestions);

	const mappedQuiz = props.quizData.map((each) => {
		if (each.answer === "Yes") {
			return (
				<Quizs
					setLevel={props.setLevel}
					level={props.level}
					key={each.anime_id}
					quizData={props.quizData}
					character_image={each.character_image}
					score={props.score}
					setScore={props.setScore}
					live={props.live}
					setLive={props.setLive}
					setTimeTake={props.setTimeTake}
					timeTake={props.timeTake}
					timer={props.timer}
					setTimer={props.setTimer}
					addScore={props.addScore}
					setAddScore={props.setAddScore}
					fiftys={props.fiftys}
					setFiftys={props.setFiftys}
					tapped={props.tapped}
					setTapped={props.setTapped}
				/>
			);
		}
	});

	return <div>{mappedQuiz}</div>;
}
