const general_reducer = (state, action) => {
	if (action.type === "CHANGE_MODAL_VIEW") {
		console.log("modal open");
		return;
	}
	if (action.type === "ORDER_VIEW") {
		return { ...state, order_view: false };
	}
	if (action.type === "SINGLE_ORDER_VIEW") {
		return { ...state, order_view: true };
	}
	if (action.type === "ADD_TO_CART") {
		console.log("added to cart");
		return;
	}
	if (action.type === "COMPARE_TO") {
		console.log("comparing product");
		return;
	}
	if (action.type === "DELETE_PRODUCT") {
		console.log("deleting product");
		return;
	}
	if (action.type === "SEARCH") {
		console.log("searching products");
		return;
	}
	throw new Error(`No matching "${action.type}" - action type`);
};

export default general_reducer;
