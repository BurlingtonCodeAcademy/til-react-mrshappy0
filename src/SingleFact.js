import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

console.log("test")

class SingleFact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		};
	}

  
  
  
	componentDidMount() {
    let something = window.location.pathname.split("/")[2];
    console.log(something);
		fetch(`/singlefact/${something}`)
			.then(res => res.json())
			.then(result => {
        console.log(result)
				this.setState({
					items: result
				});
			});
	}

	render() {
		const { items } = this.state;
		return (
			<div>
				<h1>items</h1>
				<ul>
					{items.map(item => (
							<li key={item._id}>
								TIL: {item.text}
								<br />When: {item.when}
							</li>
					))}
				</ul>
			</div>
		);
	}
}
export default SingleFact