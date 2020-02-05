import React from "react";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

const TextInput = ({ error, label, value, name, onChange, type = "text" }) => {
	return (
		<FormControl error={Boolean(error)}>
			<InputLabel htmlFor="component-error">{label}</InputLabel>
			<Input value={value} onChange={onChange} name={name} type={type} />
			<FormHelperText>{error ? error : " "}</FormHelperText>
		</FormControl>
	);
};

export default TextInput;
