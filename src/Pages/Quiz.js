export default function Quiz() {
	return (
		<div className="quiz">
			<div className="quiz--btn">
				<div className="quiz--btnleft">
					<h4 className="quiz--h4">
						<sup className="quiz--sup">50</sup>/
						<sub className="quiz--sub">50</sub>
					</h4>
					<h4>x2</h4>
					<h4>
						<svg
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
					<h1 className="quiz--point">00001</h1>
					<h4 className="quiz--lvltext">Lvl 1, #1</h4>
				</div>
				<div className="quiz--lvlright">
					<div>
						<Heart />
						<Heart />
						<Heart />
					</div>
					<h1 className="quiz--second">00</h1>
				</div>
			</div>

			<div className="quiz--imgcontainer">
				<div className="quiz--card">
					<img
						className="quiz--img"
						src="https://chiaki.site/media/c/a3/117909.jpg"
					/>
				</div>
				<div className="quiz--image"></div>
			</div>

			<div className="quiz--answer">
				<div className="quiz--answer1">
					<div className="quiz--answerbtn">
						<p className="quiz--answername">YATO</p>
						<p className="quiz--answerdetail">Noragami</p>
					</div>
					<div className="quiz--answerbtn">
						<p className="quiz--answername">YATO</p>
						<p className="quiz--answerdetail">Noragami</p>
					</div>
				</div>
				<div className="quiz--answer2">
					<div className="quiz--answerbtn">
						<p className="quiz--answername">YATO</p>
						<p className="quiz--answerdetail">Noragami</p>
					</div>
					<div className="quiz--answerbtn">
						<p className="quiz--answername">YATO</p>
						<p className="quiz--answerdetail">Noragami</p>
					</div>
				</div>
			</div>
		</div>
	);
}

function Heart() {
	return (
		<svg
			className="quiz--heart"
			width="24"
			height="24"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			data-svg="heart"
		>
			<path
				fill="none"
				stroke="#000"
				stroke-width="1.03"
				d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"
			></path>
		</svg>
	);
}
