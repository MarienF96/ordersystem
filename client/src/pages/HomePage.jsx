import React, { useState } from "react";
import {
	Navbar,
	LinkTab,
	DatePicker,
	OrderView,
	SingleOrderView,
	NewOrder,
} from "../components";
import { useGeneralContext } from "../context/general_context.jsx";

const HomePage = () => {
	// global state
	const { order_view } = useGeneralContext();

	return (
		<div>
			<Navbar></Navbar>
			<div className="homescreen">
				<LinkTab></LinkTab>
				<div className="orderview">
					<DatePicker></DatePicker>
					{order_view ? <SingleOrderView /> : <OrderView />}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
