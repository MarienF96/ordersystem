import React from "react";
import { useGeneralContext } from "../../context/general_context.jsx";
import styled from "styled-components";
import { orderData } from "../../data.js";

const OrderView = () => {
	// global state
	const { singleOrderView } = useGeneralContext();

	return (
		<Wrapper>
			{orderData.map((order, index) => {
				const { id, naam, pickUpTime, inpakStatus } = order;
				return (
					<div key={id} onClick={singleOrderView} className="order">
						<h2 className="center">
							{naam}
							{pickUpTime ? " - " : ""}
							{pickUpTime}
						</h2>
						<div className="order-status center">{inpakStatus}</div>
					</div>
				);
			})}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	overflow-y: scroll;
	max-height: calc(100vh - 14rem);
	.order {
		height: 8rem;
		background-color: red;
		display: flex;
		border-bottom: 1px solid black;
		h2 {
			flex: 1;
		}
		.order-status {
			height: 100%;
			aspect-ratio: 1;
		}
	}
`;

export default OrderView;
