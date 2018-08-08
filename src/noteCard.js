import React from "react";
export default function NoteCard() {
	return (
		<div className="noteCard">
			<div className="noteCard-front">
			{/*==================================BUILD NOTES=========================== */}
			{/* for this section I think plain would be best, I'd like to set it to toggle switches for the answers*/}
			{/*==================================BUILD NOTES=========================== */}
				<p>Front of NoteCard</p>
				<h1 className="noteCard-header1">Question #111</h1>
				<h2 className="noteCard-header2">Subject: javaScript</h2>
				<h3 className="noteCard-questionHeader"><strong>Q:</strong>What are the things</h3>
					<ul className="noteCard-answerList">
						<li className="noteCard-possibleAnswer">Answer 1</li>
						<li className="noteCard-possibleAnswer">Answer 2</li>
						<li className="noteCard-possibleAnswer">Answer 3</li>
						<li className="noteCard-possibleAnswer">Answer 4</li>
					</ul>
			</div>\
			{/*==================================BUILD NOTES=========================== */}
			{/* for this I think it is possible to make it look like a notecard: major red line, rest are blue lines */}
			{/*==================================BUILD NOTES=========================== */}
			<div className="noteCard-back">
				<p>Back of NoteCard</p>
				<h1 className="noteCard-header1">Question #111</h1>	
				<p><strong>ANSWER:</strong> answer answer</p>
				<a href='#'>this is the link to the docs</a>
			</div>
		</div>
	);
};