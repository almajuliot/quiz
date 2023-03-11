import { useState } from "react";
export default function Rules(props) {
	const [show, setShow] = useState(false);

	function handleClick() {
		setShow((prevShow) => !prevShow);
	}
	const setel = show ? "block" : "none";
	const styles = {
		display: setel,
	};

	return (
		<div className="rules">
			<div onClick={handleClick} className="rules--title">
				<h1>{props.title}</h1>
				<h1>+</h1>
			</div>
			<p className="rules--text" style={styles}>
				{props.text}
			</p>
		</div>
	);
}
