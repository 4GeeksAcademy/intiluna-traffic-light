import React, {useState} from "react";
import Semaforo from "../component/semaforo.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";





//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Semaforo/>	
		</div>
	);
};

export default Home;
