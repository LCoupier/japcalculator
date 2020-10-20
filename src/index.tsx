import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { store } from "./redux/config";
import { history } from "./redux/Router/router";
import { theme } from "./style/theme";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
	dsn: "https://c93a8f5866bb44a7a8f7af2e50cb2647@o464340.ingest.sentry.io/5472438",
	integrations: [
	  new Integrations.BrowserTracing(),
	],
  
	// We recommend adjusting this value in production, or using tracesSampler
	// for finer control
	tracesSampleRate: 1.0,
  });

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</ConnectedRouter>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
