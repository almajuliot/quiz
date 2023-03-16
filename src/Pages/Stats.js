import { useParams } from "react-router-dom";
import Leaderboards from "./Leaderboards";
export default function Stats(props) {
	return (
		<div className="stats">
			<h1 className="stats--score">Final Score : {props.score}</h1>
			<Each left="Quiz Mode" right="Ranked" />
			<Each left="Question number reached" right="1" />
			<Each left="Level reached" right={props.level} />

			<Title text={"Lifeline uses"} />
			<Each
				left={[`50:50 (`, <sup>50</sup>, `/`, <sub>50</sub>, `)`]}
				right="1"
			/>
			<Each left="Double Dip (×2)" right={props.timesTwo} />
			<Each
				left={[
					`Question Skip (`,
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
					</svg>,
					`)`,
				]}
				right={props.skip}
			/>

			<Title text={"Time stats"} />
			<Each
				left="Overall time taken"
				right={`${props.hours > 10 ? props.hours : `0${props.hours}`}:${
					props.minutes > 10 ? props.minutes : `0${props.minutes}`
				}:${props.seconds > 10 ? props.seconds : `0${props.seconds}`}`}
			/>
			<Each left="Time taken (excluding all pauses)" right="00:00:06" />
			<Each left="Average time per question" right="00:01.5" />

			<Title text={"Failed to guess"} />
			<Fail
				name={"Asami, Lilith"}
				bg={"https://chiaki.site/media/c/06/t/52883.jpg"}
			/>
			<Fail
				name={"Asami, Lilith"}
				bg={"https://chiaki.site/media/c/06/t/52883.jpg"}
			/>
			<Fail
				name={"Asami, Lilith"}
				bg={"https://chiaki.site/media/c/06/t/52883.jpg"}
			/>

			<Leaderboards leaderData={props.leaderData} />
		</div>
	);
}

function Fail(props) {
	const bg = props.bg;
	return (
		<>
			<div className="stats--fail">
				<div
					style={{ backgroundImage: `url(${bg})` }}
					className="stats--failimg"
				></div>
				<p className="stats--failname">{props.name}</p>
			</div>
			<hr />
		</>
	);
}

function Each(props) {
	return (
		<div className="stats--each">
			<div className="stats--container">
				<span
					data-fill="............................................................................................................................................................................................................................................................................"
					className="stats--status"
				>
					{props.left}
				</span>
			</div>
			<div className="stats--result">
				<b>{props.right}</b>
			</div>
		</div>
	);
}

function Title(props) {
	return <h1 className="stats--title">{props.text}</h1>;
}
