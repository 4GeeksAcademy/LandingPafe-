import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Footer } from "./Footer4Geeks";
import Navbar from "./Navbar";
import Alerta from "./alerta";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			
			<Alerta />

			<Card />

			<Footer />


		</div>
	);
};

export default Home;