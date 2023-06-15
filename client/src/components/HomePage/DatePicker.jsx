import React, { useState, useEffect } from "react";
import styled from "styled-components";

const DatePicker = () => {
	const [date, setDate] = useState("");

	const getCurrentDate = () => {
		const date = new Date();
		const currentDay = date.getDay();
		const currentMonth = date.getMonth();
		const currentYear = date.getFullYear();
		console.log(currentDay);
		console.log(currentMonth);
		console.log(currentYear);
	};

	useEffect(() => {
		getCurrentDate();
	}, []);

	return (
		<Wrapper>
			<div className="block prev">&lt;</div>
			<div className="block date">
				<h4>Dinsdag</h4>
				<h2>6</h2>
			</div>
			<div className="block date">
				<h4>Woensdag</h4>
				<h2>7</h2>
			</div>
			<div className="block date">
				<h4>Donderdag</h4>
				<h2>8</h2>
			</div>
			<div className="block date">
				<h4>Vrijdag</h4>
				<h2>9</h2>
			</div>
			<div className="block date">
				<h4>Zaterdag</h4>
				<h2>10</h2>
			</div>
			<div className="block next">&gt;</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	height: 8rem;
	width: 100%;
	background-color: #ac4747;
	.block {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
`;

export default DatePicker;
