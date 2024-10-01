import React from "react";
import PropTypes from 'prop-types';


//include images into your bundle
import { Navbar } from "../navbar";
import { Contenedor } from "../cardContainer";


//create your first component
const Home = () => {
	return (

		<div>

		<Navbar></Navbar>
		<div className="container-fluid"> 
		<Contenedor></Contenedor>
		</div>

		</div>
	);
};

export default Home;
