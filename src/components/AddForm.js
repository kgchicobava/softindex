import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import validate from "../validation/formValidation";
import TextInput from "./common/TextInput";
import isEmpty from "../utilities/isEmpty";
import FormControl from "@material-ui/core/FormControl";
import { connect } from "react-redux";
import { addRecord } from "../store/actions/recordsActions";
import uuidv4 from "uuid/v4";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";

const initialState = {
	firstName: "",
	lastName: "",
	phone: "",
	gender: "",
	age: "",
	errors: {}
};

const styles = theme => ({
	paperContainer: {
		width: "30vw",
		display: "flex",
		flexDirection: "column",
		margin: "0 auto",
		padding: "20px",
		[theme.breakpoints.down("sm")]: {
			width: "90vw"
		}
	},
	button: {
		marginLeft: "10px"
	},
	selectEmpty: {
		marginTop: "16px"
	}
});

class AddForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			...initialState
		};
	}

	handleChange = ev => {
		this.setState({
			[ev.target.name]: ev.target.value,
			errors: { ...this.state.errors, [ev.target.name]: "" }
		});
	};

	handleSubmit = () => {
		if (isEmpty(validate(this.state))) {
			this.props.addRecord({
				id: uuidv4(),
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				phone: this.state.phone,
				gender: this.state.gender,
				age: this.state.age
			});
			this.handleClear();
		} else {
			this.setState({ errors: validate(this.state) });
		}
	};

	handleClear = () => {
		this.setState({ ...initialState });
	};

	render() {
		const { firstName, lastName, phone, gender, age, errors } = this.state;
		const { classes } = this.props;
		return (
			<form
				noValidate
				onSubmit={ev => {
					ev.preventDefault();
					this.handleSubmit();
				}}
				autoComplete="off">
				<Paper elevation={0} className={classes.paperContainer}>
					<Typography variant="h3">Add record</Typography>
					<TextInput
						error={errors.firstName}
						label="First Name"
						value={firstName}
						name="firstName"
						onChange={this.handleChange}
					/>
					<TextInput
						error={errors.lastName}
						label="Last Name"
						value={lastName}
						name="lastName"
						onChange={this.handleChange}
					/>
					<TextInput
						error={errors.phone}
						label="Phone"
						value={phone}
						name="phone"
						onChange={this.handleChange}
					/>
					<FormControl error={Boolean(errors.gender)}>
						<InputLabel>Gender</InputLabel>
						<Select
							value={gender}
							name="gender"
							onChange={this.handleChange}
							className={classes.selectEmpty}>
							<MenuItem value="" disabled>
								Gender
							</MenuItem>
							<MenuItem value={true}>Male</MenuItem>
							<MenuItem value={false}>Female</MenuItem>
						</Select>
						<FormHelperText>
							{errors.gender ? errors.gender : " "}
						</FormHelperText>
					</FormControl>

					<TextInput
						error={errors.age}
						label="Age"
						value={age}
						name="age"
						type="number"
						onChange={this.handleChange}
					/>
					<div className="buttons-container">
						<Button
							variant="outlined"
							color="primary"
							onClick={this.handleClear}>
							Clear
						</Button>
						<Button
							variant="contained"
							color="primary"
							className={classes.button}
							onClick={this.handleSubmit}>
							Add
						</Button>
					</div>
				</Paper>
			</form>
		);
	}
}

export default connect(null, { addRecord })(withStyles(styles)(AddForm));
