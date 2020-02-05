import React from "react";
import AddForm from "./components/AddForm";
import RecordsTable from "./components/Table";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

class App extends React.Component {
	render() {
		return (
			<Provider store={store.store}>
				<PersistGate loading={null} persistor={store.persistor}>
					<div className="App">
						<AddForm />
						<RecordsTable />
					</div>
				</PersistGate>
			</Provider>
		);
	}
}

export default App;
