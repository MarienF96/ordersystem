import React, { useContext, useReducer } from "react";
import reducer from "../reducer/general-reducer.jsx";

const initialState = {
	modal_status: false,
	cart: [],
	compare_products: [],
};

const GeneralContext = React.createContext();

export const GeneralProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	//open modal
	const openModal = () => {
		dispatch({ type: "MODAL_OPEN" });
	};
	//close modal
	const closeModal = () => {
		dispatch({ type: "MODAL_CLOSE" });
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
			value={{ ...state, openModal, closeModal, addToCart, compareProducts }}
		>
			{children}
		</GeneralContext.Provider>
	);
};

export const useGeneralContext = () => {
	return useContext(GeneralContext);
};
