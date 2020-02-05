import { ADD_RECORD, DELETE_RECORDS } from "../constants";

const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_RECORD:
			return [...state, action.payload];
		case DELETE_RECORDS:
			return [...state.filter(elem => !action.payload.includes(elem.id))];
		default:
			return state;
	}
};
