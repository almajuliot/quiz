import Leaderboard from "../Components/Leaderboard";
import dummy from "../dummy";
export default function Leaderboards() {
	const mappedLeaderboard = dummy.map((each, index) => {
		return (
			<Leaderboard
				counter={index + 1}
				name={each.firstname + " " + each.lastname}
			/>
		);
	});
	return (
		<>
			<h1 className="leaderboard--title">Leaderboard</h1>
			<table className="leaderboard--table">
				<tbody>{mappedLeaderboard}</tbody>
			</table>
		</>
	);
}
