import Quizs from "../Components/Quizs";

export default function Quiz(props) {
	// console.log(props.quizData[0].quizQuestions);

	const mappedQuiz = props.quizData[0].quizQuestions.map((each) => {
		if (each.answer === "Yes") {
			return (
				<Quizs
					key={each.anime_id}
					quizData={props.quizData}
					character_image={each.character_image}
				/>
			);
		}
	});

	return <div>{mappedQuiz}</div>;
}
