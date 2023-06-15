import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GeneralProvider } from "./context/general_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GeneralProvider>
			<App />
		</GeneralProvider>
	</React.StrictMode>,
);
