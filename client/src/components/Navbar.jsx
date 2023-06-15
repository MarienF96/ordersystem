import React from "react";
import styled from "styled-components";

const Navbar = () => {
	return (
		<Wrapper>
			<div className="logo center">FIERET</div>
			<div className="navbar">
				<div className="search">
					<input type="text" placeholder="Zoeken" />
					<button>Zoeken</button>
				</div>
				<div className="cart center">Cart</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.nav`
	height: 6rem;
	width: 100vw;
	background-color: green;
	display: flex;
	.logo {
		width: 250px;
		height: 100%;
		background-color: red;
	}
	.navbar {
		display: flex;
		background-color: blue;
		flex: 1;
		.search {
			flex: 1;
			background-color: brown;
			margin: 1rem;
			border-radius: 25px;
			display: flex;
			input {
				flex: 1;
				padding: 1rem;
			}
			button {
				width: 4rem;
			}
		}
		.cart {
			width: 6rem;
			background-color: yellow;
		}
	}
`;

export default Navbar;
