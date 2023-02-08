import React, { useEffect, useState } from "react";

import Navigation from "./components/navigation";
import Card from "./components/card";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import CardLoading from "./components/cardLoading";
import HeroCarousel from "./components/heroCarousel";

function App() {
	return (
		<div>
			<Helmet>
				<title>Vite+React!</title>
				<meta name="description" content="this meta description." />
			</Helmet>
			<Navigation />
		</div>
	);
}

export default App;
