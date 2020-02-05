import { ADD_RECORD, DELETE_RECORDS } from "../constants";

export const addRecord = record => dispatch => {
	dispatch({ type: ADD_RECORD, payload: record });
};

export const deleteRecords = records => dispatch => {
	dispatch({ type: DELETE_RECORDS, payload: records });
};
