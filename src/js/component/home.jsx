import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TrafficLights } from "./TrafficLights.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1>Traffic Light</h1>
			<TrafficLights />
		</div>
	);
};

export default Home;
