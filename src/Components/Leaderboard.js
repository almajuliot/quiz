export default function Leaderboard(props) {
	const bg = props.user_image_url;
	const styles = {
		backgroundImage: `url(${bg})`,
	};
	return (
		<tr className="leaderboard">
			<td>
				<p className="leaderboard--font">{props.counter}</p>
			</td>
			<td>
				<div style={styles} className="leaderboard--img"></div>
			</td>
			<td>
				<p className="leaderboard--font">
					<b className="leaderboard--font">{props.name}</b>
				</p>
			</td>
			<td>
				<p className="leaderboard--font">Feb 25, 2023</p>
			</td>
			<td>
				<p className="leaderboard--font">
					Lvl {props.level_reached}, #{props.times_played}
				</p>
			</td>
			<td>
				<p className="leaderboard--fontscore">{props.points_scored}</p>
			</td>
		</tr>
	);
}
