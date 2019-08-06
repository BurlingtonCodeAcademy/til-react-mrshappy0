import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import FactList from "./FactList.js";
import SingleFact from "./SingleFact.js";
import { BrowserRouter, Link, Route } from "react-router-dom";

const Router = () => {
	return (
		<BrowserRouter>
			<div>
				<Route exact path="/" component={App} />
			</div>
			<div>
				<Route exact path="/facts" component={FactList} />
			</div>
			<div>
				<Route
					exact
					path="/singlefact/:_id?"
					render={({ match }) => {
						return <SingleFact id={match.params._id} />;
					}}
				/>
			</div>
		</BrowserRouter>
	);
};

// //---------------------------------------

// class Router extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	parsePath(path) {
// 		const parts = path.split("/");
// 		// returned array with just "" - home
// 		//returned array with just "", "facts" - just list
// 		//returns array with "", "facts", "some _id" - fetch facts
// 		return {
// 			base: parts[0],
// 			path: parts[1],
// 			arg: parts[2]
// 		};
// 	}

// 	route(pathParts) {
// 		//pathParts is the returned object from parsePath.
// 		if (pathParts.base === "" && pathParts.path && pathParts.arg) {
// 			return <SingleFact post={pathParts.arg} />;
// 		} else if (pathParts.base === "" && pathParts.path) {
// 			return <FactList />;
// 		} else {
// 			return <App />;
// 		}
// 	}

// 	render() {
// 		return this.route(this.parsePath(document.location.pathname));
// 		//   //"posts/why-react-is-great"
// 		// 	let route;
// 		// 	if (document.location.pathname === "/") {
// 		// 		component = <App />;
// 		// 	} else if (document.location.pathname === "/facts") {
// 		// 		component = <FactList />;
// 		//   }
// 		//   return route
// 		// }
// 	}
// }

ReactDOM.render(<Router />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
