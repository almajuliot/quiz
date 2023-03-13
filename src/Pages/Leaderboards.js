import Leaderboard from "../Components/Leaderboard";
import dummy from "../dummy";
export default function Leaderboards(props) {
	const mappedLeaderboard = props.leaderData[0].result.map((each, index) => {
		return (
			<Leaderboard
				key={each.user_id}
				counter={index + 1}
				name={each.user_handle}
				level_reached={each.level_reached}
				points_scored={each.points_scored}
				user_image_url={each.user_image_url}
				times_played={each.times_played}
				completed_at={each.completed_at}
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
