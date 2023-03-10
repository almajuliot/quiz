export default function Leaderboard() {
	const bg =
		"https://api-cdn.myanimelist.net/images/userimages/10171065.jpg?t=1677346200";
	const styles = {
		backgroundImage: `url(${bg})`,
	};
	return (
		<div className="leaderboard">
			<h1>Leaderboard</h1>
			<div className="leaderboard--each">
				<p>1</p>
				<div style={styles} className="leaderboard--img"></div>
				<p>
					<b>AzizKun</b>
				</p>
				<p>Feb 25, 2023</p>
				<p>Lvl 7, #847</p>
				<p>7342</p>
			</div>
		</div>
	);
}
