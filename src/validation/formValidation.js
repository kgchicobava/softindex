import validator from "validator";
import { REQUIRED, PHONE_INVALID, AGE_INTEGER, BELOW_ZERO } from "./messages";

export default function validate(values) {
	let errors = {};
	if (validator.isEmpty(values.firstName)) {
		errors.firstName = REQUIRED;
	}

	if (validator.isEmpty(values.lastName)) {
		errors.lastName = REQUIRED;
	}

	if (!validator.isMobilePhone(values.phone)) {
		errors.phone = PHONE_INVALID;
	}

	if (validator.isEmpty(values.phone)) {
		errors.phone = REQUIRED;
	}

	if (!validator.isInt(values.age)) {
		errors.age = AGE_INTEGER;
	}

	if (values.age <= 0) {
		errors.age = BELOW_ZERO;
	}

	if (validator.isEmpty(values.age)) {
		errors.age = REQUIRED;
	}

	if (typeof values.gender === "string" && validator.isEmpty(values.gender)) {
		errors.gender = REQUIRED;
	}
	return errors;
}
