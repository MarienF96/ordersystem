import React from "react";
import { Navbar, CategoryTab } from "../components";
import { useGeneralContext } from "../context/general_context.jsx";

const HomePage = () => {
	const { openModal } = useGeneralContext();
	return (
		<div>
			<Navbar></Navbar>
			<CategoryTab></CategoryTab>
			<button onClick={openModal}>click me</button>
		</div>
	);
};

export default HomePage;
