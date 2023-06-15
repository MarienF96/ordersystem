import React from "react";
import styled from "styled-components";

const LinkTab = () => {
	return (
		<Wrapper>
			<li>
				<button>Bestellingen</button>
			</li>
			<li>
				<button>Nieuwe Bestelling</button>
			</li>
			<li>
				<button>Producten</button>
			</li>
			<li>
				<button>Inkooporders</button>
			</li>
		</Wrapper>
	);
};

const Wrapper = styled.ul`
	display: flex;
	flex-direction: column;
	width: 250px;
	background-color: green;
	height: calc(100vh - 6rem);
	padding: 1rem;
	gap: 1rem;
	li {
		list-style: none;
	}
	button {
		font-size: 1.5rem;
		width: 100%;
		height: 6rem;
	}
`;

export default LinkTab;
