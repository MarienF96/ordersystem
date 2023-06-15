import React, { useContext, useReducer } from "react";
import reducer from "../reducer/general-reducer.jsx";

const initialState = {
	order_view: false,
	modal_status: false,
	cart: [],
	compare_products: [],
	order_loading: false,
	order_error: false,
	orders: [],
	single_order_loading: false,
	single_order_error: false,
	single_order: {},
};

const GeneralContext = React.createContext();

export const GeneralProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	//change modal view
	const modalStatus = () => {
		dispatch({ type: "CHANGE_MODAL_VIEW" });
	};
	//change order view
	const orderView = () => {
		dispatch({ type: "ORDER_VIEW" });
	};
	const singleOrderView = () => {
		dispatch({ type: "SINGLE_ORDER_VIEW" });
	};
	//add to cart
	const addToCart = () => {
		dispatch({ type: "ADD_TO_CART" });
	};
	// compare products
	const compareProducts = () => {
		dispatch({ type: "COMPARE_TO" });
	};
	return (
		<GeneralContext.Provider
			value={{
				...state,
				modalStatus,
				orderView,
				singleOrderView,
				addToCart,
				compareProducts,
			}}
		>
			{children}
		</GeneralContext.Provider>
	);
};

export const useGeneralContext = () => {
	return useContext(GeneralContext);
};
