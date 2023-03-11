export default function Leaderboard(props) {
	const bg =
		"https://api-cdn.myanimelist.net/images/userimages/10171065.jpg?t=1677346200";
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
				<p className="leaderboard--font">Lvl 7, #847</p>
			</td>
			<td>
				<p className="leaderboard--fontscore">7342</p>
			</td>
		</tr>
	);
}
