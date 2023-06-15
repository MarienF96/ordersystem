import React from "react";
import { useGeneralContext } from "../../context/general_context.jsx";
const SingleOrderView = () => {
	// global state
	const { orderView } = useGeneralContext();
	return <div onClick={orderView}>Single Order View</div>;
};

export default SingleOrderView;
